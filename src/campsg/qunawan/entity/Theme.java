package campsg.qunawan.entity;

import java.io.Serializable;
import java.util.List;

public class Theme implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private int id;
	private String name;
	private List<ThemeOnTrip> themeontrip_list;

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

	public List<ThemeOnTrip> getThemeontrip_list() {
		return themeontrip_list;
	}

	public void setThemeontrip_list(List<ThemeOnTrip> themeontrip_list) {
		this.themeontrip_list = themeontrip_list;
	}

}
