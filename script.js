let displayValue = '';

function appendToDisplay(value) {
	displayValue += value;
	document.getElementById('display').value = displayValue;
}

function clearDisplay() {
	displayValue = '';
	document.getElementById('display').value = displayValue;
}

function performOperation(operator) {
	displayValue += operator;
	document.getElementById('display').value = displayValue;
}

function equals() {
	try {
		displayValue = eval(displayValue);
		document.getElementById('display').value = displayValue;
	} catch (e) {
		document.getElementById('display').value = 'Error';
	}
}
