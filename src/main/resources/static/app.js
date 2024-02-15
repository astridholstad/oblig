document.addEventListener('DOMContentLoaded', function() {
    const kjop = document.getElementById('kjop');
    const slettBillett = document.getElementById('slettBillett');
    const billettListe = [];

    kjop.addEventListener('click', function () {
        const filmValg = document.getElementById('film');
        const antallInput = document.getElementById('antall');
        const firstNameInput = document.getElementById('forNavn');
        const lastNameInput = document.getElementById('etterNavn');
        const phoneInput = document.getElementById('telefonNr');
        const emailInput = document.getElementById('email');

        if (!validateInputs(filmValg.value, antallInput.value, firstNameInput.value, lastNameInput.value, phoneInput.value, emailInput.value)) {
            alert('Vennligst fyll ut alle feltene.')
            return;
        }
        const billett = {
            film: filmValg.value,
            antall: parseInt(antallInput.value),
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            telefonnr: phoneInput.value,
            email: emailInput.value
        };

        billettListe.push(billett);
        addTicketToList();
        clearInputs();
    });

    slettBillett.addEventListener('click', function () {
        billettListe.length = 0;
        addTicketToList();
    });
});

function validateInputs(film, antall, firstName, lastName, telefonnr, email) {
    return film !== '' && antall !== '' && firstName !== '' && lastName !== '' && telefonnr !== '' && email !== '';
}

function addTicketToList() {
    const billettListeElement = document.getElementById('billettListe');
    billettListeElement.innerHTML = '';

    billettListe.forEach(billett => {
        const billettType = document.createElement('li');
        billettType.textContent = `Film: ${billett.film}, Antall: ${billett.antall}, Navn: ${billett.firstName} ${billett.lastName}, Telefon: ${billett.telefonnr}, Epost: ${billett.email}`;
        billettListeElement.appendChild(billettType);
    });
}

function clearInputs() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = '';
    });
}





