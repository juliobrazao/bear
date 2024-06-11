export function futureDateSimulator(): number {
  return Number(Math.random().toString().split(".")[1].slice(0, 13));
}
