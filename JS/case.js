document.getElementById('button-case-plus').addEventListener('click', function () {
    const newCaseInputField = updateCaseInput(true);
    updateCasePrice(newCaseInputField);

    updateSubTotal()
});

document.getElementById('button-case-minus').addEventListener('click', function () {
    const newCaseInputField = updateCaseInput(false);
    updateCasePrice(newCaseInputField);

    updateSubTotal()

});