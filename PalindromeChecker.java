import java.util.Scanner;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

/**
 * Palindrome Number Checker - Java Implementation
 * This program provides multiple ways to check if a number is a palindrome
 * 
 * @author Assistant
 * @version 1.0
 */
public class PalindromeChecker {
    
    /**
     * Method 1: String-based approach
     * Converts number to string and compares with its reverse
     * 
     * @param num The number to check
     * @return true if palindrome, false otherwise
     */
    public static boolean isPalindromeString(long num) {
        // Handle negative numbers
        if (num < 0) {
            System.out.println(num + " is negative. Negative numbers are typically not considered palindromes.");
            return false;
        }
        
        // Convert to string and reverse
        String numStr = String.valueOf(num);
        String reversedStr = new StringBuilder(numStr).reverse().toString();
        
        boolean result = numStr.equals(reversedStr);
        
        System.out.println("Original: " + numStr);
        System.out.println("Reversed: " + reversedStr);
        System.out.println("Is palindrome: " + result);
        
        return result;
    }
    
    /**
     * Method 2: Mathematical approach (without converting to string)
     * Reverses the number using mathematical operations
     * 
     * @param num The number to check
     * @return true if palindrome, false otherwise
     */
    public static boolean isPalindromeMath(long num) {
        // Handle negative numbers and single digits
        if (num < 0) return false;
        if (num < 10) return true;
        
        long original = num;
        long reversed = 0;
        long temp = num;
        
        // Reverse the number mathematically
        while (temp > 0) {
            reversed = (reversed * 10) + (temp % 10);
            temp = temp / 10;
        }
        
        boolean result = original == reversed;
        
        System.out.println("Original: " + original);
        System.out.println("Reversed: " + reversed);
        System.out.println("Is palindrome: " + result);
        
        return result;
    }
    
    /**
     * Method 3: Recursive approach
     * Uses recursion to check palindrome by comparing digits from both ends
     * 
     * @param num The number to check
     * @return true if palindrome, false otherwise
     */
    public static boolean isPalindromeRecursive(long num) {
        if (num < 0) return false;
        
        String numStr = String.valueOf(num);
        return checkRecursive(numStr, 0, numStr.length() - 1);
    }
    
    /**
     * Helper method for recursive palindrome check
     * 
     * @param str The string representation of the number
     * @param start Starting index
     * @param end Ending index
     * @return true if palindrome, false otherwise
     */
    private static boolean checkRecursive(String str, int start, int end) {
        // Base case
        if (start >= end) return true;
        
        // Check if characters at start and end positions match
        if (str.charAt(start) != str.charAt(end)) return false;
        
        // Recursively check the remaining substring
        return checkRecursive(str, start + 1, end - 1);
    }
    
