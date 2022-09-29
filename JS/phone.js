document.getElementById('button-phone-plus').addEventListener('click', function () {
    const newPhoneInputField = updatePhoneInput(true);
    updatePhonePrice(newPhoneInputField);

    updateSubTotal();

});
document.getElementById('button-phone-minus').addEventListener('click', function () {
    const newPhoneInputField = updatePhoneInput(false);
    updatePhonePrice(newPhoneInputField);
    updateSubTotal()
});