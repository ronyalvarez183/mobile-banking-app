package com.example.bank.service;

import com.example.bank.model.Customer;
import java.util.Optional;
import java.util.UUID;

public interface CustomerService {

    Customer signup(Customer customer);
    Customer login(String email, String password);
    Optional<Customer> deposit(UUID id, Double amount);
    Optional<Customer> withdraw(UUID id, Double amount);
    Boolean deleteAccount(UUID id);

}
