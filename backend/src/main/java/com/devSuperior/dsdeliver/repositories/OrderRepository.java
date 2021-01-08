package com.devSuperior.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devSuperior.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

}
