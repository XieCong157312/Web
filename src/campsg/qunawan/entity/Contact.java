package campsg.qunawan.entity;

import java.io.Serializable;
import java.sql.Date;

public class Contact implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private int id;
	private User user;
	private String name;
	private String phone;
	private boolean sex;
	private String email;
	private String cardno;
	private Date birthday;

	public Contact(String c_name, String c_phone, boolean c_sex, String c_cardno, String c_email, Date birthday,
			User user) {
		this.name = c_name;
		this.phone = c_phone;
		this.sex = c_sex;
		this.cardno = c_cardno;
		this.email = c_email;
		this.birthday = birthday;
		this.user = user;
	}

	public Contact() {
	}
	
	public Contact(User user, String name, String phone, String cardno) {
		this.user = user;
		this.name = name;
		this.phone = phone;
		this.cardno = cardno;
	}

	public Contact(User user, String name, String phone) {
		this.user = user;
		this.name = name;
		this.phone = phone;
	}

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

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public boolean isSex() {
		return sex;
	}

	public void setSex(boolean sex) {
		this.sex = sex;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCardno() {
		return cardno;
	}

	public void setCardno(String cardno) {
		this.cardno = cardno;
	}

	public Date getBirthday() {
		return birthday;
	}

	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Contact [id=" + id + ", user=" + user + ", name=" + name + ", phone=" + phone + ", sex=" + sex
				+ ", email=" + email + ", cardno=" + cardno + ", birthday=" + birthday + "]";
	}

}
