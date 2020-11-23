package duanjianhui.assication.service;

import duanjianhui.assication.entity.Association;
import duanjianhui.assication.entity.Member;

import java.util.List;

/**
 * @author Duanjianhui
 * @create 2020-11-08 17:30
 */
public interface MemberService {
    public int addMember(Member member);
    //修改
    public int updateMember(Member member);
    //删除
    public int deleteMember(Integer m_id);
    //查询
    public List<Member> selectMember();
    //查询by id
    public Member SelectMemberById(Integer m_id);
}
