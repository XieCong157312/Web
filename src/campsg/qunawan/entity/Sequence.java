package campsg.qunawan.entity;

import java.io.Serializable;

public class Sequence implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private int id;
	private String value;
	private String keying;
	private String type;
	private String descing;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public String getKeying() {
		return keying;
	}

	public void setKeying(String keying) {
		this.keying = keying;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getDescing() {
		return descing;
	}

	public void setDescing(String descing) {
		this.descing = descing;
	}

}
