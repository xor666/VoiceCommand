package Services;

import Entity.VoiceEntity;
import Repository.VoiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.lang.ProcessBuilder;


@Service
public class VoiceService {

    //@Autowired
    //private VoiceRepository VoiceRepository;


    private List<VoiceEntity> Voices =new ArrayList<>( Arrays.asList(
            new VoiceEntity("éteindre", "shutdown /s /f /t 0",""),
            new VoiceEntity("redémarrage","shutdown.exe /r /t 00",""),
            new VoiceEntity("musique", "start chrome https://www.youtube.com/watch?v=36YnV9STBqc",""),
            new VoiceEntity("ferme la session", "rundll32.exe user32.dll. LockWorkStation",""),
            new VoiceEntity("sexy time", "start chrome https://fr.pornhub.com/",""),
            new VoiceEntity("métal", "start chrome https://www.youtube.com/watch?v=dGfdGZ8cH-o",""),
            new VoiceEntity("électro", "start chrome https://www.youtube.com/watch?v=LmZ9ICThkas",""),
            new VoiceEntity("Rock", "start chrome https://www.youtube.com/watch?v=befZad39grg","")

            //mini jeux de données pour tester avant d'avoir une bdd
    ));

    //here to test
    public void echo() throws IOException {
        ProcessBuilder process = new ProcessBuilder(System.getProperty("user.dir")+"\\src\\main\\resources\\public\\ping.bat");
        //process.command("cmd.exe","C:\\Users\\Mattera\\hello.bat");
        process.start();
    }
    public void addVoice(String theOrderToAdd){
        //VoiceEntity virginVoice = new VoiceEntity(theOrderToAdd,"","");
        //VoiceRepository.save(virginVoice);
        System.out.println("Méthode à implémenter pour ajouter les voices");

    }


    //problem
    public void ExistAndExecute(String orderReceive) throws IOException {
        for (VoiceEntity thisVoice: Voices) {
            String content = (String)thisVoice.getContent();
            if(content.equals(orderReceive)){
                System.out.println("Process found ! ");
                executeVoiceOrders(thisVoice);
                break;
            }
            else{
                // save for later
                addVoice(orderReceive);

            }
            
        }
    }
    public void executeVoiceOrders(VoiceEntity VoiceWithScript) throws IOException {
        String scriptToExecute = VoiceWithScript.getCommand();
        ProcessBuilder processBuilder = new ProcessBuilder();
        // Run this on Windows, cmd, /c = terminate after this run
        System.out.println(scriptToExecute);
        
        processBuilder.command("cmd.exe", "/c", scriptToExecute);
        processBuilder.start();
    }

    public List<VoiceEntity> getVoices() {
        /*try{
            List<VoiceEntity> voices = new ArrayList<VoiceEntity>();
            VoiceRepository.findAll().forEach(voices::add);
            return voices;
        }
        catch (Exception e){
            return Voices;
        }*/
        return Voices;
    }
}

