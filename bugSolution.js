function foo(a, b) {
  // Solution 1: Type checking
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    return 'Invalid input types';
  }
}

function foo2(a, b) {
  // Solution 2: Explicit type conversion
  return parseInt(a) + parseInt(b);
}

console.log(foo(1, '2')); // Output: Invalid input types
console.log(foo(1,2)); // Output: 3
console.log(foo2(1, '2')); // Output: 3