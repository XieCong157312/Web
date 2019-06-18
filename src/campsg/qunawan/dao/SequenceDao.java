package campsg.qunawan.dao;

import campsg.qunawan.entity.Sequence;

public interface SequenceDao {

	/**
	 * 根据序列值获得序列对象
	 * 
	 * @param value 序列值
	 * @return Sequence 对象
	 */
	Sequence getSeqByValue(String value);
	
	/**
	 * 通过Sequence的type和keying值获取Sequence对象
	 * 
	 * @param key 
	 * @param type 
	 * @return Sequence
	 */
	Sequence getSeqByKeyAndType(String key, String type);
	
	/**
	 * 通过Sequence的id获取Sequence对象
	 * @param id id值
	 * @return Sequence对象
	 */
	Sequence getSequenceById(int id);
	
}
