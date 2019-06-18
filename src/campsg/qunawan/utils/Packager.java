package campsg.qunawan.utils;

import java.sql.ResultSet;
import java.sql.SQLException;

import campsg.qunawan.entity.City;
import campsg.qunawan.entity.Contact;
import campsg.qunawan.entity.Dates;
import campsg.qunawan.entity.Detail;
import campsg.qunawan.entity.Position;
import campsg.qunawan.entity.Price;
import campsg.qunawan.entity.Sequence;
import campsg.qunawan.entity.Traffic;
import campsg.qunawan.entity.Trip;
import campsg.qunawan.entity.TripPicture;
import campsg.qunawan.entity.User;

public class Packager {

	public static Sequence packSequence(ResultSet rs) throws SQLException{
		Sequence seq = new Sequence();
		seq.setId(rs.getInt("id"));
		seq.setValue(rs.getString("value"));
		seq.setKeying(rs.getString("keying"));
		seq.setType(rs.getString("type"));
		seq.setDescing(rs.getString("descing"));
		return seq;
	}
	
	/**
	 * 封装Contact的普通属性，不包含User
	 */
	public static Contact packContact(ResultSet rs) throws SQLException{
		Contact contact = new Contact();
		contact.setId(rs.getInt("id"));
		contact.setBirthday(rs.getDate("birthday"));
		contact.setCardno(rs.getString("cardno"));
		contact.setEmail(rs.getString("email"));
		contact.setName(rs.getString("name"));
		contact.setPhone(rs.getString("phone"));
		contact.setSex(rs.getBoolean("sex"));
		return contact;
	}

	
	/**
	 * 封装User的普通属性，不包含City属性
	 */
	public static User packUser(ResultSet rs) throws SQLException {
		User user = new User();
		user.setId(rs.getInt("id"));
		user.setPassword(rs.getString("password"));
		user.setPhone(rs.getString("phone"));
		user.setName(rs.getString("name"));
		user.setSex(rs.getBoolean("sex"));
		user.setImg_path(rs.getString("img_path"));
		user.setEmail(rs.getString("email"));
		user.setReal_name(rs.getString("real_name"));
		user.setBirthday(rs.getDate("birthday"));
		return user;
	}


	
	public static TripPicture packTripPicture(ResultSet rs) throws SQLException {
		TripPicture tp = new TripPicture();
		tp.setData(rs.getBytes("data"));
		tp.setName(rs.getString("name"));
		return tp;
	}

	
	public static City packCity(ResultSet rs) throws SQLException {
		City city = new City();
		city.setId(rs.getInt("id"));
		city.setName(rs.getString("name"));
		city.setType(rs.getInt("type"));
		return city;
	}
	
	public static Price packPrice(ResultSet rs) throws SQLException {
		Price price = new Price();
		price.setPrice(rs.getFloat("price"));
		price.setDate(rs.getDate("date"));
		return price;
	}

	public static Trip packTrip(ResultSet rs) throws SQLException {
		Trip trip = new Trip();
		trip.setId(rs.getInt("id"));
		trip.setNum(rs.getInt("num"));
		trip.setTitle(rs.getString("title"));
		trip.setS_title(rs.getString("s_title"));
		trip.setTime(rs.getInt("time"));
		trip.setTraffic(rs.getString("traffic"));
		trip.setHotel(rs.getString("hotel"));
		trip.setGood_rate(rs.getFloat("good_rate"));
		trip.setPlace_score(rs.getFloat("place_score"));
		trip.setHotel_score(rs.getFloat("hotel_score"));
		trip.setService_score(rs.getFloat("service_score"));
		trip.setTraffic_score(rs.getFloat("traffic_score"));
		return trip;
	}

	public static Dates packDate(ResultSet rs) throws SQLException {
		Dates d = new Dates();
		d.setTitle(rs.getString("title"));
		d.setNum(rs.getInt("num"));
		d.setDetail(rs.getString("detail"));
		d.setHotel(rs.getString("hotel"));
		d.setMeal(rs.getString("meal"));
		d.setTraffic(rs.getString("traffic"));
		return d;
	}

	public static Position packPosition(ResultSet rs) throws SQLException {
		Position p = new Position();
		p.setLevel(rs.getInt("level"));
		p.setP1(rs.getFloat("p1"));
		p.setP2(rs.getFloat("p2"));
		return p;
	}
	
	public static Detail packDetail(ResultSet rs) throws SQLException {
		Detail d = new Detail();
		d.setFood(rs.getString("food"));
		d.setHotel(rs.getString("hotel"));
		d.setPlace(rs.getString("place"));
		return d;
	}

	public static Traffic packTraffic(ResultSet rs) throws SQLException {
		Traffic tr = new Traffic();
		tr.setGo_point(rs.getString("go_point"));
		tr.setGo_time(rs.getString("go_time"));
		tr.setReturn_point(rs.getString("return_point"));
		tr.setReturn_time(rs.getString("return_time"));
		return tr;
	}
}
