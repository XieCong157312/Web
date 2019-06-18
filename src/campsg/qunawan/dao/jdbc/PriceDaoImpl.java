package campsg.qunawan.dao.jdbc;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import campsg.qunawan.dao.PriceDao;
import campsg.qunawan.entity.Price;
import campsg.qunawan.utils.Packager;

public class PriceDaoImpl extends JDBCBase implements PriceDao {

	@Override
	public Price getOneDayPrice(Integer tripId, Date time) {
		String sql = "SELECT * FROM Price WHERE trip = ? AND date = ?";
		
		Connection con = JDBCUtil.getConnection();
		PreparedStatement ps = null;
		ResultSet rs = null;
		
		Price price = null;
		try {
			Object[] param = {tripId, time};
			ps = con.prepareStatement(sql);
			rs = query(ps, param);
			
			if(rs.next()){
				price = Packager.packPrice(rs);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally{
			JDBCUtil.close(rs, ps, con);
		}
		
		return price;
	}
	
	@Override
	public List<Price> getPricesByTripId(Integer tripId) {
		String pri_sql = "SELECT * FROM Price p WHERE p.trip = "+tripId;
		Connection con = JDBCUtil.getConnection();
		PreparedStatement ps = null;
		ResultSet rs = null;

		List<Price> prices = new ArrayList<>();
		try {
			ps = con.prepareStatement(pri_sql);
			rs = query(ps);

			while(rs.next()){
				prices.add(Packager.packPrice(rs));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally{
			JDBCUtil.close(rs, ps, con);
		}
		return prices;
	}

}
