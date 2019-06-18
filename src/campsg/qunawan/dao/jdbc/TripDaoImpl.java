package campsg.qunawan.dao.jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import campsg.qunawan.dao.CityDao;
import campsg.qunawan.dao.PlaceDao;
import campsg.qunawan.dao.PriceDao;
import campsg.qunawan.dao.SequenceDao;
import campsg.qunawan.dao.TripDao;
import campsg.qunawan.entity.City;
import campsg.qunawan.entity.Dates;
import campsg.qunawan.entity.PlaceOnTrip;
import campsg.qunawan.entity.Price;
import campsg.qunawan.entity.Schedule;
import campsg.qunawan.entity.Sequence;
import campsg.qunawan.entity.Trip;
import campsg.qunawan.entity.TripPicture;
import campsg.qunawan.utils.Packager;

public class TripDaoImpl extends JDBCBase implements TripDao{
	
	private CityDao cityDao = new CityDaoImpl();
	
	private SequenceDao sequenceDao  = new SequenceDaoImpl();

	private PriceDao priceDao  = new PriceDaoImpl();
	
	private PlaceDao placeDao  = new PlaceDaoImpl();

	@Override
	public List<Trip> getPageTripsByType(int id, int start, int maxCount){
		Connection con = JDBCUtil.getConnection();
		PreparedStatement ps = null;
		ResultSet t_rs = null;
		ResultSet pic_rs = null;
		
		List<Trip> trips = new ArrayList<>();
		try {
			String sql = "SELECT * FROM Trip t WHERE t.type = "+ id;
			ps = con.prepareStatement(sql, ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
			t_rs = query(ps, start, maxCount);
			while(t_rs.next()){
				Trip trip = new Trip();
				/*
				 * 因为首页只用到短标题、图片和价格所以只查出了这几个属性
				 */
				int tid = t_rs.getInt("id");
				// 保存id值
				trip.setId(tid);
				// 保存短标题
				trip.setS_title(t_rs.getString("s_title"));
				
				/** 封装并保存图片列表 */
				String pic_sql = "SELECT * FROM TripPicture tp WHERE tp.trip = "+tid+" AND tp.type = 0";
				ps = con.prepareStatement(pic_sql);
				pic_rs = query(ps);
				Set<TripPicture> tplist = new HashSet<>();
				if(pic_rs.next()){
					tplist.add(Packager.packTripPicture(pic_rs));
				}
				trip.setPic_list(tplist);
				
				/** 封装并保存价格列表 */
				trip.setPrice_list(priceDao.getPricesByTripId(tid));
				
				// 把封装好的Trip对象存放到集合中
				trips.add(trip);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally{
			JDBCUtil.close(pic_rs);
			JDBCUtil.close(t_rs, ps, con);
		}
		
		return trips;
	}

	@Override
	public Trip getTripById(int id) {
		String sql = "SELECT * FROM Trip WHERE id = " + id;
		
		Connection con = JDBCUtil.getConnection();
		PreparedStatement ps = null;
		ResultSet schedule_rs = null;
		ResultSet dates_rs = null;
		ResultSet pic_rs = null;
		ResultSet price_rs = null;
		ResultSet placelist_rs = null;
		ResultSet position_rs = null;
		ResultSet detail_rs = null;
		ResultSet rs = null;
		
		Trip trip = null;
		try {
			ps = con.prepareStatement(sql);
			rs = query(ps);
			
			if(rs.next()){
				trip = Packager.packTrip(rs);
				
				/* 封装并保存出发地对象 */
				City city = cityDao.getCityById(rs.getInt("start_place"));
				if(city != null)
					trip.setStart(city);
				
				/* 封装并保存行程类型对象 */
				Sequence seq = sequenceDao.getSequenceById(rs.getInt("type"));
				if(seq != null)
					trip.setType(seq);
				
				/* 封装行程的计划安排信息 */
				String schedule_sql = "SELECT s.*, t.go_point, t.go_time, t.return_point, t.return_time FROM Schedule s "
						+ "LEFT JOIN Traffic t on s.traffic = t.id "
						+ "WHERE s.trip = " + trip.getId();
				ps = con.prepareStatement(schedule_sql);
				schedule_rs = query(ps);
				if(schedule_rs.next()){
					Schedule schedule = new Schedule();
					schedule.setId(schedule_rs.getInt("id"));
					
					// 封装Traffic对象
					schedule.setTraffic(Packager.packTraffic(schedule_rs));
					
					// 封装日程集合
					String dates_sql = "SELECT * FROM Dates WHERE schedule = " + schedule.getId();
					ps = con.prepareStatement(dates_sql);
					dates_rs = query(ps);
					List<Dates> dlist = new ArrayList<>();
					while(dates_rs.next()){
						Dates d = Packager.packDate(dates_rs);
						dlist.add(d);
					}
					schedule.setDates(dlist);
					
					trip.setSchedule(schedule);
				}
				
				/* 封装并保存图片列表 */
				String pic_sql = "SELECT * FROM TripPicture tp WHERE tp.trip = "+id;
				ps = con.prepareStatement(pic_sql);
				pic_rs = query(ps);
				Set<TripPicture> tplist = new HashSet<>();
				while(pic_rs.next()){
					tplist.add(Packager.packTripPicture(pic_rs));
				}
				trip.setPic_list(tplist);
				
				/* 封装并保存价格列表 */
				String pri_sql = "SELECT * FROM Price p WHERE p.trip = "+trip.getId();
				ps = con.prepareStatement(pri_sql);
				price_rs = query(ps);
				List<Price> plist = new ArrayList<>();
				while(price_rs.next()){
					plist.add(Packager.packPrice(price_rs));
				}
				trip.setPrice_list(plist);
				
				/* 封装并保存景点行程关系对象集合 */
				String placelist_sql = "SELECT * FROM PlaceOnTrip pt WHERE pt.trip = " + trip.getId();
				ps = con.prepareStatement(placelist_sql);
				placelist_rs = query(ps);
				List<PlaceOnTrip> ptlist = new ArrayList<>();
				while(placelist_rs.next()){
					PlaceOnTrip pt = new PlaceOnTrip();
					int pid = placelist_rs.getInt("place");
					pt.setPlace(placeDao.getPlaceById(pid));
					ptlist.add(pt);
				}
				trip.setPlaceontrip_list(ptlist);
				
				/* 封装并保存坐标对象 */
				int position_id = rs.getInt("position");
				String position_sql = "SELECT * FROM Position WHERE id = " + position_id;
				ps = con.prepareStatement(position_sql);
				position_rs = query(ps);
				if(position_rs.next()){
					trip.setPosition(Packager.packPosition(position_rs));
				}
				
				/* 封装并保存详情细节对象 */
				String detail_sql = "SELECT * FROM Detail WHERE trip = " + trip.getId();
				ps = con.prepareStatement(detail_sql);
				detail_rs = query(ps);
				if(detail_rs.next()){
					trip.setDetail(Packager.packDetail(detail_rs));
				}
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally{
			JDBCUtil.close(detail_rs, position_rs, placelist_rs, price_rs, pic_rs, dates_rs, schedule_rs);
			JDBCUtil.close(rs, ps, con);
		}
		
		return trip;
	}
	
	/********************** 提交评论事务的数据库操作【start】 *************************/
	@Override
	public void updateScore(Trip trip, Connection con) {
		String sql = "update trip set good_rate="+trip.getGood_rate()
				+ ", place_score="+trip.getPlace_score()
				+ ", hotel_score="+trip.getHotel_score()
				+ ", service_score="+trip.getService_score()
				+ ", traffic_score="+trip.getTraffic_score()
				+ " where id="+trip.getId();
		PreparedStatement stmt = null;
		try {
			try {
				stmt = con.prepareStatement(sql);
				stmt.execute();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		} finally {
			JDBCUtil.close(stmt);
		}
	}

}
