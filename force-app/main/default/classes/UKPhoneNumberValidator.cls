public class UKPhoneNumberValidator {
    // Method to validate UK phone numbers
    public static Boolean isValidUKPhoneNumber(String phoneNumber) {
        // Define the regex pattern
        String regex = '^(\\+44\\s?7\\d{3}|0\\s?7\\d{3})\\s?\\d{3}\\s?\\d{3}$';
        
        // Compile the pattern
        Pattern pattern = Pattern.compile(regex);
        
        // Match the pattern against the phone number
        Matcher matcher = pattern.matcher(phoneNumber);
        
        // Return whether the phone number matches the regex
        return matcher.matches();
    }

    // Example usage
    public static void mainMethod() {
        // Test cases
        String[] testNumbers = new String[] {
            '+447911123456',
            '07911123456',
            '+44 7911 123456',
            '07911 123456',
            '12345',  // Invalid
            '07700 900123'  // Valid
        };

        for (String number1 : testNumbers) {
            System.debug('Number: ' + number1 + ' is valid: ' + isValidUKPhoneNumber(number1));
        }
    }
}