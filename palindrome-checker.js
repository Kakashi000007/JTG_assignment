/**
 * Palindrome Number Checker
 * This program provides multiple ways to check if a number is a palindrome
 */

// Method 1: String-based approach
function isPalindromeString(num) {
    // Handle negative numbers
    if (num < 0) {
        console.log(`${num} is negative. Negative numbers are typically not considered palindromes.`);
        return false;
    }
    
    // Convert to string and reverse
    const numStr = num.toString();
    const reversedStr = numStr.split('').reverse().join('');
    
    const result = numStr === reversedStr;
    
    console.log(`Original: ${numStr}`);
    console.log(`Reversed: ${reversedStr}`);
    console.log(`Is palindrome: ${result}`);
    
    return result;
}

// Method 2: Mathematical approach (without converting to string)
function isPalindromeMath(num) {
    // Handle negative numbers and single digits
    if (num < 0) return false;
    if (num < 10) return true;
    
    let original = num;
    let reversed = 0;
    let temp = num;
    
    // Reverse the number mathematically
    while (temp > 0) {
        reversed = (reversed * 10) + (temp % 10);
        temp = Math.floor(temp / 10);
    }
    
    const result = original === reversed;
    
    console.log(`Original: ${original}`);
    console.log(`Reversed: ${reversed}`);
    console.log(`Is palindrome: ${result}`);
    
    return result;
}

// Method 3: Recursive approach
function isPalindromeRecursive(num) {
    if (num < 0) return false;
    
    const numStr = num.toString();
    
    function checkRecursive(str, start, end) {
        // Base case
        if (start >= end) return true;
        
        // Check if characters at start and end positions match
        if (str[start] !== str[end]) return false;
        
        // Recursively check the remaining substring
        return checkRecursive(str, start + 1, end - 1);
    }
    
    return checkRecursive(numStr, 0, numStr.length - 1);
}

// Function to test a number with all methods
function testPalindrome(num) {
    console.log(`\n${'='.repeat(40)}`);
    console.log(`Testing number: ${num}`);
    console.log(`${'='.repeat(40)}`);
    
    console.log('\n--- Method 1: String-based approach ---');
    const result1 = isPalindromeString(num);
    
    console.log('\n--- Method 2: Mathematical approach ---');
    const result2 = isPalindromeMath(num);
    
    console.log('\n--- Method 3: Recursive approach ---');
    const result3 = isPalindromeRecursive(num);
    
    console.log('\n--- Summary ---');
    console.log(`String method: ${result1}`);
    console.log(`Math method: ${result2}`);
    console.log(`Recursive method: ${result3}`);
    
    const allAgree = result1 === result2 && result2 === result3;
    console.log(`All methods agree: ${allAgree}`);
    
    return result1; // Return string method result as primary
}

// Function to run interactive mode (for Node.js environment)
function runInteractive() {
    const readline = require('readline');
    
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    console.log('Welcome to the Palindrome Number Checker!');
    console.log('Enter a number to check if it\'s a palindrome (or "quit" to exit):');
    
    function askForNumber() {
        rl.question('\nEnter a number: ', (input) => {
            if (input.toLowerCase() === 'quit') {
                console.log('Goodbye!');
                rl.close();
                return;
            }
            
            const num = parseInt(input);
            if (isNaN(num)) {
                console.log('Please enter a valid number.');
                askForNumber();
                return;
            }
            
            testPalindrome(num);
            askForNumber();
        });
    }
    
    askForNumber();
}

// Demo function with predefined test cases
function runDemo() {
    console.log('Palindrome Number Checker - Demo Mode');
    console.log('=====================================\n');
    
    const testCases = [121, 1221, 12321, 123, 1001, -121, 0, 7, 1234321, 12345];
    
    testCases.forEach(num => {
        testPalindrome(num);
    });
    
    console.log('\n' + '='.repeat(50));
    console.log('Demo completed!');
    console.log('To run in interactive mode, call: runInteractive()');
}

// Check if running in Node.js environment
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        isPalindromeString,
        isPalindromeMath,
        isPalindromeRecursive,
        testPalindrome,
        runInteractive,
        runDemo
    };
    
    // If running directly (not imported), run demo
    if (require.main === module) {
        runDemo();
    }
} else {
    // Browser environment - run demo automatically
    runDemo();
}

// Additional utility functions
function findPalindromes(start, end) {
    console.log(`\nFinding palindromes between ${start} and ${end}:`);
    const palindromes = [];
    
    for (let i = start; i <= end; i++) {
        if (isPalindromeMath(i)) { // Using math method for efficiency
            palindromes.push(i);
        }
    }
    
    console.log(`Found ${palindromes.length} palindromes:`, palindromes);
    return palindromes;
}

function generatePalindrome(digits) {
    if (digits <= 0) return null;
    
    if (digits === 1) {
        return Math.floor(Math.random() * 9) + 1; // 1-9
    }
    
    const half = Math.ceil(digits / 2);
    let firstHalf = '';
    
    // Generate first digit (can't be 0)
    firstHalf += Math.floor(Math.random() * 9) + 1;
    
    // Generate remaining digits of first half
    for (let i = 1; i < half; i++) {
        firstHalf += Math.floor(Math.random() * 10);
    }
    
    let palindrome = firstHalf;
    
    // Mirror the first half
    if (digits % 2 === 0) {
        // Even number of digits
        palindrome += firstHalf.split('').reverse().join('');
    } else {
        // Odd number of digits
        palindrome += firstHalf.slice(0, -1).split('').reverse().join('');
    }
    
    return parseInt(palindrome);
}

// Export utility functions if in Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports.findPalindromes = findPalindromes;
    module.exports.generatePalindrome = generatePalindrome;
}