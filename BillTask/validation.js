gdocument.addEventListener('DOMContentLoaded', function() {
    const billingForm = document.querySelector('.row.g-3');
    const firstNameInput = document.getElementById('name');
    const lastNameInput = document.getElementById('last');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('mail');
    const addressInput = document.getElementById('address');
    const address2Input = document.getElementById('address2');
    const countrySelect = document.getElementById('country');
    const stateSelect = document.getElementById('inputState');
    const zipInput = document.getElementById('inputZip');
    const shippingSameCheckbox = document.getElementById('gridCheck');
    const saveInfoCheckbox = document.getElementById('gridCheck1');
    const creditCardRadio = document.querySelector('input[for="rad"]');
    const debitCardRadio = document.querySelector('input[for="rad1"]');
    const paypalRadio = document.querySelector('input[for="rad2"]');
    const nameOnCardInput = document.getElementById('name1');
    const cardNumberInput = document.getElementById('name2');
    const expirationInput = document.querySelectorAll('#name1')[1];
    const cvvInput = document.querySelectorAll('#name1')[2];
    const promoCodeInput = document.querySelector('.input-group input[type="text"]');
    const redeemButton = document.getElementById('button-addon2');
    billingForm.addEventListener('submit', function(event) {
        event.preventDefault();

        if (!firstNameInput.value.trim()) {
            alert('Please enter your first name.');
            firstNameInput.focus();
            return;
        }

        if (!addressInput.value.trim()) {
            alert('Please enter your address.');
            addressInput.focus();
            return;
        }

        if (!stateSelect.value) {
            alert('Please select your state.');
            stateSelect.focus();
            return;
        }

        if (!zipInput.value.trim()) {
            alert('Please enter your zip code.');
            zipInput.focus();
            return;
        }

        let paymentMethodSelected = false;
        if (creditCardRadio.checked || debitCardRadio.checked || paypalRadio.checked) {
            paymentMethodSelected = true;
        }

        if (!paymentMethodSelected) {
            alert('Please select a payment method.');
            return;
        }

        if ((creditCardRadio.checked || debitCardRadio.checked) && !nameOnCardInput.value.trim()) {
            alert('Please enter the name on the card.');
            nameOnCardInput.focus();
            return;
        }

        if ((creditCardRadio.checked || debitCardRadio.checked) && !cardNumberInput.value.trim()) {
            alert('Please enter the credit card number.');
            cardNumberInput.focus();
            return;
        }

        if ((creditCardRadio.checked || debitCardRadio.checked) && !expirationInput.value.trim()) {
            alert('Please enter the expiration date.');
            expirationInput.focus();
            return;
        }

        if ((creditCardRadio.checked || debitCardRadio.checked) && !cvvInput.value.trim()) {
            alert('Please enter the CVV.');
            cvvInput.focus();
            return;
        }

        alert('Billing information submitted successfully!');
        console.log({
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            username: usernameInput.value,
            email: emailInput.value,
            address: addressInput.value,
            address2: address2Input.value,
            country: countrySelect.value,
            state: stateSelect.value,
            zip: zipInput.value,
            shippingSame: shippingSameCheckbox.checked,
            saveInfo: saveInfoCheckbox.checked,
            paymentMethod: creditCardRadio.checked ? 'Credit Card' : (debitCardRadio.checked ? 'Debit Card' : (paypalRadio.checked ? 'Paypal' : '')),
            nameOnCard: nameOnCardInput.value,
            cardNumber: cardNumberInput.value,
            expiration: expirationInput.value,
            cvv: cvvInput.value,
            promoCode: promoCodeInput.value
        });
    });

    redeemButton.addEventListener('click', function() {
        const promoCode = promoCodeInput.value.trim();
        if (promoCode === 'IPL2025') {
            alert('Promo code applied!');
        } else if (promoCode) {
            alert('Invalid promo code.');
        } else {
            alert('Please enter a promo code.');
        }
    });
});