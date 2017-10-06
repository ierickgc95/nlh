package com.iegc.nlh.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/quotation")
public class QuotationController {
	
	@GetMapping("/quote")
	public String getViewManagement(){
		return "Quote";
	}
	
	@GetMapping("/management")
	public String getViewManagementRegistry(){
		return "QuotesManagement";
	}

}
