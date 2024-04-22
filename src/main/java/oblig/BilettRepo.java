package oblig;
import com.example.demo.model.Ticket;

import org.springframework.boot.autoconfigure.data.jpa.JpaRepositoriesAutoConfiguration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface BilettRepo extends JpaRepositoriesAutoConfiguration<Ticket, Long> {

}
