function regBilett() {
    let film = $("#film").val();
    let antall = $("#antall").val();
    let forNavn = $("#forNavn").val();
    let etterNavn = $("#etterNavn").val();
    let telefonNr = $("#telefonNr").val();
    let email = $("#email").val();

    const bilett = {
        film: film,
        antall: antall,
        forNavn: forNavn,
        etterNavn: etterNavn,
        telefonNr: telefonNr,
        email: email
    };


    let feil = "*Må skrive noe inn i "
    let teller = 0;
    let valid = true;

    if (isNaN(antall) || antall === "") {
        $("#antallValidationMsg").html("*Må velge antall");
        valid = false;
    } else {
        $("#antallValidationMsg").html("");
    }
    if (!forNavn) {
        $("#firstNameValidationMsg").html(feil + "fornavn");
        valid = false;
    } else {
        $("#firstNameValidationMsg").html("");
    }
    if (!etterNavn) {
        $("#lastNameValidationMsg").html(feil + "etternavn");
        valid = false;
    } else {
        $("#lastNameValidationMsg").html("");
    }
    if (!validateTelefonNr(telefonNr)) {
        $("#telefonNrValidationMsg").html("*Ugyldig telefonnr");
        valid = false;
    } else {
        $("#telefonNrValidationMsg").html("");
    }

    if (!validateEmail(email)) {
        $("#emailValidationMsg").html("*Ugyldig email");
        valid = false;
    } else {
        $("#emailValidationMsg").html("");
    }

    if (valid) {
        $.post("/lagre", bilett, function () { //bilett gjøres om til json
            hentAlle();
        })

        $("#antall").val("");
        $("#forNavn").val("");
        $("#etterNavn").val("");
        $("#telefonNr").val("");
        $("#email").val("");
    }
}
    function validateTelefonNr(tlfnr) {
    const telefonNrRegex = /^\d{8}$/;
    return telefonNrRegex.test(tlfnr);
    }

    function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
    }

function hentAlle(){ //kaller server metoden hentAlle
        $.get("/hentAlle", function(data){ //mottas fra server
            formaterData(data); //kaller på formater data
        })
    }
    function formaterData(biletter){
        let ut= "<table class=´table`><table>"+"<tr>"+
            "<th>Film</th><th>Antall</th><th>Fornavn</th>" +
            "<th>Etternavn</th><th>Telefon</th><th>Epost</th></tr>";
        for(const i of biletter){
            ut += "<tr>";
            ut += "<td>"+i.film+"</td>"+"<td>"+i.antall+"</td>"+"<td>" +
                i.forNavn+"</td>"+"<td>"+ i.etterNavn+" </td>" + "<td>" +
                i.telefonNr+"</td>" + "<td>" + i.email+ "</td>";
            ut+= "</tr>";
        }
        $("#alleBiletter").html(ut);
    }
    function slettAlle(){
        $.get("/slettAlle", function (data){
            hentAlle();
        })
    }
