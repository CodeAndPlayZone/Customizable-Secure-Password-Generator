# Custom Password Generator for Scriptable on iOS

This script provides a convenient way to generate secure, customizable passwords directly on your iOS device using Scriptable. It allows for the inclusion of a special character and a prefix of your choice, making password generation both secure and personalized.

## Features

- **Custom Special Character**: Users can input a special character to be included in the generated password.
- **Custom Prefix**: Users can specify a prefix to prepend to the generated password for easy identification.
- **Clipboard Integration**: The generated password is automatically copied to the clipboard for immediate use.

## Requirements

- iOS device
- [Scriptable app](https://scriptable.app/) installed

## Setup

1. **Download Scriptable**: If you haven't already, download and install Scriptable from the iOS App Store.
2. **Add the Script**: Open Scriptable and tap on the '+' icon to create a new script. Name it as you prefer, for example, "Custom Password Generator".
3. **Copy and Paste the Code**: Copy the provided JavaScript code and paste it into the new script you've created in Scriptable.

## Usage

Once the script is set up, you can run it directly from Scriptable. Here’s how to generate your password:

1. Open Scriptable and navigate to “Custom Password Generator” (or whatever you named the script).
2. Tap on the script to run it.
3. When prompted, enter your desired special character and prefix.
4. The script will generate a password, copy it to your clipboard, and display a notification with the generated password.
5. You can now paste your new password wherever needed!

## Fix Changelog

**Version 1.1.0**

**Bug Fixes:**
- **Clipboard Copying Issue:** Implemented the `copyToClipboard` function using `Pasteboard.copyString(text)` to resolve the issue where generated passwords were not automatically copied to the clipboard. This update ensures that users can now effortlessly copy and use their generated passwords.

## Contributing

Your contributions are welcome! If you have suggestions for improving this script or have developed additional features, please share by opening an issue or a pull request on the GitHub repository.

## License

This script is released under the MIT License. Feel free to use, modify, and distribute it as you see fit.

## Acknowledgements

Thanks to the Scriptable team and community for providing a powerful platform for iOS automation and scripting.