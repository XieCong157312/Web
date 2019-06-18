package campsg.qunawan.dao.jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import campsg.qunawan.dao.ThemeDao;
import campsg.qunawan.entity.Theme;

public class ThemeDaoImpl extends JDBCBase implements ThemeDao {

	@Override
	public List<String> getPageThemesByType(int id, int start, int maxCount) {
		Connection con = JDBCUtil.getConnection();
		PreparedStatement ps = null;
		ResultSet rs = null;
		
		List<String> names = new ArrayList<>();
		
		String sql = "SELECT DISTINCT th.name FROM ThemeOnTrip tt "
				+ "LEFT JOIN Theme th ON tt.theme = th.id "
				+ "LEFT JOIN Trip t ON tt.trip = t.id "
				+ "WHERE t.type = " + id;
		try {
			ps = con.prepareStatement(sql);
			rs = query(ps, start, maxCount);
			while(rs.next()){
				// 因为首页只需要主题的名称，所以只查了这一个字段
				names.add(rs.getString("name"));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally{
			JDBCUtil.close(rs, ps, con);
		}
		return names;
	}
	
	@Override
	public List<Theme> getThemeByName(String name) {
		String sql = "SELECT * FROM Theme WHERE name = ?";
		
		Connection con = JDBCUtil.getConnection();
		PreparedStatement ps = null;
		ResultSet rs = null;
		
		List<Theme> themes = new ArrayList<>();
		try {
			ps = con.prepareStatement(sql);
			Object[] param = {name};
			rs = query(ps, param);
			
			Theme theme = null;
			while(rs.next()){
				theme = new Theme();
				theme.setId(rs.getInt("id"));
				theme.setName(name);
				themes.add(theme);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally{
			JDBCUtil.close(rs, ps, con);
		}
		return themes;
	}

	@Override
	public Theme getThemesByTripId(int id) {
		String sql = "SELECT * FROM Theme WHERE id = " + id;
		
		Connection con = JDBCUtil.getConnection();
		PreparedStatement ps = null;
		ResultSet rs = null;
		
		Theme theme = null;
		try {
			ps = con.prepareStatement(sql);
			rs = query(ps);
			
			if(rs.next()){
				theme = new Theme();
				theme.setName(rs.getString("name"));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally{
			JDBCUtil.close(rs, ps, con);
		}
		return theme;
	}

}
