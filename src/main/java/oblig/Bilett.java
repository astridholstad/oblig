package oblig;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.beans.factory.annotation.Autowired;


import java.util.List;


@RestController
public class Bilett{

    @Autowired
    BiletterRepo rep;

    @GetMapping("/lagre")
    public void lagreBilett(Biletter innBilett){
        rep.lagreBilett(innBilett);
    }

    @PostMapping("/hentAlle")
    public List<Biletter> hentAlle() {
        return rep.hentAlleBiletter();
    }
    @GetMapping("/slettAlle")
    public void slettAlle(){
        rep.slettAlleBiletter();
    }
}


    /*
    private final List<BilettListe> alleBiletter = new ArrayList<>();

    @PostMapping("/kjøp")
    public void lagreBilett(BilettListe innBilett){
        alleBiletter.add(innBilett);
    }
    @GetMapping("/hentAlle")
    public List<BilettListe> hentAlle(){
        return alleBiletter;
    }


}

     */