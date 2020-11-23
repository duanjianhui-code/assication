package duanjianhui.assication.repository;

import duanjianhui.assication.entity.DataModel;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

/**
 * @author Duanjianhui
 * @create 2020-11-11 21:17
 */
@Mapper
public interface DataRepository {
    @Update("update visiters set visit_num=visit_num+1 ")
    public int visit_add();

    @Update("update visiters set download_num=download_num+1 ")
    public int download_add();

    @Update("update visiters set member=member+1 ")
    public int member_add();

    @Select("select * from visiters")
    public DataModel selectData();
}
