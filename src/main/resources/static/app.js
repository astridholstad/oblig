document.addEventListener('DOMContentLoaded', function() {
    const kjop = document.getElementById('kjop');
    const slettBilett = document.getElementById('slettBilett');
    const bilettListe = [];

    const filmValgValidationMsg = document.getElementById('filmValgValidationMsg');
    const antallValidationMsg = document.getElementById('antallValidationMsg');
    const firstNameValidationMsg = document.getElementById('firstNameValidationMsg');
    const lastNameValidationMsg = document.getElementById('lastNameValidationMsg');
    const telefonNrValidationMsg = document.getElementById('telefonNrValidationMsg');
    const emailValidationMsg = document.getElementById('emailValidationMsg');

    kjop.addEventListener('click', function () {
        console.log('Kjøp billett-knappen ble klikket på');

        const filmValg = document.getElementById('film');
        const antallInput = document.getElementById('antall');
        const firstNameInput = document.getElementById('forNavn');
        const lastNameInput = document.getElementById('etterNavn');
        const phoneInput = document.getElementById('telefonNr');
        const emailInput = document.getElementById('email');

        resetValidationMessages();

        let isValid = true;

        if (antallInput.value === '') {
            displayValidationMsg(antallValidationMsg, 'Må oppgi antall billetter');
            isValid = false;
        }

        if (firstNameInput.value === '') {
            displayValidationMsg(firstNameValidationMsg, 'Må skrive noe i fornavn');
            isValid = false;
        }
        if (lastNameInput.value === '') {
            displayValidationMsg(lastNameValidationMsg, 'Må skrive noe i etternavn');
            isValid = false;
        }
        if (phoneInput.value === '') {
            displayValidationMsg(telefonNrValidationMsg, 'Må oppgi telefonnummer');
            isValid = false;
        }
        if (emailInput.value === '') {
            displayValidationMsg(emailValidationMsg, 'Må oppgi e-postadresse');
            isValid = false;
        }
        if (isValid) {
            const bilett = {
                film: filmValg.value,
                antall: parseInt(antallInput.value),
                firstName: firstNameInput.value,
                lastName: lastNameInput.value,
                telefonNr: phoneInput.value,
                email: emailInput.value
            };

            bilettListe.push(bilett);
            addTicketToList();
            clearInputs();
        }

        slettBilett.addEventListener('click', function () {
        console.log('Slett bilett-knappen ble klikket på');
        bilettListe.length = 0;
        addTicketToList();
    });
});

    function resetValidationMessages() {
        // Fjern alle tidligere valideringsmeldinger
        const validationMsgs = document.querySelectorAll('.validation-msg');
        validationMsgs.forEach(msg => {
            msg.textContent = '';
        });
    }

    function displayValidationMsg(element, message) {
        // Vis valideringsmelding ved siden av gitt element
        element.textContent = message;
    }

function validateInputs(film, antall, firstName, lastName, telefonNr, email) {
    return film !== '' && antall !== '' && firstName !== '' && lastName !== '' && telefonNr !== '' && email !== '';
}

function addTicketToList() {
    const bilettListeElement = document.getElementById('bilettListe');
    bilettListeElement.innerHTML = '';

    for (let i = 0; i < bilettListe.length; i++) {
        const bilett = bilettListe[i];
        const bilettType = document.createElement('li');
        bilettType.textContent = `Film: ${bilett.film}, Antall: ${bilett.antall}, Foravn: ${bilett.firstName}, Etternavn: ${bilett.lastName}, Telefon: ${bilett.telefonNr}, Epost: ${bilett.email}`;
        bilettListeElement.appendChild(bilettType);
        }
}

function clearInputs() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = '';
    });
}
});







