package oblig;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.ArrayList;


@RestController
public class Bilett{
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