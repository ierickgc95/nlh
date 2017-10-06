package com.iegc.nlh.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/monitoring")
public class MonitoringController {
	
	@GetMapping("/transport")
	public String getViewManagement(){
		return "MonitoringTransport";
	}
	

}
