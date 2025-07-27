# Palindrome Number Checker - Java Implementation

This repository contains Java programs to check if a number is a palindrome using multiple approaches.

## What is a Palindrome Number?

A palindrome number is a number that remains the same when its digits are reversed. For example:
- 121 → reversed: 121 ✓ (Palindrome)
- 1221 → reversed: 1221 ✓ (Palindrome)
- 123 → reversed: 321 ✗ (Not a palindrome)
- 12321 → reversed: 12321 ✓ (Palindrome)

**Note:** Negative numbers are typically not considered palindromes.

## Files Included

### 1. `PalindromeChecker.java` - Comprehensive Implementation
A feature-rich implementation with multiple checking methods and interactive modes.

**Features:**
- 4 different palindrome checking algorithms
- Interactive console interface
- Command-line argument support
- Range-based palindrome finder
- Random palindrome generator
- Detailed explanations and comparisons

**Methods:**
- `isPalindromeString()` - String-based approach
- `isPalindromeMath()` - Mathematical approach (no string conversion)
- `isPalindromeRecursive()` - Recursive approach
- `isPalindromeTwoPointer()` - Two-pointer technique

### 2. `SimplePalindrome.java` - Concise Implementation
A lightweight version with essential palindrome checking methods.

**Features:**
- 3 core palindrome checking methods
- Simple test cases
- Command-line support
- Minimal dependencies

## How to Compile and Run

### Prerequisites
- Java Development Kit (JDK) 8 or higher
- Command line access

### Compilation

```bash
# Compile the comprehensive version
javac PalindromeChecker.java

# Compile the simple version
javac SimplePalindrome.java
```

### Running the Programs

#### Comprehensive Version (`PalindromeChecker`)

**Interactive Mode:**
```bash
java PalindromeChecker
```
This will show a menu with options:
1. Run demo with predefined test cases
2. Interactive mode (enter your own numbers)
3. Find palindromes in a range
4. Generate random palindromes

**Command Line Mode:**
```bash
# Test specific numbers
java PalindromeChecker 121 123 1221 12321

# Test a single number
java PalindromeChecker 12321
```

#### Simple Version (`SimplePalindrome`)

**Default Test Cases:**
```bash
java SimplePalindrome
```

**Command Line Testing:**
```bash
java SimplePalindrome 121 123 1221
```

## Algorithm Explanations

### 1. String-Based Approach
```java
public static boolean isPalindrome(int num) {
    if (num < 0) return false;
    String str = String.valueOf(num);
    String reversed = new StringBuilder(str).reverse().toString();
    return str.equals(reversed);
}
```
- **Time Complexity:** O(n) where n is the number of digits
- **Space Complexity:** O(n) for string storage
- **Pros:** Easy to understand and implement
- **Cons:** Uses extra memory for string operations

### 2. Mathematical Approach
```java
public static boolean isPalindromeMath(int num) {
    if (num < 0) return false;
    int original = num;
    int reversed = 0;
    
    while (num > 0) {
        reversed = reversed * 10 + num % 10;
        num /= 10;
    }
    
    return original == reversed;
}
```
- **Time Complexity:** O(n) where n is the number of digits
- **Space Complexity:** O(1) constant space
- **Pros:** Memory efficient, no string conversion
- **Cons:** Risk of integer overflow for large numbers

### 3. Two-Pointer Approach
```java
public static boolean isPalindromeTwoPointer(int num) {
    if (num < 0) return false;
    String str = String.valueOf(num);
    int left = 0, right = str.length() - 1;
    
    while (left < right) {
        if (str.charAt(left) != str.charAt(right)) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
```
- **Time Complexity:** O(n/2) ≈ O(n)
- **Space Complexity:** O(n) for string conversion
- **Pros:** Efficient comparison, early exit on mismatch
- **Cons:** Still requires string conversion

### 4. Recursive Approach
```java
public static boolean isPalindromeRecursive(long num) {
    if (num < 0) return false;
    String numStr = String.valueOf(num);
    return checkRecursive(numStr, 0, numStr.length() - 1);
}

private static boolean checkRecursive(String str, int start, int end) {
    if (start >= end) return true;
    if (str.charAt(start) != str.charAt(end)) return false;
    return checkRecursive(str, start + 1, end - 1);
}
```
- **Time Complexity:** O(n)
- **Space Complexity:** O(n) for recursion stack + string
- **Pros:** Elegant recursive solution
- **Cons:** Higher memory usage due to recursion stack

## Example Output

```
==================================================
Testing number: 121
==================================================

--- Method 1: String-based approach ---
Original: 121
Reversed: 121
Is palindrome: true

--- Method 2: Mathematical approach ---
Original: 121
Reversed: 121
Is palindrome: true

--- Method 3: Recursive approach ---

--- Method 4: Two-pointer approach ---

--- Summary ---
String method: true
Math method: true
Recursive method: true
Two-pointer method: true
All methods agree: true
```

## Performance Comparison

| Method | Time Complexity | Space Complexity | Best For |
|--------|----------------|------------------|----------|
| String-based | O(n) | O(n) | General use, readability |
| Mathematical | O(n) | O(1) | Memory-constrained environments |
| Two-pointer | O(n) | O(n) | Early exit scenarios |
| Recursive | O(n) | O(n) | Educational purposes |

## Test Cases

The programs include comprehensive test cases:
- **Positive palindromes:** 121, 1221, 12321, 1234321
- **Non-palindromes:** 123, 12345
- **Edge cases:** 0, 7 (single digits)
- **Negative numbers:** -121
- **Large numbers:** 1000001, 9009

## Additional Features (Comprehensive Version Only)

### Find Palindromes in Range
```java
List<Long> palindromes = findPalindromes(100, 200);
// Finds all palindromes between 100 and 200
```

### Generate Random Palindromes
```java
long palindrome = generatePalindrome(5);
// Generates a random 5-digit palindrome
```

## Common Use Cases

1. **Coding Interviews:** Palindrome checking is a common algorithm question
2. **Data Validation:** Checking special number formats
3. **Mathematical Research:** Studying palindromic numbers
4. **Educational:** Learning different algorithm approaches

## Contributing

Feel free to contribute improvements, optimizations, or additional features:
- Add new checking algorithms
- Improve performance
- Add more comprehensive tests
- Enhance documentation

## License

This code is provided for educational purposes and is free to use and modify.