package oblig;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;


import java.util.ArrayList;


@RestController
@RequestMapping("/tickets")
public class Bilett{

    @Autowired
    private TicketService ticketService;
    @PostMapping
    public ResponseEntity<Ticket> addTicket(@RequestBody Ticket ticket) {
        Ticket savedTicket = ticketService.saveTicket(ticket);
        return ResponseEntity.ok(savedTicket);
    }
    @GetMapping
    public List<Ticket> getAllTickets() {
        return ticketService.getAllTickets();
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteTickets() {
        ticketService.deleteAllTickets();
        return ResponseEntity.ok().build();
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