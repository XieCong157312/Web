package campsg.qunawan.service.impl;

import campsg.qunawan.dao.UserDao;
import campsg.qunawan.dao.jdbc.UserDaoImpl;
import campsg.qunawan.entity.User;
import campsg.qunawan.service.UserService;

/**
 * 用户表的Service类
 */
public class UserServiceImpl implements UserService {

	private UserDao userDao = new UserDaoImpl();

	/**
	 * 验证手机和邮箱的唯一性
	 * 
	 */
	@Override
	public boolean checkPhoneAndEmail(String phone, String email, User user) {
		if (!phone.equals(user.getPhone()))
			if (userDao.getUserByCondition(phone)!=null)
				return false;

		if (!email.equals(user.getEmail()))
			if (userDao.getUserByCondition(email)!=null)
				return false;

		return true;
	}

}
