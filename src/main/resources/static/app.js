document.addEventListener('DOMContentLoaded', function(){
    const kjøp = document.getElementById('kjøp');
    const slettBilett = document.getElementById('slettBilett');
    const bilettListe = document.getElementById('bilettListe');
})
kjøp.addEventListener('click', function() {
    const filmValg = document.getElementById('film');
    const antallInput = document.getElementById('antall');
    const firstNameInput = document.getElementById('forNavn');
    const lastNameInput = document.getElementById('etterNavn');
    const phoneInput = document.getElementById('telefonNr');
    const emailInput = document.getElementById('email');
})
if (!validateInputs(filmValg.value, antallInput.value, firstNameInput.value, lastNameInput.value, phoneInput.value, emailInput.value)) {
    alert('Vennligst fyll ut alle feltene.')
    return;
}
const bilett = {
    film: filmValg.value,
    antall: parseInt(antallInput.value),
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    telefonnr: phoneInput.value,
    email: emailInput.value
};

    addTicketToList(bilett);
    clearInputs();
};
    slettBilett.addEventListener('click', function() {
        bilettListe.innerHTML = '';
        });
}
function validateInputs(film, antall, firstName, lastName, telefonnr, email) {
    return film !== '' && antall !== '' && firstName !== '' && lastName !== '' && telefonnr !== '' && email !== '';
}
function addTicketToList(bilett) {
    const bilettListe = document.getElementById('bilettListe');
    const bilettType = document.createElement('li');
    bilettType.textContent = `Film: ${ticket.film}, Antall: ${ticket.antall}, Navn: ${ticket.firstName} ${ticket.lastName}, Telefon: ${ticket.telefonnr}, Epost: ${ticket.email}`;
    ticketsList.appendChild(bilettType);
}
function clearInputs() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = '';
    });
}

