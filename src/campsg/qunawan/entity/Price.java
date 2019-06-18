package campsg.qunawan.entity;

import java.io.Serializable;
import java.sql.Date;

public class Price implements Serializable {

	private static final long serialVersionUID = 1L;

	private int id;
	private Date date;
	private float price;
	private Trip trip;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public Trip getTrip() {
		return trip;
	}

	public void setTrip(Trip trip) {
		this.trip = trip;
	}

}
