package campsg.qunawan.utils;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Set;

import campsg.qunawan.entity.TripPicture;

/**
 * 工具类，提供一些静态的功能函数
 */
public class Utils {
	

	/**
	 * 将字符串转换成java.sql.Date类型
	 * 
	 * @param ymd
	 *            获取到的表单字符串
	 * @return 返回sql的Date
	 */
	public static final java.sql.Date stringToDate(String ymd) {
		java.sql.Date sqlDate = null;
		try {
			SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
			java.util.Date date = sdf.parse(ymd);
			sqlDate = new java.sql.Date(date.getTime());
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return sqlDate;
	}
	
	public static void initTripPicture(Set<TripPicture> pictures, String basePath) {
		for (TripPicture tp : pictures) {
			String path = basePath + "image_cache\\" + tp.getName();
			if (!new File(path).exists()) {
				Utils.getFile(tp.getData(), path);
			}
		}
	}
	
	/**
	 * 将字符串进行MD5加密， 主要用于密码部分
	 */
	public static String toMD5(String data) {
		if (data == null)
			return null;

		try {
			MessageDigest md = MessageDigest.getInstance("MD5");

			// 加密转换
			md.update(data.getBytes());
			String result = new BigInteger(1, md.digest()).toString(16);

			return result;

		} catch (NoSuchAlgorithmException e) {
			return null;
		}
	}

	/**
	 * 根据byte数组，生成文件
	 */
	public static void getFile(byte[] bfile, String filePath) {
		BufferedOutputStream bos = null;
		FileOutputStream fos = null;
		File file = null;
		try {
			File dir = new File(filePath);
			if (!dir.exists() && dir.isDirectory()) {// 判断文件目录是否存在
				dir.mkdirs();
			}
			file = new File(filePath);
			fos = new FileOutputStream(file);
			bos = new BufferedOutputStream(fos);
			bos.write(bfile);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (bos != null) {
				try {
					bos.close();
				} catch (IOException e1) {
					e1.printStackTrace();
				}
			}
			if (fos != null) {
				try {
					fos.close();
				} catch (IOException e1) {
					e1.printStackTrace();
				}
			}
		}
	}

	
}
