package campsg.qunawan.entity;

import java.io.Serializable;
import java.sql.Date;
import java.util.List;

/** 实训场景002：创建持久化用户类 类文件创建 1/3【start】**/
public class User implements Serializable {

	private static final long serialVersionUID = 1L;

	/** 实训场景002：创建持久化用户类 类属性创建 2/3【start】**/
	private int id;
	private String phone;
	private String password;
	private String name;
	private Boolean sex;
	private String img_path;
	private String email;
	private String real_name;
	private Date birthday;

	private City city;

	/** 实训场景002：创建持久化用户类 类属性创建 2/3【end】**/
	
	public User(int id) {
		this.id = id;
	}
	
	public User() {
	}

	/** 实训场景002：创建持久化用户类 类方法创建 3/3【start】**/
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Boolean getSex() {
		return sex;
	}

	public void setSex(Boolean sex) {
		this.sex = sex;
	}

	public String getImg_path() {
		return img_path;
	}

	public void setImg_path(String img_path) {
		this.img_path = img_path;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getReal_name() {
		return real_name;
	}

	public void setReal_name(String real_name) {
		this.real_name = real_name;
	}

	public Date getBirthday() {
		return birthday;
	}

	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}

	public City getCity() {
		return city;
	}

	public void setCity(City city) {
		this.city = city;
	}

	/** PRJ-WTP-HIB-011：获取常用游客列表 添加持久化类属性 2/3【start】**/
	private List<Contact> Contact;
	
	public List<Contact> getContact() {
		return Contact;
	}

	public void setContact(List<Contact> contact) {
		Contact = contact;
	}
	/** PRJ-WTP-HIB-011：获取常用游客列表 添加持久化类属性 2/3【end】**/

	/** 实训场景002：创建持久化用户类 类方法创建 3/3【end】**/
}
/** 实训场景002：创建持久化用户类 类文件创建 1/3【end】**/