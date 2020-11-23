package duanjianhui.assication.serviceimpl;

import duanjianhui.assication.entity.Association;
import duanjianhui.assication.entity.Member;
import duanjianhui.assication.repository.MemberRepository;
import duanjianhui.assication.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Duanjianhui
 * @create 2020-11-08 17:32
 */
@Service
public class MemberServiceImpl  implements MemberService {
    @Autowired
    MemberRepository memberRepository;
    @Override
    public int addMember(Member member) {
        return memberRepository.addMember(member);
    }

    @Override
    public int updateMember(Member member) {
        return memberRepository.updateMember(member);
    }

    @Override
    public int deleteMember(Integer m_id) {
        return memberRepository.deleteMember(m_id);
    }

    @Override
    public List<Member> selectMember() {
        return memberRepository.selectMember();
    }

    @Override
    public Member SelectMemberById(Integer m_id) {
        return memberRepository.SelectMemberById(m_id);
    }
}
