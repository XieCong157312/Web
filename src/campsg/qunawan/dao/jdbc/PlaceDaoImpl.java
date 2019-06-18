package campsg.qunawan.dao.jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import campsg.qunawan.dao.PlaceDao;
import campsg.qunawan.entity.Place;

public class PlaceDaoImpl extends JDBCBase implements PlaceDao {
	
	@Override
	public List<String> getPagePlacesByType(int id, int start, int maxCount) {
		String sql = "SELECT DISTINCT p.name FROM PlaceOnTrip pt "
				+ "LEFT JOIN Place p ON pt.place = p.id "
				+ "LEFT JOIN Trip t ON pt.trip = t.id "
				+ "WHERE t.type = " + id;
		
		Connection con = JDBCUtil.getConnection();
		PreparedStatement ps = null;
		ResultSet rs = null;
		
		List<String> list = new ArrayList<>();
		
		try {
			ps = con.prepareStatement(sql);
			rs = query(ps, start, maxCount);
			while(rs.next()){
				// 因为首页只需要景点的名称，所以只查了这一个字段
				list.add(rs.getString("name"));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally{
			JDBCUtil.close(rs, ps, con);
		}
		return list;
	}

	@Override
	public List<Place> getPlaceByName(String name) {
		String sql = "SELECT * FROM Place WHERE name = ?";
		
		Connection con = JDBCUtil.getConnection();
		PreparedStatement ps = null;
		ResultSet rs = null;
		
		List<Place> list = new ArrayList<>();
		try {
			ps = con.prepareStatement(sql);
			Object[] param = {name};
			rs = query(ps, param);
			
			Place place = null;
			while(rs.next()){
				place = new Place();
				place.setId(rs.getInt("id"));
				place.setName(name);
				list.add(place);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally{
			JDBCUtil.close(rs, ps, con);
		}
		
		return list;
	}

	@Override
	public Place getPlaceById(int id) {
		String sql = "SELECT * FROM Place WHERE id = " + id;
		
		Connection con = JDBCUtil.getConnection();
		PreparedStatement ps = null;
		ResultSet rs = null;
		
		Place place = null;
		try {
			ps = con.prepareStatement(sql);
			rs = query(ps);
			
			if(rs.next()){
				place = new Place();
				place.setName(rs.getString("name"));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally{
			JDBCUtil.close(rs, ps, con);
		}
		return place;
	}

}
