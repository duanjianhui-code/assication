package duanjianhui.assication.repository;

import duanjianhui.assication.entity.Activity;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

/**
 * @author Duanjianhui
 * @create 2020-11-11 10:51
 */
@Mapper
public interface ActivityRepository {
    @Select("select ac_id,ac_title,ac_person,ac_money,ac_remarks,ac_status from activity")
    public List<Activity> selectAll();
    //查询by id
    @Select("select * from activity where ac_id=#{ac_id}")
    public Activity SelectActivityById(Integer ac_id);
    @Update("update activity set ac_status='通过' where ac_id=#{ac_id}")
    public int updataStatus(Integer ac_id);
    @Update("update activity set ac_status='不通过' where ac_id=#{ac_id}")
    public int updataStatus1(Integer ac_id);
    @Delete("delete from activity where ac_id=#{ac_id}")
    public int deleteActivity(Integer ac_id);
}
