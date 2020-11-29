package Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class VoiceEntity {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private String content; // demande évoquée
    private String returned; // texte à retourner quand le service est effectué
    private String command; // contient une commande a faire quand spécifiée

    protected VoiceEntity() {}

    public VoiceEntity(String theContent, String theCommand, String theReturned) {
        this.content = theContent;
        this.command = theCommand;
        this.returned = theReturned;
    }


    public String getContent() {
        return this.content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getReturned() {
        return this.returned;
    }

    public void setReturned(String returned) {
        this.returned = returned;
    }

    public String getCommand() {
        return command;
    }

    public void setCommand(String command) {
        this.command = command;
    }
}