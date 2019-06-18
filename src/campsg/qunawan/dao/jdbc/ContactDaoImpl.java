package campsg.qunawan.dao.jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import campsg.qunawan.dao.ContactDao;
import campsg.qunawan.entity.Contact;
import campsg.qunawan.entity.User;
import campsg.qunawan.utils.Packager;

public class ContactDaoImpl extends JDBCBase implements ContactDao {

	@Override
	public void delete(Integer contact) {
		String sql = "delete from contact where id="+contact;
		saveOrUpdateOrDelete(sql, null);
	}
	
	/**
	 * 本函数服务于联系人分页查询页面，没有用到Contact的关联表
	 */
	@Override
	public List<Contact> getAllContactPerPage(Integer userId, int page, int maxResult) {
		String sql = "select * from Contact where user=" + userId;
		int firstResult = (page - 1) * maxResult;
		
		Connection con = JDBCUtil.getConnection();
		PreparedStatement ps = null;
		ResultSet rs = null;
		
		List<Contact> contacts = new ArrayList<>();
		try {
			/**
			 * 	1.TYPE_FORWORD_ONLY,只可向前滚动；
			 * 	2.TYPE_SCROLL_INSENSITIVE,双向滚动，但不及时更新，就是如果数据库里的数据修改过，并不在ResultSet中反应出来。
			 *	3.TYPE_SCROLL_SENSITIVE，双向滚动，并及时跟踪数据库的更新,以便更改ResultSet中的数据。 
			 */
			ps = con.prepareStatement(sql, ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
			rs = query(ps, firstResult, maxResult);
			while(rs.next()){
				contacts.add(Packager.packContact(rs));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally{
			JDBCUtil.close(rs, ps, con);
		}
		return contacts;
	}
	
	@Override
	public List<Contact> getAllContactByUser(int id) {
		String sql = "SELECT * FROM Contact WHERE user = "+ id;
		
		Connection con = JDBCUtil.getConnection();
		PreparedStatement ps = null;
		ResultSet rs = null;
		
		List<Contact> contacts = new ArrayList<>();
		try {
			/**
			 * 	1.TYPE_FORWORD_ONLY,只可向前滚动；
			 * 	2.TYPE_SCROLL_INSENSITIVE,双向滚动，但不及时更新，就是如果数据库里的数据修改过，并不在ResultSet中反应出来。
			 *	3.TYPE_SCROLL_SENSITIVE，双向滚动，并及时跟踪数据库的更新,以便更改ResultSet中的数据。 
			 */
			ps = con.prepareStatement(sql, ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
			rs = query(ps);
			while(rs.next()){
				contacts.add(Packager.packContact(rs));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally{
			JDBCUtil.close(rs, ps, con);
		}
		return contacts;
	}

	@Override
	public Contact getContactById(int id) {
		String sql = "SELECT * FROM Contact c "
				+ "LEFT JOIN User u ON c.user = u.id "
				+ "WHERE c.id = " + id;
		
		Connection con = JDBCUtil.getConnection();
		PreparedStatement ps = null;
		ResultSet rs = null;
		
		Contact contact = null;
		try {
			ps = con.prepareStatement(sql);
			rs = query(ps);
			
			if(rs.next()){
				contact = Packager.packContact(rs);
				contact.setUser(new User(rs.getInt("user")));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally{
			JDBCUtil.close(rs, ps, con);
		}
		return contact;
	}

	@Override
	public Integer updateContact(Contact contact) {
		return updateContact(null, contact);
	}

	@Override
	public void saveContact(Contact contact, Integer userId) {
		String sql = "INSERT INTO Contact(user,name,phone,sex,email,cardno,birthday) "
				+ "VALUES(?,?,?,?,?,?,?)";
		Object[] params = {
				userId,
				contact.getName(),
				contact.getPhone(),
				contact.isSex(),
				contact.getEmail(),
				contact.getCardno(),
				contact.getBirthday()};
		save(sql, params);
	}
	
	@Override
	public Integer saveContact(Connection con, Contact contact) {
		String sql = "INSERT INTO Contact(user,name,phone,sex,email,cardno,birthday) "
				+ "VALUES(?,?,?,?,?,?,?)";
		Object[] params = {
				contact.getUser().getId(),
				contact.getName(),
				contact.getPhone(),
				contact.isSex(),
				contact.getEmail(),
				contact.getCardno(),
				contact.getBirthday()};
		return save(sql, params, con);
	}
	
	@Override
	public Integer updateContact(Connection con, Contact contact) {
		String sql = "UPDATE Contact SET "
				+ "user=?,"
				+ "name=?,"
				+ "phone=?,"
				+ "sex=?,"
				+ "email=?,"
				+ "cardno=?,"
				+ "birthday=? "
				+ "WHERE id=?";
		Object[] params = {
				contact.getUser().getId(),
				contact.getName(),
				contact.getPhone(),
				contact.isSex(),
				contact.getEmail(),
				contact.getCardno(),
				contact.getBirthday(),
				contact.getId()};
		if(con != null)
			save(sql, params, con);
		else
			save(sql, params);
		return contact.getId();
	}

	@Override
	public Integer getContactByUser(Integer userId) {
		String sql = "select count(*) from contact where user="+userId;
		return getCount(sql);
	}

}
