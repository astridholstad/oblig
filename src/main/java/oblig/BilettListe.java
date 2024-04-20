package oblig;

public class BilettListe {
    private String film;
    private int antall;
    private String forNavn;
    private String etterNavn;
    private int telefonNr;
    private String email;

    public BilettListe(String film, int antall, String forNavn, String etterNavn, int telefonNr, String email){
        this.film = film;
        this.antall = antall;
        this.forNavn = forNavn;
        this.etterNavn = etterNavn;
        this.telefonNr = telefonNr;
        this.email = email;
    }
    public BilettListe(){
    }

    public String getFilm() {
        return film;
    }

    public void setFilm(String film) {
        this.film = film;
    }

    public int getAntall() {
        return antall;
    }

    public void setAntall(int antall) {
        this.antall = antall;
    }

    public String getForNavn() {
        return forNavn;
    }

    public void setForNavn(String forNavn) {
        this.forNavn = forNavn;
    }

    public String getEtterNavn() {
        return etterNavn;
    }

    public void setEtterNavn(String etterNavn) {
        this.etterNavn = etterNavn;
    }

    public int getTelefonNr() {
        return telefonNr;
    }

    public void setTelefonNr(int telefonNr) {
        this.telefonNr = telefonNr;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
