package campsg.qunawan.service.impl;

import javax.servlet.http.HttpServletRequest;

import campsg.qunawan.globle.Constants;
import campsg.qunawan.service.LoginService;

public class LoginServiceImpl implements LoginService {

	@Override
	public boolean isNormalCode(HttpServletRequest request) {
		String code = request.getParameter("code");
		
		if(code == null)
			return false;
		
		String nCode = (String)request.getSession().getAttribute(Constants.CHECK_NUMBER_NAME);
		
		if(nCode == null)
			return false;
		
		if(!nCode.equalsIgnoreCase(code)){
			return false;
		}
		return true;
	}

	@Override
	public boolean isNormalLogin(String uid, String pwd) {
		return true;
	}

}
