package campsg.qunawan.action;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import campsg.qunawan.dao.jdbc.UserDaoImpl;
import campsg.qunawan.entity.User;
import campsg.qunawan.service.LoginService;
import campsg.qunawan.service.impl.LoginServiceImpl;
import campsg.qunawan.utils.Utils;

public class LoginAction extends HttpServlet {

	private static final long serialVersionUID = 2149515480031549266L;
	
	private LoginService service = new LoginServiceImpl();

	
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		// 用户提交的手机或邮箱
		String uid = request.getParameter("name");
		// 用户的个人密码
		String pwd = request.getParameter("password");
		
		String re = request.getParameter("re");

		
		if(!service.isNormalCode(request)){
			request.setAttribute("message", "验证码不正确！");
			request.getRequestDispatcher("/login.jsp").forward(request, response);
			return;
		}
		
		
		UserDaoImpl userDaoImpl = new UserDaoImpl();
		User user = userDaoImpl.getUserByCondition(uid);
		
		if (user == null || !user.getPassword().equals(Utils.toMD5(pwd))) {
			request.setAttribute("message", "用户名或密码错误！");
			request.getRequestDispatcher("/login.jsp").forward(request, response);
			return;
		}

		//获取HttpSession对象
		HttpSession session = request.getSession();
		
		//存储登录用户信息
		session.setAttribute("user", user);
		
		if(re != null && !"".equals(re)) {
			response.sendRedirect(re);
			return;
		}
		
		response.sendRedirect("index.jhtml");
		
	}
	
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
