package com.example.bank.controller;

import com.example.bank.model.Customer;
import com.example.bank.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("api/customer")
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @RequestMapping(method = RequestMethod.GET, value = "/test")
    public String test() {
        return "Hi there! The test was successful. This endpoint is working.";
    }

    @RequestMapping(method = RequestMethod.POST, value = "/signup", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Customer signup(@RequestBody Customer customer) {
        return customerService.signup(customer);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/login", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Customer login(@RequestBody Map<String, String> json) {
        String email = json.get("email");
        String password = json.get("password");
        return customerService.login(email, password);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/deposit", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Optional<Customer> deposit(@RequestBody Map<String, String> json) {
        UUID id = UUID.fromString(json.get("id"));
        Double amount = Double.parseDouble(json.get("amount"));
        return customerService.deposit(id, amount);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/withdraw", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Optional<Customer> withdraw(@RequestBody Map<String, String> json) {
        UUID id = UUID.fromString(json.get("id"));
        Double amount = Double.parseDouble(json.get("amount"));
        return customerService.withdraw(id, amount);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/delete/{customerId}")
    public Boolean deleteAccount(@PathVariable String customerId) {
        UUID id = UUID.fromString(customerId);
        return customerService.deleteAccount(id);
    }

}
