package com.crudapplication.crud.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class NextMoviedList {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String title;
	@Column(name="detail",columnDefinition="LONGTEXT")
	private String detail;
	private String releasedate;
	private double review;
	@Column(name="cast",columnDefinition="LONGTEXT")
	private String cast;
	private String createdate;
	@Column(name="comment",columnDefinition="LONGTEXT")
	private String comment;
	private String image;
	
	public NextMoviedList() {};
	public NextMoviedList(long id, String title,String detail,String releasedate, double review, String cast, String createdate,String comment,String image) {
		super();
		this.id = id;
		this.title = title;
		this.detail = detail;
		this.releasedate = releasedate;
		this.review = review;
		this.cast = cast;
		this.createdate = createdate;
		this.comment = comment;
		this.image = image;
	}
	
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDetail() {
		return detail;
	}
	public void setDetail(String detail) {
		this.detail = detail;
	}
	public String getReleasedate() {
		return releasedate;
	}
	public void setReleasedate(String releasedate) {
		this.releasedate = releasedate;
	}
	public double getReview() {
		return review;
	}
	public void setReview(double review) {
		this.review = review;
	}
	public String getCast() {
		return cast;
	}
	public void setCast(String cast) {
		this.cast = cast;
	}
	public String getCreatedate() {
		return createdate;
	}
	public void setCreatedate(String createdate) {
		this.createdate = createdate;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}

	
	
	
	
}
