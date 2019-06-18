package campsg.qunawan.entity;

import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Set;

public class Trip implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private int id;
	private int num;
	private String title;
	private String s_title;
	private String traffic;
	private String hotel;
	private Integer time;
	private float good_rate;
	private float place_score;
	private float hotel_score;
	private float service_score;
	private float traffic_score;
	private float min_price;
	private Boolean is_ok;
	private String main_picname;
	private Detail detail;

	private City start;
	private Position position;
	private Sequence type;
	private Schedule schedule;

	private List<Price> price_list;
	private List<ThemeOnTrip> themeontrip_list;
	private List<PlaceOnTrip> placeontrip_list;
	private List<String> date_list = new ArrayList<>();

	/** PRJ-WTP-HIB-012：图片缓存更新 Set集合属性设置 2/3【start】**/
	private Set<TripPicture> pic_list;
	
	public Trip(int id) {
		this.id = id;
	}
	
	public Trip(){};

	public Set<TripPicture> getPic_list() {
		return pic_list;
	}

	public void setPic_list(Set<TripPicture> pic_list) {
		this.pic_list = pic_list;
		for (TripPicture p : this.pic_list) {
			if (p.getType() == 0) {
				setMain_picname(p.getName());
			}
		}
	}
	/** PRJ-WTP-HIB-012：图片缓存更新 Set集合属性设置 2/3【end】**/
	
	public Detail getDetail() {
		return detail;
	}

	public Schedule getSchedule() {
		return schedule;
	}

	public void setSchedule(Schedule schedule) {
		this.schedule = schedule;
	}

	public void setDetail(Detail detail) {
		this.detail = detail;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getNum() {
		return num;
	}

	public void setNum(int num) {
		this.num = num;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getTraffic() {
		return traffic;
	}

	public void setTraffic(String traffic) {
		this.traffic = traffic;
	}

	public String getHotel() {
		return hotel;
	}

	public void setHotel(String hotel) {
		this.hotel = hotel;
	}

	public Integer getTime() {
		return time;
	}

	public void setTime(Integer time) {
		this.time = time;
	}

	public float getGood_rate() {
		return this.good_rate;
	}

	public void setGood_rate(float good_rate) {
		this.good_rate = good_rate;
	}

	public float getPlace_score() {
		return place_score;
	}

	public void setPlace_score(float place_score) {
		this.place_score = place_score;
	}

	public float getHotel_score() {
		return hotel_score;
	}

	public void setHotel_score(float hotel_score) {
		this.hotel_score = hotel_score;
	}

	public float getService_score() {
		return service_score;
	}

	public void setService_score(float service_score) {
		this.service_score = service_score;
	}

	public float getTraffic_score() {
		return traffic_score;
	}

	public void setTraffic_score(float traffic_score) {
		this.traffic_score = traffic_score;
	}

	public Boolean isIs_ok() {
		return is_ok;
	}

	public void setIs_ok(Boolean is_ok) {
		this.is_ok = is_ok;
	}

	public City getStart() {
		return start;
	}

	public void setStart(City start) {
		this.start = start;
	}

	public Position getPosition() {
		return position;
	}

	public void setPosition(Position position) {
		this.position = position;
	}

	public Sequence getType() {
		return type;
	}

	public void setType(Sequence type) {
		this.type = type;
	}

	public String getS_title() {
		return s_title;
	}

	public void setS_title(String s_title) {
		this.s_title = s_title;
	}

	public Boolean getIs_ok() {
		return is_ok;
	}

	public List<Price> getPrice_list() {
		return price_list;
	}

	public void setPrice_list(List<Price> price_list) {
		this.price_list = price_list;
		float min = 0f;
		if (!price_list.isEmpty() && price_list != null) {
			min = price_list.get(0).getPrice();
			for (Price p : price_list) {
				if (p.getPrice() <= min) {
					min = p.getPrice();
				}
			}
		}
		setMin_price(min);
	}

	public int getMin_price() {
		return (int) this.min_price;
	}

	public void setMin_price(float min_price) {
		this.min_price = min_price;
	}

	public String getMain_picname() {
		return main_picname;
	}

	public void setMain_picname(String main_picid) {
		this.main_picname = main_picid;
	}

	public List<ThemeOnTrip> getThemeontrip_list() {
		return themeontrip_list;
	}

	public void setThemeontrip_list(List<ThemeOnTrip> themeontrip_list) {
		this.themeontrip_list = themeontrip_list;
	}

	public List<PlaceOnTrip> getPlaceontrip_list() {
		return placeontrip_list;
	}

	public void setPlaceontrip_list(List<PlaceOnTrip> placeontrip_list) {
		this.placeontrip_list = placeontrip_list;
	}

	public List<String> getDate_list() {
		SimpleDateFormat sdf = new SimpleDateFormat("MM/dd");
		List<Date> dateList = new ArrayList<>();
		for (Price p : getPrice_list())
			dateList.add(p.getDate());
		Collections.sort(dateList);
		for (Date d : dateList)
			this.date_list.add(sdf.format(d));
		return this.date_list;
	}

	public void setDate_list(List<String> date_list) {
		this.date_list = date_list;
	}

	@Override
	public String toString() {
		return "Trip [id=" + id + ", num=" + num + ", title=" + title + ", s_title=" + s_title + ", traffic=" + traffic
				+ ", hotel=" + hotel + ", time=" + time + ", good_rate=" + good_rate + ", place_score=" + place_score
				+ ", hotel_score=" + hotel_score + ", service_score=" + service_score + ", traffic_score="
				+ traffic_score + ", is_ok=" + is_ok + ", start=" + start + ", position=" + position + ", type=" + type
				+ "]";
	}

}
