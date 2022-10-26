package com.crudapplication.crud.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crudapplication.crud.dao.MoviedDao;
import com.crudapplication.crud.dao.NextMoviedDao;
import com.crudapplication.crud.model.MoviedList;
import com.crudapplication.crud.model.NextMoviedList;

@Service
public class MoviedServiceImpl implements MoviedService {
	
	@Autowired
	public MoviedDao moviedlistdao;
	@Autowired
	public NextMoviedDao nextmoviedlistdao;
	
	
	@Override
	public List<MoviedList> getMovied() {
		return moviedlistdao.findAll();
	}
	
	@Override
	public MoviedList addMovied(MoviedList movied) {
		System.out.println(movied.getReview());
		moviedlistdao.save(movied);
		System.out.println(movied.getReview());
		return movied;
	}

	@Override
	public MoviedList getMovied(long movieId) {
		return moviedlistdao.findById(movieId).get();
	}

	@Override
	public List<NextMoviedList> getNextMovied() {
		return nextmoviedlistdao.findAll();
	}

	@Override
	public NextMoviedList addNextMovied(NextMoviedList nextmovied) {
		nextmoviedlistdao.save(nextmovied);
		return nextmovied;
	}

	@Override
	public NextMoviedList getNextMovied(long nextmovieId) {
		return nextmoviedlistdao.findById(nextmovieId).get();
	}

	@Override
	public MoviedList putMovied(MoviedList movied) {
		return moviedlistdao.save(movied);
	}
	
	@Override
	public NextMoviedList putNextMovied(NextMoviedList nextmovied) {
		return nextmoviedlistdao.save(nextmovied);
	}

	@Override
	public MoviedList deleteMovied(long moviedId) {
		MoviedList moviedlist = moviedlistdao.findById(moviedId).get(); 
		moviedlistdao.delete(moviedlist);
		return moviedlist;
	}
	
	@Override
	public NextMoviedList deleteNextMovied(long nextmoviedId) {
		NextMoviedList nextmoviedlist = nextmoviedlistdao.findById(nextmoviedId).get(); 
		nextmoviedlistdao.delete(nextmoviedlist);
		return nextmoviedlist;
	}
}
