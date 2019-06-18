package campsg.qunawan.globle;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

/**
 * 全球变量，用于处理评论批量上传图片时存储图片用
 */
public class Globle {

	private static HashMap<Integer, List<byte[]>> comPicCache = new HashMap<Integer, List<byte[]>>();


	/**
	 * 上传一张图
	 * @param uuid 登陆用户ID
	 * @param pic 需上传图片的二进制数据
	 */
	public static void uploadPics(Integer uuid, byte[] pic) {
		List<byte[]> pics = comPicCache.get(uuid);
		if (pics == null) {
			pics = new ArrayList<byte[]>();
		}
		pics.add(pic);
		comPicCache.put(uuid, pics);
	}

	/**
	 * 获取某用户全部图片数据
	 */
	public static List<byte[]> getPics(Integer uuid) {
		if (comPicCache == null)
			return null;
		return comPicCache.get(uuid);
	}

	/**
	 * 清除某用户全部图片数据
	 */
	public static void clear(Integer uuid) {
		if (comPicCache == null)
			return;
		comPicCache.remove(uuid);
	}

	public static HashMap<Integer, List<byte[]>> getComPicCache() {
		return comPicCache;
	}

	public static void setComPicCache(HashMap<Integer, List<byte[]>> comPicCache) {
		Globle.comPicCache = comPicCache;
	}


	

	/**
	 * 设置map集合，存放用户已登录的session信息 Map泛型String代表不同用户的标识符userId
	 * Map的泛型HttpSession代表当前用户的会话
	 */
	public static Map<String, HttpSession> loginSessionMap = new HashMap<String, HttpSession>();
}
