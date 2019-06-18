package campsg.qunawan.entity;

import java.io.Serializable;

public class Traffic implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private int id;
	private String go_point;
	private String go_time;
	private String return_point;
	private String return_time;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getGo_point() {
		return go_point;
	}

	public void setGo_point(String go_point) {
		this.go_point = go_point;
	}

	public String getGo_time() {
		return go_time;
	}

	public void setGo_time(String go_time) {
		this.go_time = go_time;
	}

	public String getReturn_point() {
		return return_point;
	}

	public void setReturn_point(String return_point) {
		this.return_point = return_point;
	}

	public String getReturn_time() {
		return return_time;
	}

	public void setReturn_time(String return_time) {
		this.return_time = return_time;
	}
}
