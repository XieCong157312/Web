package campsg.qunawan.dao.jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import campsg.qunawan.dao.SequenceDao;
import campsg.qunawan.entity.Sequence;
import campsg.qunawan.utils.Packager;

public class SequenceDaoImpl extends JDBCBase implements SequenceDao {

	@Override
	public Sequence getSeqByValue(String value) {
		String sql = "SELECT * FROM Sequence WHERE value = ?";
		Object[] param = {value};
		return querySequence(sql, param);
	}

	@Override
	public Sequence getSeqByKeyAndType(String key, String type){
		String sql = "SELECT * FROM Sequence WHERE keying = '" + key + "' AND type = '" + type + "'";
		return querySequence(sql);
	}

	@Override
	public Sequence getSequenceById(int id) {
		String sql = "SELECT * FROM Sequence WHERE id = " + id;
		return querySequence(sql);
	}
	
	/**************************** 私有函数区域【start】 ****************************/
	private Sequence querySequence(String sql, Object[] param) {
		Connection con = JDBCUtil.getConnection();
		PreparedStatement ps = null;
		ResultSet rs = null;
		
		Sequence seq = null;
		try {
			ps = con.prepareStatement(sql);
			rs = query(ps, param);
			
			if(rs.next()){
				seq = Packager.packSequence(rs);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally{
			JDBCUtil.close(rs, ps, con);
		}
		return seq;
	}
	
	private Sequence querySequence(String sql) {
		return querySequence(sql, null);
	}
	/**************************** 私有函数区域【end】 ****************************/
}
