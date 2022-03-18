/**
 * Reference: https://www.youtube.com/watch?v=tWVWeAqZ0WU&t=157s
 */

// Collection of nodes + edges

// stack would be used to implement dfs
const dfs = (graph, source) => {
  const stack = [source];
  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);
    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
}

// no base condition specified explicitly because it exits anyways at empty neighbor
const dfsTwo = (graph, source) => {
  console.log(source);
  for (let neighbor of graph) {
    dfsTwo(graph, neighbor)
  }
}

const bfsPrint = (graph, source) => {
  const queue = [source];
  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
}

const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
}