package com.example.bank.service;

import com.example.bank.model.Customer;
import com.example.bank.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;
import java.util.UUID;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public Customer signup(Customer customer) {
        Customer new_customer = new Customer(
                UUID.randomUUID(),
                customer.getFirst_name(),
                customer.getLast_name(),
                customer.getEmail(),
                customer.getPassword(),
                customer.getBalance()
        );
        return customerRepository.insert(new_customer);
    }

    @Override
    public Customer login(String email, String password) {
        return customerRepository.findCustomerByEmailAndPassword(email, password);
    }

    @Override
    public Optional<Customer> deposit(UUID id, Double amount) {
        Optional<Customer> optionalCustomer = customerRepository.findById(id);
        if (optionalCustomer.isPresent()) {
            Customer customer = optionalCustomer.get();
            Double new_balance = customer.getBalance() + amount;
            customer.setBalance(new_balance);
            customerRepository.save(customer);
        }
        return optionalCustomer;
    }

    @Override
    public Optional<Customer> withdraw(UUID id, Double amount) {
        Optional<Customer> optionalCustomer = customerRepository.findById(id);
        if (optionalCustomer.isPresent()) {
            Customer customer = optionalCustomer.get();
            Double new_balance = customer.getBalance() - amount;
            customer.setBalance(new_balance);
            customerRepository.save(customer);
        }
        return optionalCustomer;
    }

    @Override
    public Boolean deleteAccount(UUID id) {
        Boolean result = customerRepository.existsById(id);
        if (result) {
            customerRepository.deleteById(id);
            return true;
        }
        return false;
    }

}
