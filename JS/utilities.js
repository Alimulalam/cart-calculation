function updateCaseInput(isIncrease) {
    const caseInputField = document.getElementById('case-input-field');
    const caseInputFieldString = caseInputField.value;
    const previousCaseInputField = parseInt(caseInputFieldString);

    let newCaseInputField;
    if (isIncrease === true) {
        newCaseInputField = previousCaseInputField + 1;
    }
    else {
        newCaseInputField = previousCaseInputField - 1;
    }

    caseInputField.value = newCaseInputField;
    return newCaseInputField;
}

function updateCasePrice(newCaseInputField) {
    const casePriceField = document.getElementById('price-field');

    const newCasePriceField = newCaseInputField * 59;
    casePriceField.innerText = newCasePriceField;
    return newCasePriceField;
}



function updatePhoneInput(isIncrease) {
    const phoneInputField = document.getElementById('phone-input-field');
    const phoneInputFieldString = phoneInputField.value;
    const previousPhoneInputField = parseInt(phoneInputFieldString);

    let newPhoneInputField;
    if (isIncrease === true) {
        newPhoneInputField = previousPhoneInputField + 1;
    }
    else {
        newPhoneInputField = previousPhoneInputField - 1;
    }

    phoneInputField.value = newPhoneInputField;
    return newPhoneInputField;
}

function updatePhonePrice(newPhoneInputField) {
    const phonePriceField = document.getElementById('phone-price-field');
    const newPhonePriceField = newPhoneInputField * 1219;
    phonePriceField.innerText = newPhonePriceField;
    return newPhonePriceField;
}


function getTextElementById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function updateSubTotal() {

    //calculate total
    const currentPhoneTotal = getTextElementById('phone-price-field');
    const currentcaseTotal = getTextElementById('price-field');
    const currentSubTotal = currentPhoneTotal + currentcaseTotal;

    const subTotalElement = document.getElementById('subtotal-price');
    subTotalElement.innerText = currentSubTotal;

    const taxAmount = currentSubTotal * 0.1;
    const taxfield = document.getElementById('tax-price');
    taxfield.innerText = taxAmount.toFixed(2);

    const totalAmount = currentSubTotal + taxAmount;
    const totalAmountField = document.getElementById('total-price');
    totalAmountField.innerText = totalAmount;
}