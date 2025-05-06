package com.user_serviceM1.user_service.repository;

import com.user_serviceM1.user_service.model.User;
import org.springframework.data.jpa.repository.JpaRepository;



public interface UserRepository extends JpaRepository<User, Long> {
	
	public User findByEmail(String email);

}
