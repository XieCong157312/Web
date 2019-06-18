package campsg.qunawan.service;

import javax.servlet.http.HttpServletRequest;

public interface LoginService {

	public boolean isNormalCode(HttpServletRequest request);
	
	public boolean isNormalLogin(String uid,String pwd);
}
