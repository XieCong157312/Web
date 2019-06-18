package campsg.qunawan.entity;

import java.io.Serializable;

public class PlaceOnTrip implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private int id;
	private Place place;
	private Trip trip;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Place getPlace() {
		return place;
	}

	public void setPlace(Place place) {
		this.place = place;
	}

	public Trip getTrip() {
		return trip;
	}

	public void setTrip(Trip trip) {
		this.trip = trip;
	}

}
