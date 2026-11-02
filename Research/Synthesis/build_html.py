"""Rebuild Research/Synthesis/research.html from the Markdown notes, in the page format already used.

Run from anywhere: python3 Research/Synthesis/build_html.py
"""
import html, os, posixpath, re, sys

ROOT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..')
ROOT = os.path.normpath(ROOT)
OUT = os.path.join(ROOT, 'Research', 'Synthesis', 'research.html')
TABLES = ['Research/Synthesis/2026-10-23-01.1-touchpoints-ai.md', 'Research/Synthesis/2026-10-23-02-features-ai.md', 'Research/Synthesis/2026-10-23-03-user-stories-ai.md']
# Folders shown, in this order; Raw and Transcript stay out as before.
FOLDERS = ['Research', 'Research/Desk research', 'Research/Notes', 'Research/Synthesis', 'Research/Ideation']

KNOWN = set()
for d, _, fs in os.walk(ROOT):
    if '.git' in d or 'reference' in d.lower():
        continue
    for f in fs:
        if f.endswith('.md'):
            KNOWN.add(os.path.relpath(os.path.join(d, f), ROOT).replace(os.sep, '/'))

def slug(s):
    return re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')

def aid(path):
    return 'n-' + slug(path)

def undated(name):
    return re.sub(r'^\d{4}-\d{2}-\d{2}-(\d+(\.\d+)?-)?', '', posixpath.basename(name))

# Old links (touchpoints-human.md, 2026-10-23-touchpoints-ai.md) still reach the renamed files.
ALIAS = {}
for k in sorted(KNOWN):
    ALIAS.setdefault(undated(k), []).append(k)

def index_order():
    """Root notes, then every note of each folder in FOLDERS, by file name (files on disk, not index.md)."""
    order = [p for p in ('index.md', 'structure.md') if p in KNOWN]
    # Plan and script first, interviews in P1..P6 order, the rest by file name.
    first = ['Research/plan.md', 'Research/interview-script.md'] + [CODES[c] for c in sorted(CODES) if c.startswith('P')]
    key = lambda k: (first.index(k) if k in first else len(first), k)
    for f in FOLDERS:
        order += sorted((k for k in KNOWN if posixpath.dirname(k) == f), key=key)
    return order

def resolve(target, cur, folder):
    target = target.split('#')[0]
    if not target.endswith('.md'):
        return None
    d = posixpath.dirname(cur)
    for base in (d, folder, 'Research', ''):
        p = posixpath.normpath(posixpath.join(base, target)) if base else posixpath.normpath(target)
        if p in KNOWN:
            return p
    hits = ALIAS.get(undated(target), [])
    return hits[0] if len(hits) == 1 else None

class Ctx:
    def __init__(self, path, shown):
        self.path, self.shown, self.folder, self.heads = path, shown, '', {}

    def link(self, p):
        return '#' + aid(p) if p in self.shown else None

def inline(text, ctx):
    slots = []
    def keep(s):
        slots.append(s)
        return '\x00%d\x00' % (len(slots) - 1)

    def code(m):
        inner = '<code>%s</code>' % html.escape(m.group(1), quote=False)
        p = resolve(m.group(1), ctx.path, ctx.folder)
        href = ctx.link(p) if p else None
        return keep('<a href="%s">%s</a>' % (href, inner) if href else inner)
    text = re.sub(r'`([^`]+)`', code, text)

    def link(m):
        label, url = m.group(1), m.group(2)
        if url.startswith('#'):
            href = '#' + aid(ctx.path) + '--' + url[1:]
        elif re.match(r'https?://', url):
            return keep('<a href="%s" target="_blank" rel="noopener">%s</a>' % (html.escape(url), inline_simple(label, slots)))
        else:
            p = resolve(url, ctx.path, ctx.folder)
            href = ctx.link(p) if p else None
        lab = inline_simple(label, slots)
        if not href:
            return keep(lab)
        return keep('<a href="%s">%s</a>' % (html.escape(href), lab))
    text = re.sub(r'\[([^\]]+)\]\(([^)\s]+)\)', link, text)

    text = html.escape(text, quote=False)

    def bare(m):
        p = resolve(m.group(0), ctx.path, ctx.folder)
        href = ctx.link(p) if p else None
        return keep('<a href="%s">%s</a>' % (href, m.group(0))) if href else m.group(0)
    text = re.sub(r'(?<![\w/.-])[\w.-]+\.md\b', bare, text)
    text = re.sub(TOKEN, lambda m: token(m, ctx), text)
    text = inline_simple(text, slots, escaped=True)
    while '\x00' in text:
        text = re.sub(r'\x00(\d+)\x00', lambda m: slots[int(m.group(1))], text)
    return text

