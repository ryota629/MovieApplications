package com.crudapplication.crud.service;

import java.util.List;

import com.crudapplication.crud.model.MoviedList;
import com.crudapplication.crud.model.NextMoviedList;

public interface MoviedService {
	
	public List<MoviedList> getMovied();
	public MoviedList addMovied(MoviedList movied);
	public MoviedList getMovied(long movieId);
	public MoviedList putMovied(MoviedList movied);
	public MoviedList deleteMovied(long moviedId);
	
	public List<NextMoviedList> getNextMovied();
	public NextMoviedList addNextMovied(NextMoviedList nextmovied);
	public NextMoviedList getNextMovied(long nextmovieId);
	public NextMoviedList putNextMovied(NextMoviedList nextmovied);
	public NextMoviedList deleteNextMovied(long nextmoviedId);
	
}
