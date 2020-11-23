package duanjianhui.assication.repository;

import duanjianhui.assication.entity.Admin;
import org.apache.ibatis.annotations.Insert;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Component;


/**
 * @author Duanjianhui
 * @create 2020-11-04 22:23
 */
@Mapper
public interface AdminRepository {
    //注册
    @Insert("insert into admin(username,password) values(#{username},#{password})")
    public int register(Admin admin);
    //登录
    @Select("select * from admin where username=#{username} and password=#{password}")
    public Admin login(Admin admin);
    //修改
    @Update("update admin set username=#{username},password=#{password} where id=#{id}")
    public int updateinfo(Admin admin);
}