AI_DOCS = set(TABLES) | {'Research/2026-10-24-gaps-notes.md'}
HUMAN = 'Research/Synthesis/2026-10-23-01-touchpoints-human.md'
TOKEN = r'(?<![\w-])(⚠?C\d+|TP \d+[a-z]?|TP-\d+|F\d+|P[1-6]|REV|S[1-7])(?![\w-])'
CODES = {}   # P1..P6, REV -> note path; filled from the touchpoints note
SCODES = {}  # S1..S7 -> note path; filled from touchpoints-human

def token(m, ctx):
    t = m.group(1)
    href = None
    if t in CODES:
        href = ctx.link(CODES[t])
    elif re.fullmatch(r'S\d', t):
        href = ctx.link(SCODES[t]) if ctx.path == HUMAN and t in SCODES else None
    elif t.startswith('TP-'):
        href = '#th-' + t
    elif t.startswith('TP '):
        href = '#tp-' + t[3:]
    elif t.startswith('F'):
        href = '#f-' + t[1:]
    elif ctx.path in AI_DOCS:
        href = '#c-' + t.lstrip('⚠C')
    return '<a href="%s">%s</a>' % (href, t) if href else t

def inline_simple(text, slots, escaped=False):
    if not escaped:
        text = re.sub(r'[^\x00]+', lambda m: html.escape(m.group(0), quote=False), text)
    text = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', text)
    text = re.sub(r'(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])', r'<em>\1</em>', text)
    return text

def cells(line):
    return [c.strip() for c in line.strip().strip('|').split('|')]

def render_list(lines, ctx):
    """lines: (indent, ordered, text). Nested by indent."""
    out, i = [], 0
    def block(i, indent):
        ordered = lines[i][1]
        parts = ['<ol>' if ordered else '<ul>']
        while i < len(lines) and lines[i][0] >= indent:
            if lines[i][0] > indent:
                sub, i = block(i, lines[i][0])
                parts[-1] = parts[-1][:-5] + sub + '</li>'
                continue
            c = re.match(r'\*\*C(\d+)\b', lines[i][2]) if ctx.path == TABLES[0] else None
            idattr = ' id="c-%s"' % c.group(1) if c else ''
            parts.append('<li class="u"%s>%s</li>' % (idattr, inline(lines[i][2], ctx)))
            i += 1
        parts.append('</ol>' if ordered else '</ul>')
        return ''.join(parts), i
    while i < len(lines):
        s, i = block(i, lines[i][0])
        out.append(s)
    return ''.join(out)

