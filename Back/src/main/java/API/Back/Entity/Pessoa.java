package API.Back.Entity;

//import jakarta.persistence.*;

//@Entity
public class Pessoa {
   //@Id 
   private long id;
   private String nome;
   
   public Pessoa(int id, String nome){
    this.id=id;
    this.nome=nome;
   }

    public long getId() {
    return id;
    }

    public void setId(long id) {
    this.id = id;
    }

    public String getNome() {
    return nome;
    }

    public void setNome(String nome) {
    this.nome = nome;
    }
   
}
