package com.crudapplication.crud.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.crudapplication.crud.model.MoviedList;

public interface MoviedDao extends JpaRepository<MoviedList,Long>{
	
}