def render_body(md, ctx):
    lines, out, i = md.split('\n'), [], 0
    while i < len(lines):
        line = lines[i]
        if not line.strip():
            i += 1
            continue
        m = re.match(r'(#{1,4})\s+(.*)', line)
        if m:
            lvl, txt = len(m.group(1)), m.group(2).strip()
            if lvl == 2 and ctx.path == 'index.md':
                ctx.folder = '' if txt == 'Root' else txt
            hid = aid(ctx.path) + '--' + slug(txt)
            out.append('<h%d class="u" id="%s">%s</h%d>' % (lvl + 1, hid, inline(txt, ctx), lvl + 1))
            i += 1
            continue
        if line.startswith('```'):
            j = i + 1
            while j < len(lines) and not lines[j].startswith('```'):
                j += 1
            out.append('<pre class="u">%s</pre>' % html.escape('\n'.join(lines[i + 1:j]), quote=False))
            i = j + 1
            continue
        if re.match(r'\s*(---|\*\*\*)\s*$', line):
            out.append('<hr>')
            i += 1
            continue
        if line.lstrip().startswith('|'):
            rows = []
            while i < len(lines) and lines[i].lstrip().startswith('|'):
                rows.append(cells(lines[i]))
                i += 1
            head, body = rows[0], [r for r in rows[1:] if not all(re.match(r':?-+:?$', c) for c in r)]
            t = ['<div class="tablewrap"><table><thead><tr>']
            t += ['<th>%s</th>' % inline(c, ctx) for c in head]
            t.append('</tr></thead><tbody>')
            for r in body:
                rc = [inline(c, ctx) for c in r]
                t.append('<tr class="u"%s>' % row_id(ctx, head, r) + ''.join('<td>%s</td>' % c for c in rc) + '</tr>')
            t.append('</tbody></table></div>')
            out.append(''.join(t))
            continue
        if line.startswith('>'):
            paras, cur = [], []
            while i < len(lines) and lines[i].startswith('>'):
                t = lines[i][1:].strip()
                if t:
                    cur.append(t)
                elif cur:
                    paras.append(cur)
                    cur = []
                i += 1
            if cur:
                paras.append(cur)
            out.append('<blockquote class="u">%s</blockquote>' % ''.join('<p>%s</p>' % inline(' '.join(p), ctx) for p in paras))
            continue
        if re.match(r'\s*([-*]|\d+\.)\s+', line):
            items = []
            while i < len(lines) and lines[i].strip():
                m = re.match(r'(\s*)([-*]|\d+\.)\s+(.*)', lines[i])
                if m:
                    items.append((len(m.group(1)), m.group(2)[0].isdigit(), m.group(3)))
                elif items:
                    items[-1] = (items[-1][0], items[-1][1], items[-1][2] + ' ' + lines[i].strip())
                i += 1
            out.append(render_list(items, ctx))
            continue
        para = []
        while i < len(lines) and lines[i].strip() and not re.match(r'(#{1,4}\s|```|\||>|\s*([-*]|\d+\.)\s)', lines[i]):
            para.append(lines[i].strip())
            i += 1
        text = ' '.join(para)
        story = re.match(r'\*\*(F\d+) ·', text) if ctx.path == TABLES[2] else None
        if story:
            # A user story: title, story and source line, until the next title or heading.
            ps = [text]
            while True:
                while i < len(lines) and not lines[i].strip():
                    i += 1
                if i >= len(lines) or re.match(r'(#{1,4}\s|\*\*F\d+ ·)', lines[i]):
                    break
                ps.append(lines[i].strip())
                i += 1
            out.append('<div class="u story" id="us-%s">%s</div>' % (story.group(1), ''.join('<p>%s</p>' % inline(p, ctx) for p in ps)))
            continue
        out.append('<p class="u">%s</p>' % inline(text, ctx))
    return '\n'.join(out)

DROPS = []

def row_id(ctx, head, r):
    first = r[0]
    if ctx.path == TABLES[0] and head[0] == '#' and re.fullmatch(r'\d+[a-z]?', first):
        return ' id="tp-%s"' % first
    if ctx.path == TABLES[1] and re.fullmatch(r'F\d+', first):
        return ' id="f-%s"' % first[1:]
    if ctx.path == TABLES[1] and head[0] == 'Feature considered':
        DROPS.append(first)
        return ' id="drop-%d"' % len(DROPS)
    if ctx.path == HUMAN and re.fullmatch(r'TP-\d+', first):
        return ' id="th-%s"' % first
    return ''