    /**
     * Method 4: Two-pointer approach
     * Uses two pointers moving from both ends towards center
     * 
     * @param num The number to check
     * @return true if palindrome, false otherwise
     */
    public static boolean isPalindromeTwoPointer(long num) {
        if (num < 0) return false;
        
        String numStr = String.valueOf(num);
        int left = 0;
        int right = numStr.length() - 1;
        
        while (left < right) {
            if (numStr.charAt(left) != numStr.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        
        return true;
    }
    
    /**
     * Tests a number with all available methods
     * 
     * @param num The number to test
     * @return Primary result (from string method)
     */
    public static boolean testPalindrome(long num) {
        System.out.println("\n" + "=".repeat(50));
        System.out.println("Testing number: " + num);
        System.out.println("=".repeat(50));
        
        System.out.println("\n--- Method 1: String-based approach ---");
        boolean result1 = isPalindromeString(num);
        
        System.out.println("\n--- Method 2: Mathematical approach ---");
        boolean result2 = isPalindromeMath(num);
        
        System.out.println("\n--- Method 3: Recursive approach ---");
        boolean result3 = isPalindromeRecursive(num);
        
        System.out.println("\n--- Method 4: Two-pointer approach ---");
        boolean result4 = isPalindromeTwoPointer(num);
        
        System.out.println("\n--- Summary ---");
        System.out.println("String method: " + result1);
        System.out.println("Math method: " + result2);
        System.out.println("Recursive method: " + result3);
        System.out.println("Two-pointer method: " + result4);
        
        boolean allAgree = result1 == result2 && result2 == result3 && result3 == result4;
        System.out.println("All methods agree: " + allAgree);
        
        return result1; // Return string method result as primary
    }
    
    /**
     * Runs interactive mode where user can input numbers to test
     */
    public static void runInteractive() {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Welcome to the Palindrome Number Checker!");
        System.out.println("Enter a number to check if it's a palindrome (or 'quit' to exit):");
        
        while (true) {
            System.out.print("\nEnter a number: ");
            String input = scanner.nextLine().trim();
            
            if (input.equalsIgnoreCase("quit")) {
                System.out.println("Goodbye!");
                break;
            }
            
            try {
                long num = Long.parseLong(input);
                testPalindrome(num);
            } catch (NumberFormatException e) {
                System.out.println("Please enter a valid number.");
            }
        }
        
        scanner.close();
    }
    
    /**
     * Runs demo with predefined test cases
     */
    public static void runDemo() {
        System.out.println("Palindrome Number Checker - Demo Mode");
        System.out.println("====================================\n");
        
        long[] testCases = {121, 1221, 12321, 123, 1001, -121, 0, 7, 1234321, 12345, 9009, 1000001};
        
        for (long num : testCases) {
            testPalindrome(num);
        }
        
        System.out.println("\n" + "=".repeat(60));
        System.out.println("Demo completed!");
        System.out.println("To run in interactive mode, call: runInteractive()");
    }
    
    /**
     * Finds all palindromes in a given range
     * 
     * @param start Starting number (inclusive)
     * @param end Ending number (inclusive)
     * @return List of palindromic numbers in the range
     */
    public static List<Long> findPalindromes(long start, long end) {
        System.out.println("\nFinding palindromes between " + start + " and " + end + ":");
        List<Long> palindromes = new ArrayList<>();
        
        for (long i = start; i <= end; i++) {
            if (isPalindromeMath(i)) { // Using math method for efficiency
                palindromes.add(i);
            }
        }
        
        System.out.println("Found " + palindromes.size() + " palindromes: " + palindromes);
        return palindromes;
    }
    
    /**
     * Generates a random palindrome with specified number of digits
     * 
     * @param digits Number of digits in the palindrome
     * @return Generated palindrome number
     */
    public static long generatePalindrome(int digits) {
        if (digits <= 0) return -1;
        
        Random random = new Random();
        
        if (digits == 1) {
            return random.nextInt(9) + 1; // 1-9
        }
        
        int half = (digits + 1) / 2;
        StringBuilder firstHalf = new StringBuilder();
        
        // Generate first digit (can't be 0)
        firstHalf.append(random.nextInt(9) + 1);
        
        // Generate remaining digits of first half
        for (int i = 1; i < half; i++) {
            firstHalf.append(random.nextInt(10));
        }
        
        StringBuilder palindrome = new StringBuilder(firstHalf);
        
        // Mirror the first half
        if (digits % 2 == 0) {
            // Even number of digits
            palindrome.append(firstHalf.reverse());
        } else {
            // Odd number of digits
            String temp = firstHalf.substring(0, firstHalf.length() - 1);
            palindrome.append(new StringBuilder(temp).reverse());
        }
        
        return Long.parseLong(palindrome.toString());
    }
    
    /**
     * Utility method to check if a number is a perfect palindrome
     * (additional validation with multiple checks)
     * 
     * @param num The number to validate
     * @return true if all methods confirm it's a palindrome
     */
    public static boolean validatePalindrome(long num) {
        return isPalindromeString(num) && 
               isPalindromeMath(num) && 
               isPalindromeRecursive(num) && 
               isPalindromeTwoPointer(num);
    }
    
    /**
     * Displays information about palindromes
     */
    public static void displayInfo() {
        System.out.println("\n" + "=".repeat(60));
        System.out.println("WHAT IS A PALINDROME NUMBER?");
        System.out.println("=".repeat(60));
        System.out.println("A palindrome number is a number that remains the same");
        System.out.println("when its digits are reversed.");
        System.out.println("\nExamples:");
        System.out.println("• 121 → reversed: 121 ✓ (Palindrome)");
        System.out.println("• 1221 → reversed: 1221 ✓ (Palindrome)");
        System.out.println("• 123 → reversed: 321 ✗ (Not a palindrome)");
        System.out.println("• 1001 → reversed: 1001 ✓ (Palindrome)");
        System.out.println("• 12321 → reversed: 12321 ✓ (Palindrome)");
        System.out.println("\nNote: Negative numbers are typically not considered palindromes.");
        System.out.println("=".repeat(60));
    }
    
    /**
     * Main method to run the program
     * 
     * @param args Command line arguments
     */
    public static void main(String[] args) {
        if (args.length > 0) {
            // Command line mode
            try {
                for (String arg : args) {
                    long num = Long.parseLong(arg);
                    testPalindrome(num);
                }
            } catch (NumberFormatException e) {
                System.out.println("Invalid number format in arguments.");
                System.out.println("Usage: java PalindromeChecker [number1] [number2] ...");
            }
        } else {
            // Interactive mode
            displayInfo();
            
            Scanner scanner = new Scanner(System.in);
            System.out.println("\nChoose an option:");
            System.out.println("1. Run demo with predefined test cases");
            System.out.println("2. Interactive mode (enter your own numbers)");
            System.out.println("3. Find palindromes in a range");
            System.out.println("4. Generate random palindromes");
            System.out.print("\nEnter your choice (1-4): ");
            
            try {
                int choice = scanner.nextInt();
                scanner.nextLine(); // Consume newline
                
                switch (choice) {
                    case 1:
                        runDemo();
                        break;
                    case 2:
                        runInteractive();
                        break;
                    case 3:
                        System.out.print("Enter start number: ");
                        long start = scanner.nextLong();
                        System.out.print("Enter end number: ");
                        long end = scanner.nextLong();
                        findPalindromes(start, end);
                        break;
                    case 4:
                        System.out.print("Enter number of digits: ");
                        int digits = scanner.nextInt();
                        System.out.print("How many palindromes to generate: ");
                        int count = scanner.nextInt();
                        
                        System.out.println("\nGenerated palindromes:");
                        for (int i = 0; i < count; i++) {
                            long palindrome = generatePalindrome(digits);
                            System.out.println((i + 1) + ": " + palindrome);
                        }
                        break;
                    default:
                        System.out.println("Invalid choice. Running demo mode.");
                        runDemo();
                }
            } catch (Exception e) {
                System.out.println("Invalid input. Running demo mode.");
                runDemo();
            }
            
            scanner.close();
        }
    }
}