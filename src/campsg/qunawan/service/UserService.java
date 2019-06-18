package campsg.qunawan.service;

import campsg.qunawan.entity.User;

public interface UserService {


	/**
	 * 检查用户资料修改时，手机，邮箱是否重复
	 * @param phone 用户的手机号
	 * @param email 用户的邮箱
	 * @param user 当前检测的用户
	 * @return 
	 */
	boolean checkPhoneAndEmail(String phone, String email, User user);

}
