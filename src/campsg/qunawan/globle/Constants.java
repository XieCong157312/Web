package campsg.qunawan.globle;


/**
 * 常量类，主要用于管理一些常量参数
 */
public class Constants {

	/**
	 * session中的用户id
	 */
	public static String USER_IN_SESSION = "user";
	/**
	 * session中的用户pic
	 */
	public static String USER_PIC = "ispic";
	/**
	 * 验证码
	 */
	public static String CHECK_NUMBER_NAME = "identify_code";
	/**
	 * 错误提示信息
	 */
	public static String ERROR= "err_msg";

	/**
	 * 评论信息异常提示
	 */
	public static String COMMENT_INFO = "comment_info";

	/**
	 * session的搜索页信息实例
	 */
	public static String SEARCH_BEAN = "s_bean";
	
	/**
	 * session的搜索列表
	 */
	public static String SEARCH_LIST = "t_list";

	/**
	 * 产品详情中一页显示的评论数量
	 */
	public static int COMMENT_DETAIL_MAX= 5;

	/**
	 * 登陆跳转成功的链接
	 */
	public static String OK_URL = "campsg.qunawan.utils.Constant.ok_url";

	/**
	 * 登陆跳转失败的链接
	 */
	public static String ERR_URL = "campsg.qunawan.utils.Constant.err_url";

	/**
	 * 联系人列表一页最大数量
	 */
	public static final int CONTACT_MAX = 10;

	/**
	 * 操作成功的Ajax响应字符串
	 */
	public static final String OP_SUCCESS = "success";
	/**
	 * 操作失败的Ajax响应字符串
	 */
	public static final String OP_FAIL = "fail";

	/**
	 * 首页用于查询热推行程的类型字符串
	 */
	public static String[] TRIP_TYPE = { "自驾游", "国内游", "出境游" };

	/**
	 * 首页用于显示行程列表的Map
	 */
	public static String INDEX_TRIP_MAP = "itemMap";

	/**
	 * 首页用于显示景点列表的Map
	 */
	public static String INDEX_PLACE_MAP = "placeMap";

	/**
	 * 首页用于显示主题列表的Map
	 */
	public static String INDEX_THEME_MAP = "themeMap";

	// 评论单页最大数
	public static int COMMENT_MAX = 3;

	// 订单单页最大数
	public static int ORDER_MAX = 4;

	// 当前订单状态为待付款的标识符
	public static String WAIT_PAY_STATE = "0";
	// 当前订单状态为待评价的标识符
	public static String WAIT_COMMENT_ORDER_STATE = "3";
	// 当前订单状态为已完成的标识符
	public static String COMMENTED_ORDER_STATE = "4";

	// sequence中序列类型
	public static String ORDER_TYPE = "order_type";

	// 紧急联系人标识符
	public static Integer EM_CONTACT = 0;
	// 游玩人标识符
	public static Integer PL_CONTACT = 1;

	// 个人评论初始化操作标识符
	public static String COMMENT_INIT = "init";
	// 获取待评论订单操作标识符
	public static String COMMENT_GET_WAIT_COMMENTS = "getWaitComments";
	// 获取已评论集合操作标识符
	public static String COMMENT_GET_FINISH_COMMENT = "getFinishComment";
	// 提交评论操作标识符
	public static String COMMENT_SUBMIT_COMMENT = "submitComment";
	/**
	 * 联系人中的紧急联系人，跟订单一对一
	 */
	public static Integer CONTACT_FOR_URGENT = 0;
	/**
	 * 联系人中的游玩人，跟订单一对多
	 */
	public static Integer CONTACT_FOR_PLAY = 1;

	/**
	 * 访问首页的标识字符串
	 */
	public static String INDEX_PAGE = "index.jsp";

	/**
	 * 访问搜索页的标识字符串
	 */
	public static String SEARCH_PAGE = "search.jsp";

	/**
	 * 访问旅游详情页的标识字符串
	 */
	public static String TRIP_DETAIL_PAGE = "trip_detail.jsp";

	/**
	 * 保存在session中的用户活跃时长统计
	 */
	public static String ACCESS_RECORD_IN_SESSION = "accessList";
	
	/**
	 * 旅游详情页中是否操作过 “赞、踩” 的cookie标识
	 */
	public static String IS_USEFULL_FLAG = "-1";
	
	
	/**
	 * 保存在ServletContext中的用户列表
	 */
	public static String ONLINE_USERS = "campsg.qunawan.listener.onLineListener.Map";
	
}
