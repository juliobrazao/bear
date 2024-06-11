export function delaySimulator(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
