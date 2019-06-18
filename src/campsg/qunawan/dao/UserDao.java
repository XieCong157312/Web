package campsg.qunawan.dao;

import campsg.qunawan.entity.User;

public interface UserDao {
	/**
	 * 通过邮箱或者电话号码,用户名查询User
	 * 
	 * @param condition
	 *            查询关键字
	 * @return 返回User对象
	 */
	User getUserByCondition(String condition);
	
	/**
	 * 将用户对象存储到数据库
	 * 注册时只需要填写手机号或者邮箱地址
	 * 密码是默认的123456
	 * 所以只需插入这三个字段
	 * @param user
	 */
	void save(User user);

	/**
	 * 更新或保存用户对象
	 * @param user
	 */
	void update(User user);

	/**
	 * 通过用户id查找用户对象
	 * @param id 用户id
	 * @return 用户对象
	 */
	User getUserById(int id);

}