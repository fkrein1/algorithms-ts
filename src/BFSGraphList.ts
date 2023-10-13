export default function bfs(
  graph: WeightedAdjacencyList,
  source: number,
  needle: number,
): number[] | null {
  const seen = new Array(graph.length).fill(false);
  const prev = new Array(graph.length).fill(-1);

  seen[source] = true;
  const queue = [source];

  while (queue.length) {
    const curr = queue.shift() as number;
    if (curr === needle) {
      break;
    }
    const adjs = graph[curr];
    for (let i = 0; i < adjs.length; i++) {
      const neighbor = adjs[i].to;
      if (seen[neighbor]) {
        continue;
      }
      seen[neighbor] = true;
      prev[neighbor] = curr;
      queue.push(neighbor);
    }
  }

  if (prev[needle] === -1) {
    return null;
  }

  let curr = needle;
  const out: number[] = [];

  while (prev[curr] !== -1) {
    out.push(curr);
    curr = prev[curr];
  }

  out.push(source);
  return out.reverse();
}
