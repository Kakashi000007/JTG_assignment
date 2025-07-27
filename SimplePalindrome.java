/**
 * Simple Palindrome Checker - Concise Java Implementation
 * Basic methods to check if a number is a palindrome
 */
public class SimplePalindrome {
    
    /**
     * Check if a number is palindrome using string reversal
     * @param num The number to check
     * @return true if palindrome, false otherwise
     */
    public static boolean isPalindrome(int num) {
        // Negative numbers are not palindromes
        if (num < 0) return false;
        
        String str = String.valueOf(num);
        String reversed = new StringBuilder(str).reverse().toString();
        return str.equals(reversed);
    }
    
    /**
     * Check if a number is palindrome using mathematical approach
     * @param num The number to check
     * @return true if palindrome, false otherwise
     */
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
    
    /**
     * Check if a number is palindrome using two-pointer technique
     * @param num The number to check
     * @return true if palindrome, false otherwise
     */
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
    
    /**
     * Main method for testing
     */
    public static void main(String[] args) {
        // Test cases
        int[] testNumbers = {121, 123, 1221, 12321, -121, 0, 7, 1001};
        
        System.out.println("Simple Palindrome Checker");
        System.out.println("========================");
        
        for (int num : testNumbers) {
            boolean result1 = isPalindrome(num);
            boolean result2 = isPalindromeMath(num);
            boolean result3 = isPalindromeTwoPointer(num);
            
            System.out.printf("Number: %d\n", num);
            System.out.printf("  String method: %s\n", result1);
            System.out.printf("  Math method: %s\n", result2);
            System.out.printf("  Two-pointer method: %s\n", result3);
            System.out.printf("  Result: %s\n\n", result1 ? "PALINDROME" : "NOT PALINDROME");
        }
        
        // Interactive testing if command line arguments provided
        if (args.length > 0) {
            System.out.println("Command line testing:");
            for (String arg : args) {
                try {
                    int num = Integer.parseInt(arg);
                    System.out.printf("%d is %s\n", num, 
                        isPalindrome(num) ? "a palindrome" : "not a palindrome");
                } catch (NumberFormatException e) {
                    System.out.printf("'%s' is not a valid number\n", arg);
                }
            }
        }
    }
}