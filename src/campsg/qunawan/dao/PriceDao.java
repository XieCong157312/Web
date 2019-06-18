package campsg.qunawan.dao;

import java.sql.Date;
import java.util.List;

import campsg.qunawan.entity.Price;

public interface PriceDao {

	/**
	 * 根据行程和日期获取当天的价格
	 * @param tripId 行程id
	 * @param time 日期
	 * @return 当天的价格对象
	 */
	Price getOneDayPrice(Integer tripId, Date time);
	
	/**
	 * 根据行程id获取价格集
	 */
	List<Price> getPricesByTripId(Integer tripId);
}