def read_codes(path, pattern):
    """Code -> note path from a 'code | file' table in the given note."""
    codes = {}
    for line in open(os.path.join(ROOT, path), encoding='utf-8'):
        c = cells(line) if line.startswith('|') else []
        if len(c) > 1 and re.fullmatch(pattern, c[0]):
            f = re.search(r'`([^`]+)`', c[1])
            if f:
                name = f.group(1) if f.group(1).endswith('.md') else f.group(1) + '.md'
                hits = [k for k in KNOWN if k.endswith('/' + posixpath.basename(name))]
                if hits:
                    codes[c[0]] = hits[0]
    return codes

ENTITY = r'<(tr|li|div) class="u[^"]*" id="((?:th-TP|tp|c|f|drop|us)-[^"]+)">(.*?)</\1>'
LABEL = {'th-TP': 'Human {}', 'tp': 'TP {}', 'c': 'C{}', 'f': 'F{}', 'us': 'Story {}'}

def finish(page):
    ids = set(re.findall(r'id="([^"]+)"', page))
    # Codes pointing at rows that no longer exist (removed touchpoints) stay as plain text.
    page = re.sub(r'<a href="#([^"]+)">([^<]*)</a>', lambda m: m.group(0) if m.group(1) in ids else m.group(2), page)
    cited = {}
    for m in re.finditer(ENTITY, page, re.S):
        eid = m.group(2)
        kind, num = re.match(r'(th-TP|tp|c|f|drop|us)-(.+)', eid).groups()
        if kind == 'drop':
            label = 'Dropped: ' + DROPS[int(num) - 1]
        else:
            label = LABEL[kind].format('TP-' + num if kind == 'th-TP' else num)
        notes = re.findall(r'href="#(n-[^"]+?-md)"', m.group(3))
        if 'benchmark note' in m.group(3):  # C5 and C6 name the benchmark without a link
            notes.append(aid('Research/Desk research/2026-10-12-benchmark.md'))
        for note in dict.fromkeys(notes):
            cited.setdefault(note, []).append((eid, label))
    rank = ['th-TP', 'tp', 'c', 'f', 'drop', 'us']
    def back(m):
        refs = sorted(cited.get(m.group(1), []), key=lambda e: rank.index(re.match(r'(th-TP|tp|c|f|drop|us)', e[0]).group(1)))
        if not refs:
            return m.group(0)
        return m.group(0) + '<p class="u back"><span>Cited by</span> %s</p>' % ' '.join('<a class="chip" href="#%s">%s</a>' % (e, html.escape(l)) for e, l in refs)
    return re.sub(r'<section class="note card" id="([^"]+)"[^>]*>.*?</header>', back, page, flags=re.S)

def split_fm(path):
    src = open(os.path.join(ROOT, path), encoding='utf-8').read()
    m = re.match(r'---\n(.*?)\n---\n', src, re.S)
    return (m.group(1), src[m.end():]) if m else ('', src)

def meta(path):
    """Frontmatter as a dict: plain values unquoted, trailing comments dropped, tags as a list."""
    d = {}
    for line in split_fm(path)[0].split('\n'):
        m = re.match(r'(\w+):\s*(.*)', line)
        if m:
            v = m.group(2).strip()
            v = v[1:-1] if v.startswith('"') and v.endswith('"') else re.sub(r'\s+#.*', '', v)
            d[m.group(1)] = v
    d['tags'] = [t.strip() for t in d.get('tags', '').strip('[]').split(',') if t.strip()]
    return d

ICON = {
    'dash': '<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/>',
    'root': '<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>',
    'desk': '<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5"/>',
    'notes': '<path d="M4 5h16v11H9l-5 4z"/>',
    'synth': '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
    'idea': '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/>',
    'table': '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M3 15h18M9 4v16"/>',
}

def icon(k):
    return '<svg class="ic" aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">%s</svg>' % ICON[k]

def esc(s):
    return html.escape(s, quote=True)

