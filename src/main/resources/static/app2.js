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
    $("#antall").val("");
    $("#forNavn").val("");
    $("#etterNavn").val("");
    $("#telefonNr").val("");
    $("#email").val("");

    let feil = "*Må skrive noe inn i "
    let teller = 0;

    if (isNaN(antall) || antall === "") {
        teller++
        $("#antallValidationMsg").html("*Må velge antall");
    } else {
        $("#antallValidationMsg").html("");
    }
    if (!forNavn) {
        teller++;
        $("#firstNameValidationMsg").html(feil + "fornavn");
    } else {
        $("#firstNameValidationMsg").html("");
    }
    if (!etterNavn) {
        teller++;
        $("#lastNameValidationMsg").html(feil + "etternavn");
    } else {
        $("#lastNameValidationMsg").html("");
    }
    if (telefonNr.length != 8 || !telefonNr) {
        teller++;
        $("#telefonNrValidationMsg").html("*Ugyldig telefonnr");
    } else {
        $("#telefonNrValidationMsg").html("");
    }
    if (!email) {
        teller++;
        $("#emailValidationMsg").html("*Ugyldig email");
    } else {
        $("#emailValidationMsg").html("");
    }
    /*function validateTelefonNr(tlfnr) {
        const telefonNrRegex = /^\d{8}$/;
        return telefonNrRegex.test(tlfnr);
    }
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    */
    if (teller == 0) {
        $.get("/lagre", bilett, function () { //bilett gjøres om til json
            hentAlle();
        })
    }
}
    function hentAlle(){ //kaller server metoden hentAlle
        $.post("/hentAlle", function(data){ //mottas fra server
            formaterData(data); //kaller på formater data
        })
    }
    function formaterData(biletter){
        let ut= "<table class=´table`><table>"+"<tr>"+
            "<th>Film</th><th>Antall</th><th>Fornavn</th>" +
            "<th>Etternavn</th><th>Telefon</th><th>Epost</th></tr>";
        for(const i of biletter){
            ut += "<tr>";
            ut += "<td>" +i.film+ "</td>"+"<td>"+ i.antall+ "</td>" + "<td>" +
                i.forNavn+ "</td>" + "<td>" + i.etterNavn+" </td>" + "<td>" +
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
