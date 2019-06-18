package campsg.qunawan.entity;

import java.io.Serializable;

public class City implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private int id;
	private int type;
	private String name;

	private City parentCity;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getType() {
		return type;
	}

	public void setType(int type) {
		this.type = type;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public City getParentCity() {
		return parentCity;
	}

	public void setParentCity(City parentCity) {
		this.parentCity = parentCity;
	}

	@Override
	public String toString() {
		return "City [id=" + id + ", type=" + type + ", name=" + name + ", parentCity=" + parentCity + "]";
	}

}
