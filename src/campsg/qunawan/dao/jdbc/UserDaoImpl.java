package campsg.qunawan.dao.jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import campsg.qunawan.dao.CityDao;
import campsg.qunawan.dao.ContactDao;
import campsg.qunawan.dao.UserDao;
import campsg.qunawan.entity.City;
import campsg.qunawan.entity.Contact;
import campsg.qunawan.entity.User;
import campsg.qunawan.utils.Packager;

public class UserDaoImpl extends JDBCBase implements UserDao {
	
	private CityDao cityDao = new CityDaoImpl() ;

	private ContactDao contactDao = new ContactDaoImpl() ;

	@Override
	public User getUserByCondition(String condition) {
		Connection con = JDBCUtil.getConnection();
		PreparedStatement ps = null;
		ResultSet rs = null;
		User user = null;
		
		String sql = "SELECT * FROM User u WHERE u.phone = ? or u.email = ?";
		try {
			ps = con.prepareStatement(sql);
			Object[] param = {condition, condition};
			rs = query(ps, param);
			if(rs.next()){
				user = Packager.packUser(rs);
				City city = new CityDaoImpl().getCityById(rs.getInt("city"));
				user.setCity(city);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally{
			JDBCUtil.close(rs, ps, con);
		}
		return user;
	}

	@Override
	public void save(User user) {
		String sql = "INSERT INTO User(phone,email,password) VALUES(?,?,?)";
		Object[] param = {user.getPhone(), user.getEmail(), user.getPassword()};
		saveOrUpdateOrDelete(sql, param);
	}

	@Override
	public void update(User user) {
		StringBuilder sql =new StringBuilder( "update user set phone=?,email=?,sex=?");
		ArrayList<Object> pList=new ArrayList<Object>();
		pList.add(user.getPhone());
		pList.add(user.getEmail());
		pList.add(user.getSex());
		if(user.getPassword()!=null){
			sql.append(",password=?");
			pList.add(user.getPassword());
		}
		if(user.getName()!=null){
			sql.append(",name=?");
			pList.add(user.getName());
		}
		if(user.getImg_path()!=null){
			sql.append(",img_path=?");
			pList.add(user.getImg_path());
		}
		if(user.getReal_name()!=null){
			sql.append(",real_name=?");
			pList.add(user.getReal_name());
		}
		if(user.getBirthday()!=null){
			sql.append(",birthday=?");
			pList.add(user.getBirthday());
		}
		if(user.getCity()!=null){
			sql.append(",city=?");
			pList.add(user.getCity().getId());
		}
		sql.append(" where id=?");
		pList.add(user.getId());
		
		Object[] param=pList.toArray();
		saveOrUpdateOrDelete(sql.toString(), param);
	}
	
	@Override
	public User getUserById(int id) {
		Connection con = JDBCUtil.getConnection();
		PreparedStatement ps = null;
		ResultSet rs = null;
		
		User user = null;
		String sql = "SELECT * FROM User WHERE id = " + id;
		try {
			ps = con.prepareStatement(sql);
			rs = query(ps);
			if(rs.next()){
				user = Packager.packUser(rs);
				City city = cityDao.getCityById(rs.getInt("city"));
				List<Contact> contacts = contactDao.getAllContactByUser(id);
				user.setCity(city);
				user.setContact(contacts);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally{
			JDBCUtil.close(rs, ps, con);
		}
		return user;
	}
}
