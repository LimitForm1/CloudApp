package API.Back.Controller;
import API.Back.Entity.Pessoa;
import java.util.*;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/pessoa")
@CrossOrigin(origins = "*")
public class PessoaControler {
    private List<Pessoa> pessoas = new ArrayList<>();
    private int nextPessoaId = 1;

    @PostMapping
    public Pessoa createPessoa(@RequestBody Pessoa pessoa){
        pessoa.setId(nextPessoaId++);
        pessoas.add(pessoa);
        return pessoa;
    }
    @GetMapping
    public List<Pessoa> getAllPessoas() {
        return pessoas;
    }
}
