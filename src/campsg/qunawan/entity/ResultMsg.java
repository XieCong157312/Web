package campsg.qunawan.entity;

import java.io.Serializable;

/**
 * 处理结果信息
 */
public class ResultMsg implements Serializable {

	/**
	 * 成功
	 */
	public final static String SUCCESS = "success";
	/**
	 * 失败
	 */
	public final static String FAIL = "fail";

	/**
	 * 
	 */
	private static final long serialVersionUID = 6668983759227296700L;

	/**
	 * 构造方法
	 * 
	 * @param status
	 * @param msg
	 */
	public ResultMsg(String status, String msg) {
		this.status = status;
		this.msg = msg;
	}

	private String status;
	private String msg;

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	@Override
	public String toString() {
		return "{\"status\":\"" + this.status + "\", \"msg\":\"" + this.msg + "\"}";
	}

}
