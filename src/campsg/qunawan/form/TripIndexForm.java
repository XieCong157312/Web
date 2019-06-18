package campsg.qunawan.form;

/**
 * 
 * 首页显示一个
 * 
 * @author admin
 *
 */
public class TripIndexForm {

	// 旅游产品的ID
	private int id;

	// 旅游产品主图的ID
	private int picture_id;

	// 旅游产品的小标题
	private String s_title;

	// 旅游产品的最低价格
	private Float min_price;

	// 图片的类型（头像、旅游、评论）
	private int picture_type = 1;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getPicture_id() {
		return picture_id;
	}

	public void setPicture_id(int picture_id) {
		this.picture_id = picture_id;
	}

	public String getS_title() {
		return s_title;
	}

	public void setS_title(String s_title) {
		this.s_title = s_title;
	}

	public Float getMin_price() {
		return min_price;
	}

	public void setMin_price(Float min_price) {
		this.min_price = min_price;
	}

	public int getPicture_type() {
		return picture_type;
	}

	public void setPicture_type(int picture_type) {
		this.picture_type = picture_type;
	}

}
