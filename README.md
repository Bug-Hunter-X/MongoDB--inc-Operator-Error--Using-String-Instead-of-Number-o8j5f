# MongoDB $inc Operator Error: Using String Instead of Number

This example demonstrates a common error when using the `$inc` operator in MongoDB update operations. The `$inc` operator is designed to increment a numerical field.  Attempting to increment with a string value will lead to unexpected results, potentially resulting in a silent failure. 

**Bug:**
The `bug.js` file shows incorrect usage, attempting to increment the `counter` field using a string value ('1') instead of a number (1).

**Solution:**
The `bugSolution.js` file provides the corrected implementation, using the numerical value 1 to increment the counter.

This repository serves as a simple illustration to help developers avoid this common mistake.