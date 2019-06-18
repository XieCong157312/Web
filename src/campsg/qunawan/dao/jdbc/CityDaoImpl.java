package campsg.qunawan.dao.jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import campsg.qunawan.dao.CityDao;
import campsg.qunawan.entity.City;
import campsg.qunawan.utils.Packager;

public class CityDaoImpl extends JDBCBase implements CityDao {

	@Override
	public List<City> getAllCityByParentId(int id) {
		return queryCitys("select * from City where parent_id=" + id);
	}

	@Override
	public List<City> getAllProvinces() {
		return queryCitys("select * from City where type=1");
	}

	@Override
	public List<City> getCityByName(String name) {
		String sql = "select * from city where name = ?";
		Object[] param = {name};
		return queryCitys(sql, param);
	}

	@Override
	public City getCityById(int id) {
		String sql = "SELECT * FROM City WHERE id = " + id;
		
		Connection con = JDBCUtil.getConnection();
		PreparedStatement ps = null;
		ResultSet rs = null;
		
		City city = null;
		try {
			ps = con.prepareStatement(sql);
			rs = query(ps);
			
			if(rs.next()){
				city = Packager.packCity(rs);
				
				Integer pid = rs.getInt("parent_id");
				if(pid != 0)
					city.setParentCity(getCityById(pid));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally{
			JDBCUtil.close(rs, ps, con);
		}
		return city;
	}
	
	/**
	 *  查询并封装城市列表
	 */
	private List<City> queryCitys(String sql, Object[] param) {
		Connection con = JDBCUtil.getConnection();
		PreparedStatement ps = null;
		ResultSet rs = null;
		
		List<City> citys = new ArrayList<>();
		try {
			ps = con.prepareStatement(sql);
			rs = query(ps, param);
			
			while(rs.next()){
				City city = Packager.packCity(rs);
				
				Integer pid = rs.getInt("parent_id");
				if(pid != 0)
					city.setParentCity(getCityById(pid));
				
				citys.add(Packager.packCity(rs));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally{
			JDBCUtil.close(rs, ps, con);
		}
		return citys;
	}
	
	/**
	 *  查询并封装城市列表
	 */
	private List<City> queryCitys(String sql) {
		return queryCitys(sql, null);
	}
}
