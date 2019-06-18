package campsg.qunawan.entity;

import java.io.Serializable;
import java.util.List;

public class Place implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private int id;
	private String name;
	private City city;

	private List<PlaceOnTrip> placeontrip_list;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public City getCity() {
		return city;
	}

	public void setCity(City city) {
		this.city = city;
	}

	public List<PlaceOnTrip> getPlaceontrip_list() {
		return placeontrip_list;
	}

	public void setPlaceontrip_list(List<PlaceOnTrip> placeontrip_list) {
		this.placeontrip_list = placeontrip_list;
	}

}
