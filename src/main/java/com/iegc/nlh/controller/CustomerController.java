package com.iegc.nlh.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/customer")
public class CustomerController {
	
	@GetMapping("/management")
	public String getViewManagement(){
		return "CustomerManagement";
	}
	
	@GetMapping("/management/registry")
	public String getViewManagementRegistry(){
		return "EmployeeRegistry";
	}

}
