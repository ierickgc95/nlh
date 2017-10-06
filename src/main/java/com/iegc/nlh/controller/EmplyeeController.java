package com.iegc.nlh.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/employee")
public class EmplyeeController {
	
	@GetMapping("/management")
	public String getViewManagement(){
		return "EmployeeManagement";
	}
	
	@GetMapping("/management/registry")
	public String getViewManagementRegistry(){
		return "EmployeeRegistry";
	}

}
