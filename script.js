document.addEventListener('DOMContentLoaded', () => {
    // 1. Define the variables by connecting to the HTML elements
    const inputField = document.getElementById('inputNumber');
    const sourceBaseSelect = document.getElementById('sourceBase');
    const targetBaseSelect = document.getElementById('targetBase');
    const convertButton = document.getElementById('convertBtn');
    const resultOutput = document.getElementById('outputResult');

    // 2. Attach the function to the button click event
    convertButton.addEventListener('click', convertNumber);
    
    // 3. Define the core conversion function
    function convertNumber() {
        const inputString = inputField.value.trim();
        const sourceBase = parseInt(sourceBaseSelect.value);
        const targetBase = parseInt(targetBaseSelect.value);
        
        resultOutput.textContent = "Conversion will appear here.";

        if (inputString === "") {
            resultOutput.textContent = "Please enter a number.";
            return;
        }

        const decimalValue = parseInt(inputString, sourceBase);

        if (isNaN(decimalValue)) {
            resultOutput.textContent = "Error: Invalid number for the selected source base.";
            return;
        }
        
        const result = decimalValue.toString(targetBase).toUpperCase();

        resultOutput.textContent = result;
    } 
    // This is the closing brace for the 'DOMContentLoaded' arrow function.
}); 
// This is the closing parenthesis and semicolon for the addEventListener call.






