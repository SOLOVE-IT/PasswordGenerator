// Function to generate a random password
function generatePassword(length = 12, includeLower = true, includeUpper = true, includeNumbers = true, includeSymbols = true) {
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let allowedChars = '';
    let password = '';

    // Add character sets based on user preferences
    if (includeLower) allowedChars += lowerChars;
    if (includeUpper) allowedChars += upperChars;
    if (includeNumbers) allowedChars += numberChars;
    if (includeSymbols) allowedChars += symbolChars;

    // Check if at least one character set is selected
    if (allowedChars.length === 0) {
        return 'Please select at least one character type!';
    }

    // Generate the password
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

// Event listener to handle button click
document.getElementById('generate').addEventListener('click', function () {
    const length = parseInt(document.getElementById('length').value); // Get password length
    const includeLower = document.getElementById('includeLower').checked; // Include lowercase
    const includeUpper = document.getElementById('includeUpper').checked; // Include uppercase
    const includeNumbers = document.getElementById('includeNumbers').checked; // Include numbers
    const includeSymbols = document.getElementById('includeSymbols').checked; // Include symbols

    // Generate the password
    const password = generatePassword(length, includeLower, includeUpper, includeNumbers, includeSymbols);

    // Display the password
    document.getElementById('password').textContent = password;
});
