package com.iegc.nlh.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/sale")
public class SaleController {
	
	@GetMapping("/management")
	public String getViewManagementRegistry(){
		return "SalesManagement";
	}

	@GetMapping("/management/registry")
	public String getViewManagement(){
		return "SaleRegistry";
	}
}
