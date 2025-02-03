```php
<?php

// PHP Code Snippet

// Function to calculate the area of a rectangle
function calculateRectangleArea($length, $width) {
    return $length * $width;
}

// Function to calculate the area of a circle
function calculateCircleArea($radius) {
    return pi() * pow($radius, 2);
}

// Function to calculate the area of a triangle
function calculateTriangleArea($base, $height) {
    return 0.5 * $base * $height;
}

// Function to calculate the volume of a cube
function calculateCubeVolume($side) {
    return pow($side, 3);
}

// Function to calculate the volume of a sphere
function calculateSphereVolume($radius) {
    return (4/3) * pi() * pow($radius, 3);
}

// Function to calculate the volume of a cylinder
function calculateCylinderVolume($radius, $height) {
    return pi() * pow($radius, 2) * $height;
}

// Function to calculate the factorial of a number
function calculateFactorial($number) {
    if ($number == 0) {
        return 1;
    } else {
        return $number * calculateFactorial($number - 1);
    }
}

// Function to check if a number is prime
function isPrime($number) {
    if ($number <= 1) {
        return false;
    }
    for ($i = 2; $i <= sqrt($number); $i++) {
        if ($number % $i == 0) {
            return false;
        }
    }
    return true;
}

// Function to check if a number is even
function isEven($number) {
    return $number % 2 == 0;
}

// Function to check if a number is odd
function isOdd($number) {
    return $number % 2 != 0;
}

// Function to calculate the sum of an array
function calculateSum($array) {
    return array_sum($array);
}

// Function to calculate the average of an array
function calculateAverage($array) {
    return calculateSum($array) / count($array);
}

// Function to calculate the maximum value in an array
function calculateMax($array) {
    return max($array);
}

// Function to calculate the minimum value in an array
function calculateMin($array) {
    return min($array);
}

// Function to sort an array in ascending order
function sortArrayAscending($array) {
    sort($array);
    return $array;
}

// Function to sort an array in descending order
function sortArrayDescending($array) {
    rsort($array);
    return $array;
}

// Function to check if a string is palindrome
function isPalindrome($string) {
    return $string == strrev($string);
}

// Function to check if a string contains a substring
function containsSubstring($string, $substring) {
    return strpos($string, $substring) !== false;
}

// Function to calculate the length of a string
function calculateStringLength($string) {
    return strlen($string);
}

// Function to convert a string to uppercase
function convertToUppercase($string) {
    return strtoupper($string);
}

// Function to convert a string to lowercase
function convertToLowercase($string) {
    return strtolower($string);
}

// Function to trim a string
function trimString($string) {
    return trim($string);
}

// Function to calculate the ASCII value of a character
function calculateAsciiValue($character) {
    return ord($character);
}

// Function to calculate the character represented by an ASCII value
function calculateCharacter($asciiValue) {
    return chr($asciiValue);
}

// Function to check if a string is empty
function isEmptyString($string) {
    return empty($string);
}

// Function to check if a string is not empty
function isNotEmptyString($string) {
    return !empty($string);
}

// Function to calculate the number of words in a string
function calculateWordCount($string) {
    return count(explode(' ', $string));
}

// Function to calculate the number of characters in a string
function calculateCharacterCount($string) {
    return strlen($string);
}

// Function to calculate the number of vowels in a string
function calculateVowelCount($string) {
    $vowels = 'aeiouAEIOU';
    $count = 0;
    for ($i = 0; $i < strlen($string); $i++) {
        if (strpos($vowels, $string[$i]) !== false) {
            $count++;
        }
    }
    return $count;
}

// Function to calculate the number of consonants in a string
function calculateConsonantCount($string) {
    $vowels = 'aeiouAEIOU';
    $count = 0;
    for ($i = 0; $i < strlen($string); $i++) {
        if (strpos($vowels, $string[$i]) === false) {
            $count++;
        }
    }
    return $count;
}

// Function to calculate the number of digits in a string
function calculateDigitCount($string) {
    $count = 0;
    for ($i = 0; $i < strlen($string); $i++) {
        if (ctype_digit($string[$i])) {
            $count++;
        }
    }
    return $count;
}

// Function to calculate the number of special characters in a string
function calculateSpecialCharacterCount($string) {
    $count = 0;
    for ($i = 0; $i < strlen($string); $i++) {
        if (!ctype_alnum($string[$i])) {
            $count++;
        }
    }
    return $count;
}

// Function to calculate the number of whitespace characters in a string
function calculateWhitespaceCount($string) {
    $count = 0;
    for ($i = 0; $i < strlen($string); $i++) {
        if (ctype_space($string[$i])) {
            $count++;
        }
    }
    return $count;
}

// Function to calculate the number of lines in a string
function calculateLineCount($string) {
    return count(explode("\n", $string));
}

// Function to calculate the number of paragraphs in a string
function calculateParagraphCount($string) {
    return count(explode("\n\n", $string));
}

// Function to calculate the number of sentences in a string
function calculateSentenceCount($string) {
    return count(explode('.', $string));
}

// Function to calculate the number of words in a sentence
function calculateWordsInSentence($sentence) {
    return count(explode(' ', $sentence));
}

// Function to calculate the number of characters in a sentence
function calculateCharactersInSentence($sentence) {
    return strlen($sentence);
}

// Function to calculate the number of vowels in a sentence
function calculateVowelsInSentence($sentence) {
    $vowels = 'aeiouAEIOU';
    $count = 0;
    for ($i = 0; $i < strlen($sentence); $i++) {
        if (strpos($vowels, $sentence[$i]) !== false) {
            $count++;
        }
    }
    return $count;
}

// Function to calculate the number of consonants in a sentence
function calculateConsonantsInSentence($sentence) {
    $vowels = 'aeiouAEIOU';
    $count = 0;
    for ($i = 0; $i < strlen($sentence); $i++) {
        if (strpos($vowels, $sentence[$i]) === false) {
            $count++;
        }
    }
    return $count;
}

// Function to calculate the number of digits in a sentence
function calculateDigitsInSentence($sentence) {
    $count = 0;
    for ($i = 0; $i < strlen($sentence); $i++) {
        if (ctype_digit($sentence[$i])) {
            $count++;
        }
    }
    return $count;
}

// Function to calculate the number of special characters in a sentence
function calculateSpecialCharactersInSentence($sentence) {
    $count = 0;
    for ($i = 0; $i < strlen($sentence); $i++) {
        if (!ctype_alnum($sentence[$i])) {
            $count++;
        }
    }
    return $count;
}

// Function to calculate the number of whitespace characters in a sentence
function calculateWhitespaceInSentence($sentence) {
    $count = 0;
    for ($i = 0; $i < strlen($sentence); $i++) {
        if (ctype_space($sentence[$i])) {
            $count++;
        }
    }
    return $count;
}

// Function to calculate the number of lines in a sentence
function calculateLinesInSentence($sentence) {
    return count(explode("\n", $sentence));
}

// Function to calculate the number of paragraphs in a sentence
function calculateParagraphsInSentence($sentence) {
    return count(explode("\n\n", $sentence));
}

// Function to calculate the number of sentences in a sentence
function calculateSentencesInSentence($sentence) {
    return count(explode('.', $sentence));
}

?>
```