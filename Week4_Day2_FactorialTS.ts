function factorial(n: number): number {
  
  if (n < 0) {
   console.log("input should be greater than or equal to 0"); //to handle negative input
  }

 
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

// 4. Example calls
console.log(factorial(6));  
console.log(factorial(-5));  