document.addEventListener('DOMContentLoaded', function() {
    const kjop = document.getElementById('kjop');
    const slettBilett = document.getElementById('slettBilett');
    const bilettListe = [];

    kjop.addEventListener('click', function () {
        console.log('Kjøp billett-knappen ble klikket på');

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
        });

        slettBilett.addEventListener('click', function () {
        console.log('Slett bilett-knappen ble klikket på');
        bilettListe.length = 0;
        addTicketToList();

    });
});

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







