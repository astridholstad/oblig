package oblig;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.ArrayList;


@RestController
public class Bilett{
    public final List<bilettListe> alleBiletter = new ArrayList<>();

    @PostMapping("/kjøp")
    public void lagreBilett(bilettListe innBilett){
        alleBiletter.add(innBilett);
    }
    @GetMapping("/hentAlle")
    public List<bilettListe> hentAlle(){
        return alleBiletter;
    }


}
/* {
    @GetMapping("/")
    public String hei(String navn){
        return "hei verden "+ navn;
    }

}
*/