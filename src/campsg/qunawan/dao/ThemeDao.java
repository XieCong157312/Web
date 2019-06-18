package campsg.qunawan.dao;

import java.util.List;

import campsg.qunawan.entity.Theme;

public interface ThemeDao {

	/**
	 * 通过主题名称得到Theme对象集合
	 * 
	 * @param name
	 *            主题名称
	 * @return Theme对象
	 */
	List<Theme> getThemeByName(String name);
	
	/**
	 * 根据行程类型获取主题名称列表
	 * @param id 行程类型id
	 * @param start 分页开始索引
	 * @param maxCount 每页最大值
	 * @return 分页主题名称列表
	 */
	List<String> getPageThemesByType(int id, int start, int maxCount);
	
	/**
	 * 通过主题id得到Theme对象
	 * @param id 主题id值
	 * @return Theme对象
	 */
	Theme getThemesByTripId(int id);
	
}
