package com.mattera.voiceCommand;

import Entity.VoiceEntity;
import Repository.VoiceRepository;
import Services.VoiceService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

import java.io.IOException;

//@EnableAutoConfiguration(exclude={DataSourceAutoConfiguration.class})
@ComponentScan(basePackages={"VoiceController","Services","Entity","Repository"})
@SpringBootApplication
public class VoiceCommandApplication {

	public static void main(String[] args) throws IOException {
		SpringApplication.run(VoiceCommandApplication.class, args);
		System.out.println("Launched");
		VoiceService launchUi = new VoiceService();
		VoiceEntity launchTheUi;
		launchUi.executeVoiceOrders(launchTheUi = new VoiceEntity("lucy","start chrome 127.0.0.1:8080",""));

	}

}
