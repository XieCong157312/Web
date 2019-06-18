package campsg.qunawan.dao;

import java.sql.Connection;
import java.util.List;
import campsg.qunawan.entity.Trip;
public interface TripDao {

	/**
	 * 通过行程类型查找分页行程列表
	 * @param id 行程类型id
	 * @param start 分页开始索引
	 * @param maxCount 每页最大值
	 * @return 分页行程列表
	 */
	List<Trip> getPageTripsByType(int id, int start, int maxCount);
	
	/**
	 * 通过id查找行程
	 * @param id 行程id
	 * @return Trip对象
	 */
	Trip getTripById(int id);

	/**
	 *  更新行程分数
	 */
	void updateScore(Trip trip, Connection con);
}
