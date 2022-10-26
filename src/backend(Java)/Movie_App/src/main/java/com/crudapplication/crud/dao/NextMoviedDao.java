package com.crudapplication.crud.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.crudapplication.crud.model.NextMoviedList;

public interface NextMoviedDao extends JpaRepository<NextMoviedList,Long>{
	
}
