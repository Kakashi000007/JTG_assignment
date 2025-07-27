import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 600,
    margin: '50px auto',
    padding: theme.spacing(3),
  },
  input: {
    marginBottom: theme.spacing(2),
    width: '100%',
  },
  button: {
    marginBottom: theme.spacing(2),
    width: '100%',
  },
  result: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
  },
  palindrome: {
    backgroundColor: '#e8f5e8',
    color: '#2e7d32',
  },
  notPalindrome: {
    backgroundColor: '#ffebee',
    color: '#c62828',
  },
  explanation: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: '#f5f5f5',
    borderRadius: theme.spacing(1),
  },
}));

const PalindromeChecker = () => {
  const classes = useStyles();
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);
  const [explanation, setExplanation] = useState('');

  // Function to check if a number is palindrome
  const isPalindrome = (num) => {
    // Convert number to string to easily reverse it
    const numStr = Math.abs(num).toString();
    const reversedStr = numStr.split('').reverse().join('');
    
    return {
      isPalin: numStr === reversedStr,
      original: numStr,
      reversed: reversedStr,
      isNegative: num < 0
    };
  };

  // Alternative method using mathematical approach
  const isPalindromeAlgorithmic = (num) => {
    if (num < 0) return false; // Negative numbers are not palindromes
    
    let original = num;
    let reversed = 0;
    
    while (num > 0) {
      reversed = (reversed * 10) + (num % 10);
      num = Math.floor(num / 10);
    }
    
    return original === reversed;
  };

  const handleCheck = () => {
    const num = parseInt(number);
    
    if (isNaN(num)) {
      setResult(null);
      setExplanation('Please enter a valid number');
      return;
    }

    const stringResult = isPalindrome(num);
    const algorithmicResult = isPalindromeAlgorithmic(num);
    
    setResult(stringResult);
    
    let explanationText = `Input: ${num}\n`;
    explanationText += `Absolute value: ${stringResult.original}\n`;
    explanationText += `Reversed: ${stringResult.reversed}\n`;
    
    if (stringResult.isNegative) {
      explanationText += `Note: Negative numbers are typically not considered palindromes.\n`;
    }
    
    explanationText += `String method result: ${stringResult.isPalin ? 'Palindrome' : 'Not a palindrome'}\n`;
    explanationText += `Algorithmic method result: ${algorithmicResult ? 'Palindrome' : 'Not a palindrome'}`;
    
    setExplanation(explanationText);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleCheck();
    }
  };

  return (
    <Paper className={classes.container} elevation={3}>
      <Typography variant="h4" align="center" gutterBottom>
        Palindrome Number Checker
      </Typography>
      
      <Typography variant="body1" align="center" gutterBottom>
        Enter a number to check if it's a palindrome
      </Typography>

      <Box mt={3}>
        <TextField
          className={classes.input}
          label="Enter a number"
          variant="outlined"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          onKeyPress={handleKeyPress}
          type="number"
          placeholder="e.g., 121, 12321, 1001"
        />
        
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          size="large"
          onClick={handleCheck}
          disabled={!number.trim()}
        >
          Check Palindrome
        </Button>
      </Box>

      {result && (
        <Box 
          className={`${classes.result} ${
            result.isPalin && !result.isNegative ? classes.palindrome : classes.notPalindrome
          }`}
        >
          <Typography variant="h6" align="center">
            {result.isPalin && !result.isNegative 
              ? `${number} is a Palindrome! ✓` 
              : `${number} is not a Palindrome ✗`
            }
          </Typography>
        </Box>
      )}

      {explanation && (
        <Box className={classes.explanation}>
          <Typography variant="h6" gutterBottom>
            Explanation:
          </Typography>
          <Typography variant="body2" component="pre" style={{ fontFamily: 'monospace' }}>
            {explanation}
          </Typography>
        </Box>
      )}

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>
          What is a Palindrome Number?
        </Typography>
        <Typography variant="body2" paragraph>
          A palindrome number is a number that remains the same when its digits are reversed. 
          For example: 121, 1331, 12321 are palindromes because they read the same forwards and backwards.
        </Typography>
        <Typography variant="body2" paragraph>
          Examples:
        </Typography>
        <Typography variant="body2" component="ul">
          <li>121 → reversed: 121 ✓ (Palindrome)</li>
          <li>1221 → reversed: 1221 ✓ (Palindrome)</li>
          <li>123 → reversed: 321 ✗ (Not a palindrome)</li>
          <li>1001 → reversed: 1001 ✓ (Palindrome)</li>
        </Typography>
      </Box>
    </Paper>
  );
};

export default PalindromeChecker;