def chips(d, keys=('activity', 'status', 'grade', 'confidence', 'date')):
    out = []
    for k in keys:
        if d.get(k):
            warn = ' warn' if d[k] in ('needs-review', 'draft', 'raw') else ''
            out.append('<li class="chip %s%s"><span class="sr">%s: </span>%s</li>' % (k, warn, k, esc(d[k])))
    return '<ul class="chips">%s</ul>' % ''.join(out)

def footer(path):
    return '<footer class="nf"><a class="btn" href="#%s">Back to top</a><a href="#dashboard">Back to dashboard</a></footer>' % aid(path)

def section(path, shown, folder, full=True):
    d = meta(path)
    title = d.get('title') or posixpath.basename(path)
    if not full:
        return ('<section class="note card stub"><header class="nh u"><p class="path">%s</p><h2 class="title">%s</h2></header>'
                '<p class="u">Shown in full in Tables: <a href="#%s">%s</a>.</p><footer class="nf"><a href="#dashboard">Back to dashboard</a></footer></section>') % (
            esc(path), esc(title), aid(path), esc(path))
    fm, body = split_fm(path)
    ctx = Ctx(path, shown)
    parts = ['<section class="note card" id="%s" data-folder="%s" data-title="%s"><header class="nh u"><p class="path">%s</p><h2 class="title">%s</h2>%s</header>' % (
        aid(path), esc(folder), esc(title), esc(path), esc(title), chips(d))]
    if fm:
        parts.append('<details class="meta"><summary>Metadata</summary><pre class="fm u">%s</pre></details>' % html.escape(fm, quote=False))
    parts.append('<div class="body">%s</div>' % render_body(body, ctx))
    parts.append(footer(path))
    parts.append('</section>')
    return '\n'.join(parts)

# Sidebar groups: (anchor, name, icon, tint); notes per group are filled in main().
GROUPS = [('d-root', 'Root', 'root', 'blush'), ('d-desk-research', 'Desk research', 'desk', 'sky'),
          ('d-notes', 'Notes', 'notes', 'sage'), ('d-synthesis', 'Synthesis', 'synth', 'lavender'),
          ('d-ideation', 'Ideation', 'idea', 'sand'), ('d-tables', 'Tables', 'table', 'mint')]

def label(p):
    """Sidebar label: the participant code for interviews (no real names outside file names), the undated file name otherwise."""
    code = next((c for c, q in CODES.items() if q == p and c.startswith('P')), None)
    return code + ' · interview' if code else undated(p)[:-3]

def sidebar(groups):
    items = ['<li><a class="item" href="#dashboard">%s<span>Dashboard</span></a></li>' % icon('dash')]
    for (gid, name, ic, tint), paths in groups:
        items.append('<li><details data-folder="%s"><summary class="item" style="--tint:var(--%s)"><span class="dot">%s</span><span>%s</span><span class="count" aria-label="%d notes">%d</span></summary><ul class="sub">%s</ul></details></li>' % (
            esc(name), tint, icon(ic), esc(name), len(paths), len(paths),
            ''.join('<li><a href="#%s" title="%s">%s</a></li>' % (aid(p), esc(p), esc(label(p))) for p in paths)))
    return ('<nav id="side" aria-label="Research folders"><div class="brand"><p class="bt">Research base</p><p class="bs">Brief 01 · Redesigning the commute</p></div>'
            '<ul class="nav">%s</ul></nav>') % ''.join(items)

