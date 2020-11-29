package VoiceController;

import Entity.VoiceEntity;
import Services.VoiceService;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
public class VoiceReceiverCtrl {

    @RequestMapping(method = RequestMethod.POST, value="receiveVoiceCtrl")
    public void  orderMe(@RequestBody String theOrderReceived) throws IOException {
        VoiceService executeMe = new VoiceService();
        executeMe.ExistAndExecute(theOrderReceived);

    }
    @GetMapping("/hello")
    public String getAllSalopes(){
        return "oui";
    }

    @RequestMapping(method = RequestMethod.GET, value="getVoicesCtrl")
        List<VoiceEntity> sendVoiceList(){
        VoiceService List = new VoiceService();
        return List.getVoices();
    }
}
