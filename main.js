function analyzeSentence(sentence) {
    // define variables
    let nmbrWords = 0;
    let nmbrVowels = 0;
    const sentenceLength = sentence.length;
    // all vowels
    const vowels = "aeiouAEIOU";
    // Iterate through each character in the sentence
    for (let i = 0; i < sentenceLength; i++) {
        const char = sentence[i];
        // Check for a space
        if (char === ' ') {
            nmbrWords++;
        } 
        // Check if the character is a vowel
        else if (vowels.includes(char)) {
            nmbrVowels++;
        }
    }
    // The last character is a point
    nmbrWords++;
    // show results
    console.log(`Number of words: ${nmbrWords}`);
    console.log(`Number of vowels: ${nmbrVowels}`);
}
// msg appearing
const sentence = prompt("Enter a sentence ending with a point: ");
analyzeSentence(sentence);



// task 2
function findDistinctSum(set1, set2) {
    let distinctSum = 0;
    // Check elements in set1 that are not in set2
    for (let element of set1) {
        if (!set2.includes(element)) {
            distinctSum += element;
        }
    }
    // Check elements in set2 that are not in set1
    for (let element of set2) {
        if (!set1.includes(element)) {
            distinctSum += element;
        }
    }
    return distinctSum;
}
// Example usage
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
const result = findDistinctSum(set1, set2);
console.log("Distinct Sum:", result);