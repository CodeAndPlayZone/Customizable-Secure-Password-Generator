// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// always-run-in-app: true; icon-color: deep-gray;
// icon-glyph: key;
// A modified script that prompts the user for a special character on first run and copies the generated password
// Copyright by CodeAndPlayZone

// A function to generate a random string
function generatePassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// Main function of the script
async function main() {
    // Prompt the user for a special character
    const specialCharAlert = new Alert();
    specialCharAlert.title = 'Special Character';
    specialCharAlert.message = 'Please enter a special character to include in the password:';
    specialCharAlert.addTextField("Special Character", "");
    specialCharAlert.addAction('OK');
    await specialCharAlert.present();

    // Store the user's input for the special character
    const specialChar = specialCharAlert.textFieldValue(0);

    // Prompt the user for a prefix
    const prefixAlert = new Alert();
    prefixAlert.title = 'Password Prefix';
    prefixAlert.message = 'Please enter a prefix for the password:';
    prefixAlert.addTextField("Prefix", "");
    prefixAlert.addAction('OK');
    await prefixAlert.present();

    // Store the user's input for the prefix
    const prefix = prefixAlert.textFieldValue(0);

    // Generate the password with the custom prefix and special character
    const password = prefix + specialChar + generatePassword(6); // Here you can adjust the password length

    // Copy the generated password to the clipboard (pseudo-code as actual implementation depends on the environment)
    copyToClipboard(password); // This function needs to be defined based on your script's environment

    // Display the generated password
    const resultAlert = new Alert();
    resultAlert.title = 'Generated Password';
    resultAlert.message = 'Your password has been copied to the clipboard: ' + password;
    resultAlert.addAction('OK');
    await resultAlert.present();
}

// A pseudo-function to copy text to the clipboard, needs real implementation
function copyToClipboard(text) {
    // Implementation depends on the environment
    // For web: navigator.clipboard.writeText(text)
    // For Node.js, this would need a package like `clipboardy`
    console.log('Copied to clipboard:', text);
}

// Execute the main script
main();