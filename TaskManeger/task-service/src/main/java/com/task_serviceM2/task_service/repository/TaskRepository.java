package com.task_serviceM2.task_service.repository;

import com.task_serviceM2.task_service.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task,Long> {

    public List<Task> findByassignedUserId(Long userId);
}
