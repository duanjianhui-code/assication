package duanjianhui.assication.repository;

import duanjianhui.assication.entity.Association;
import org.apache.ibatis.annotations.*;

import java.util.List;

/**
 * @author Duanjianhui
 * @create 2020-11-06 21:24
 */
@Mapper
public interface AssociationRepository {
    //添加社团
    @Insert("insert into associations(as_name,as_person,as_phone,as_email,as_time) values(#{as_name},#{as_person},#{as_phone},#{as_email},#{as_time})")
    public int addAssociation(Association association);
    //修改
    @Update("update associations set as_name=#{as_name},as_person=#{as_person},as_phone=#{as_phone},as_email=#{as_email},as_time=#{as_time} where as_id=#{as_id}")
    public int updateAssociation(Association association);
    //删除
    @Delete("delete from associations where as_id=#{id}")
    public int deleteAssociation(Integer id);
    //查询
    @Select("select * from associations")
    public List<Association> selectAssociation();
    //查询by id
    @Select("select * from associations where as_id=#{id}")
    public Association SelectAssociationById(Integer id);

}
