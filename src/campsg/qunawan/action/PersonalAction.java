package campsg.qunawan.action;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import campsg.qunawan.dao.CityDao;
import campsg.qunawan.dao.jdbc.CityDaoImpl;
import campsg.qunawan.entity.City;

/**
 * 个人信息编辑的Action
 */
public class PersonalAction extends HttpServlet {

	private static final long serialVersionUID = -4483154013667377726L;

	
	private CityDao cityDao = new CityDaoImpl();
	

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		String type = request.getParameter("type");

		// 页面初始化
		if (type == null || "init".equals(type)) {
			List<City> provinces = cityDao.getAllProvinces();
			request.getSession().setAttribute("provinces", provinces);
			request.getRequestDispatcher("/personal.jsp").forward(request, response);
			return;
		}

	}

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
