package duanjianhui.assication.repository;

import duanjianhui.assication.entity.Association;
import duanjianhui.assication.entity.Member;
import org.apache.ibatis.annotations.*;

import java.util.List;

/**
 * @author Duanjianhui
 * @create 2020-11-08 17:22
 */
@Mapper
public interface MemberRepository {
    //添加
    @Insert("insert into members(m_name,m_sex,m_email,m_phone,m_age) values(#{m_name},#{m_sex},#{m_email},#{m_phone},#{m_age})")
    public int addMember(Member member);
    //修改
    @Update("update members set m_name=#{m_name},m_sex=#{m_sex},m_phone=#{m_phone},m_age=#{m_age},m_email=#{m_email} where m_id=#{m_id}")
    public int updateMember(Member member);
    //删除
    @Delete("delete from members where m_id=#{m_id}")
    public int deleteMember(Integer m_id);
    //查询
    @Select("select * from members")
    public List<Member> selectMember();
    //查询by id
    @Select("select * from members where m_id=#{m_id}")
    public Member SelectMemberById(Integer m_id);
}
