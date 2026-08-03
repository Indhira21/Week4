function fibonacci(n: number): number {
  // Initialize the first two Fibonacci numbers
  let prev = 0; // fibonacci(0)
  let curr = 1; // fibonacci(1)

  if (n === 0) return prev;
  if (n === 1) return curr;

  for (let i = 2; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}

console.log(fibonacci(0));  
console.log(fibonacci(1));  
console.log(fibonacci(2));  
console.log(fibonacci(6));