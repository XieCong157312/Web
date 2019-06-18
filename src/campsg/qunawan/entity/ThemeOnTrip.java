package campsg.qunawan.entity;

import java.io.Serializable;

public class ThemeOnTrip implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private int id;

	private Theme theme;
	private Trip trip;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Theme getTheme() {
		return theme;
	}

	public void setTheme(Theme theme) {
		this.theme = theme;
	}

	public Trip getTrip() {
		return trip;
	}

	public void setTrip(Trip trip) {
		this.trip = trip;
	}

}