def dashboard(groups, order, body):
    metas = {p: meta(p) for p in order}
    count = lambda pre: len(re.findall(r'id="%s-' % pre, body))
    kpis = [('Total notes', len(order), None), ('Interviews (P1-P6)', sum(m.get('activity') == 'interview' for m in metas.values()), 'd-notes'),
            ('Touchpoints (TP)', count('tp'), aid(TABLES[0])), ('Features (F)', count('f'), aid(TABLES[1])),
            ('User stories', count('us'), aid(TABLES[2])), ('Needs review', sum(m.get('status') == 'needs-review' for m in metas.values()), None)]
    tiles = ''.join(('<li class="kpi"><a href="#%s"><span class="kv">%d</span><span class="kl">%s</span></a></li>' % (h, v, l)) if h else
                    '<li class="kpi"><div><span class="kv">%d</span><span class="kl">%s</span></div></li>' % (v, l) for l, v, h in kpis)
    cards = ''.join('<a class="fcard" href="#%s" style="--tint:var(--%s)"><span class="dot">%s</span><span class="fn">%s</span><span class="fc">%d notes</span><span class="fd">Latest %s</span></a>' % (
        gid, tint, icon(ic), esc(name), len(paths), max((metas[p].get('date', '') for p in paths), default=''))
        for (gid, name, ic, tint), paths in groups)
    latest = sorted(order, key=lambda p: (metas[p].get('date', ''), p), reverse=True)[:5]
    rows = ''.join('<li><a href="#%s">%s</a>%s</li>' % (aid(p), esc(metas[p].get('title') or p), chips(metas[p], ('status', 'grade', 'confidence', 'date'))) for p in latest)
    tags = {}
    for m in metas.values():
        for t in m['tags']:
            tags[t] = tags.get(t, 0) + 1
    top = sorted(tags.items(), key=lambda t: (-t[1], t[0]))[:24]
    tagchips = ''.join('<button type="button" class="chip tag" data-tag="%s">%s <span class="tn">%d</span></button>' % (esc(t), esc(t), c) for t, c in top)
    newest = max(m.get('date', '') for m in metas.values())
    return ('<section id="dashboard" class="part dash" aria-labelledby="dash-h"><div class="hello"><h1 id="dash-h">Research base</h1>'
            '<p>Brief 01 · Redesigning the commute. %d notes in %d folders, latest note dated %s.</p></div>'
            '<ul class="kpis" aria-label="Key figures">%s</ul><h2 class="dh">Folders</h2><div class="folders">%s</div>'
            '<div class="dgrid"><div class="card"><h2 class="dh">Latest notes</h2><ol class="latest">%s</ol></div>'
            '<div class="card"><h2 class="dh">Tags</h2><p class="hint">Most used tags. Select one to search for it.</p><div class="tagcloud">%s</div></div></div></section>') % (
        len(order), len(groups), newest, tiles, cards, rows, tagchips)

def main():
    CODES.update(read_codes(TABLES[0], r'P\d|REV'))
    SCODES.update(read_codes(HUMAN, r'S\d'))
    order = index_order()
    shown = set(TABLES) | set(order)
    tmpl = open(OUT, encoding='utf-8').read()
    m = re.search(r'<main[^>]*>', tmpl)
    head, tail = tmpl[:m.end()], tmpl[tmpl.index('</main>'):]
    paths = [[p for p in order if posixpath.dirname(p) in ('', 'Research')]] + [
        [p for p in order if posixpath.dirname(p) == f] for f in FOLDERS[1:]] + [TABLES]
    groups = list(zip(GROUPS, paths))
    head = re.sub(r'<nav id="side".*?</nav>', lambda _: sidebar(groups), head, flags=re.S)
    parts = []
    for (gid, name, ic, tint), ps in groups:
        full = name == 'Tables'
        parts.append('<div class="part folder" id="%s" data-folder="%s" style="--tint:var(--%s)"><h1 class="fh"><span class="dot">%s</span>%s</h1>%s</div>' % (
            gid, esc(name), tint, icon(ic), esc(name), ''.join(section(p, shown, name, full or p not in TABLES) for p in ps)))
    body = ''.join(parts)
    open(OUT, 'w', encoding='utf-8').write(finish(head + '\n' + dashboard(groups, order, body) + body + '\n' + tail))
    print(len(order), 'notes:', order)

if __name__ == '__main__':
    main()
