package com.example.bank.repository;

import com.example.bank.model.Customer;
import org.springframework.data.cassandra.repository.AllowFiltering;
import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.stereotype.Repository;
import java.util.UUID;

@Repository
public interface CustomerRepository extends CassandraRepository<Customer, UUID> {

    @AllowFiltering
    Customer findCustomerByEmailAndPassword(String email, String password);

}
