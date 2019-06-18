package campsg.qunawan.action;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class LogoutAction extends HttpServlet {

	private static final long serialVersionUID = 2149515480031549266L;

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		//强制销毁Session
		request.getSession().removeAttribute("user");
		
		request.getSession().removeAttribute("message");
		
		//跳转到登录页面
		response.sendRedirect("login.jsp");
	}
	
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
