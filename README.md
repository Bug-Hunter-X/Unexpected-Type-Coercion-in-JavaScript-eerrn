# Unexpected Type Coercion in JavaScript

This repository demonstrates a common JavaScript bug caused by loose typing and type coercion. The function `foo` attempts to add a number and a string, resulting in unexpected string concatenation instead of numerical addition. The solution shows how to avoid this using type checking or explicit conversion.

## Bug

The `bug.js` file contains a function that unintentionally concatenates a number and a string due to JavaScript's loose typing. The output is unexpected, showcasing type coercion.

## Solution

The `bugSolution.js` file provides two solutions:
1. Type checking using `typeof` before performing the operation.
2. Explicit type conversion using `parseInt()` to convert the string to a number.

This example highlights the importance of careful type handling in JavaScript to avoid unexpected behavior.