type Point = {
  x: number;
  y: number;
};

const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function walk(
  maze: string[],
  wall: string,
  curr: Point,
  seen: boolean[][],
  path: Point[],
  end: Point,
): boolean {
  
  // off the map
  if (
    curr.x < 0 ||
    curr.x >= maze[0].length ||
    curr.y < 0 ||
    curr.y >= maze.length
  ) {
    return false;
  }

  // on a wall
  if (maze[curr.y][curr.x] === wall) {
    return false;
  }

  // seen before
  if (seen[curr.y][curr.x]) {
    return false;
  }

  // at the end
  if (curr.x === end.x && curr.y === end.y) {
    path.push(curr);
    return true;
  }

  seen[curr.y][curr.x] = true;
  path.push(curr);

  for (let i = 0; i < dir.length; i++) {
    const [x, y] = dir[i];
    if (
      walk(
        maze,
        wall,
        {
          x: curr.x + x,
          y: curr.y + y,
        },
        seen,
        path,
        end,
      )
    ) {
      return true;
    }
  }

  path.pop();

  return false;
}

export default function solve(
  maze: string[],
  wall: string,
  start: Point,
  end: Point,
): Point[] {
  const seen: boolean[][] = [];
  const path: Point[] = [];

  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[0].length).fill(false));
  }

  walk(maze, wall, start, seen, path, end);

  return path;
}
