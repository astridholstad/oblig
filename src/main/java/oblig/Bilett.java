package oblig;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.beans.factory.annotation.Autowired;


import java.util.ArrayList;
//import java.util.List;


@RestController
public class Bilett{
    public final ArrayList<Biletter> alleBiletter = new ArrayList<>();

   //* @Autowired
   // BiletterRepo rep;

    @PostMapping("/lagre")
    public void lagreBilett(Biletter innBilett){
        alleBiletter.add(innBilett);
    }

    @GetMapping("/hentAlle")
    public ArrayList<Biletter> hentAlle() {
        return alleBiletter;
    }
    @GetMapping("/slettAlle")
    public void slettAlle(){
       alleBiletter.clear();
    }
}

