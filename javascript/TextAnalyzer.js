/* PROJECT: Text Analyzer Tool - SOLUTION
   Topics Covered: Strings, Arrays, Functions, Operators, Conditionals
*/

const originalText = "  The quick brown fox jumps over the lazy dog. The quick fox is sometimes stupid. ";

// 1. WORD COUNT FUNCTION
function countWords(text) {
    // 1. Trim leading/trailing spaces
    const trimmedText = text.trim(); 
    
    // 2. Split the string into an array of words using a space ' '
    const wordsArray = trimmedText.split(' ');
    
    // 3. Return the length (count) of the array
    return wordsArray.length;
}


// 2. WORD SEARCH FUNCTION (Conditional Check)
function findWord(text, searchWord) {
    // Uses the includes() method
    return text.toLowerCase().includes(searchWord.toLowerCase());
}


// 3. TEXT CLEANER & FORMATTER FUNCTION
function formatText(text) {
    // 3a. Clean up extra spaces
    let processedText = text.trim(); 
    
    // 3b. Censor the word "stupid" (using a global flag 'g' would be better, but simple replace works for this level)
    let censoredText = processedText.replace("stupid", "****");
    
    // 3c. Ensure the text ends with a period.
    // Check if the last character is NOT a period.
    if (censoredText[censoredText.length - 1] !== '.') {
        censoredText = censoredText + '.'; // Concatenate a period
    }
    
    return censoredText;
}


// 4. MAIN ANALYZER FUNCTION (Uses Template Literals)
function runAnalysis(text) {
    
    // Calling all utility functions
    const initialLength = text.length;
    const finalFormattedText = formatText(text);
    const wordCount = countWords(finalFormattedText);
    const hasFox = findWord(finalFormattedText, "fox");
    
    console.log("==========================================");
    console.log("         TEXT ANALYZER REPORT             ");
    console.log("==========================================");
    
    // Uses Template Literal (backticks) for clean output
    console.log(`
        Report Summary:
        - Original Text Length: ${initialLength} characters
        - Total Words: ${wordCount}
        - Contains "fox": ${hasFox}
        - Final Text: "${finalFormattedText}"
    `);
}

// Execute the main function
runAnalysis(originalText);

// Expected Console Output:
/*
==========================================
         TEXT ANALYZER REPORT             
==========================================

        Report Summary:
        - Original Text Length: 84 characters
        - Total Words: 15
        - Contains "fox": true
        - Final Text: "The quick brown fox jumps over the lazy dog. The quick fox is sometimes ****."
*/