package oblig;
import com.example.demo.model.Ticket;
import com.example.demo.repository.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

public class BilettService {

    @Service
    public class TicketService {

        @Autowired
        private TicketRepository ticketRepository;

        public Ticket saveTicket(Ticket ticket) {
            return ticketRepository.save(ticket);
        }

        public List<Ticket> getAllTickets() {
            return ticketRepository.findAll();
        }

        public void deleteAllTickets() {
            ticketRepository.deleteAll();
        }
    }


}
