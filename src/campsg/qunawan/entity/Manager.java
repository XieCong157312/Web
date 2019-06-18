package campsg.qunawan.entity;

import java.io.Serializable;

public class Manager implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -6868187729133744111L;

	private int id;
	private String name;
	private String password;

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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
