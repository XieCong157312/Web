package campsg.qunawan.filter;

import java.io.IOException;
import java.util.regex.Pattern;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import campsg.qunawan.entity.User;

/**
 * 用户登陆状态维护的过滤器
 */
public class UserFilter implements Filter {

	private String pass = null;

	@Override
	public void init(FilterConfig config) throws ServletException {
		pass = config.getInitParameter("pass");
	}

	/*
	 * 当前过滤器的验证业务
	 */
	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException,
			ServletException {
		// 转换HttpServletRequest的类型
		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse res = (HttpServletResponse) response;
		HttpSession session = req.getSession();

		String uri = req.getRequestURI();

		// **************************登录有效性验证代码*****************************//
		// 如果URL属于免验证，则通过验证
		if (isPermit(req)) {
			chain.doFilter(req, res);
			return;
		}
		// 隐私资源需要判断用户是否登录，没有登录，跳转到登录页面
		User user = (User) session.getAttribute("user");
		if (user == null) {
			res.sendRedirect("login.jsp?re=" + uri);
			return;
		}
		// ****************************************************************//

		
		
		
		// ************************单态登录验证代码*****************************//

		// ****************************************************************//

		chain.doFilter(req, res);
	}


	private boolean isPermit(HttpServletRequest request) {
		if (pass == null)
			return false;

		String url = request.getRequestURI();
		String[] permitParams = pass.split("[;]");

		for (String permit : permitParams) {
			if (isURLPassable(request.getContextPath() + permit, url, request))
				return true;
		}
		return false;
	}

	private boolean isURLPassable(String permit, String url, HttpServletRequest request) {
		try {
			String reg = "";
			reg = "^" + permit + "$";
			Pattern p = Pattern.compile(reg);
			return p.matcher(url).matches();
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public void destroy() {
	}
}
