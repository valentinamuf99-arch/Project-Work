// The only module that reads data/. Path is relative to this file, so it works from index.html and pages/.
export async function loadData(name) {
  const res = await fetch(new URL(`../data/${name}.json`, import.meta.url));
  if (!res.ok) throw new Error(`Mock data "${name}" not found (${res.status})`);
  return res.json();
}
