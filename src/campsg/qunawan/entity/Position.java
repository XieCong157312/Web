package campsg.qunawan.entity;

import java.io.Serializable;

public class Position implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private int id;
	private float p1;
	private float p2;
	private int level;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public float getP1() {
		return p1;
	}

	public void setP1(float p1) {
		this.p1 = p1;
	}

	public float getP2() {
		return p2;
	}

	public void setP2(float p2) {
		this.p2 = p2;
	}

	public int getLevel() {
		return level;
	}

	public void setLevel(int level) {
		this.level = level;
	}

}
