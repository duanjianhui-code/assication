package duanjianhui.assication.controller;


import duanjianhui.assication.entity.Member;

import duanjianhui.assication.service.DataService;
import duanjianhui.assication.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

/**
 * @author Duanjianhui
 * @create 2020-11-08 17:38
 */
@Controller
public class MemberController {
    @Autowired
    private DataService dataService;
    @Autowired
    private MemberService memberService;

    @PostMapping("/addmember")
    @ResponseBody
    public int addmember(Member member, Model model){
        int i = memberService.addMember(member);
        if (i!=0){
            dataService.member_add();
        }
        model.addAttribute("i",i);
        return i;
    }

    @GetMapping("/selectmember")
    public String selectmember(Model model){
        List<Member> members = memberService.selectMember();
        model.addAttribute("members",members);
        return "views/member/selectmember";
    }

    @GetMapping("/addmember")
    public String addassociation(){
        return "views/member/addmember";
    }

    @GetMapping("/selecteMemberById/{m_id}")
    public String selectAssociationById(@PathVariable("m_id") Integer m_id,Model model){
        Member member = memberService.SelectMemberById(m_id);
        model.addAttribute("member",member);
        return "views/member/updatemember";
    }
    @PostMapping("/selecteMemberById")
    public String selectMemberById(Member member1,Model model){
        if(member1.getM_id()==null){
            List<Member> members = memberService.selectMember();
            model.addAttribute("members",members);
            return "views/member/selectmember";
        }
        Integer m_id=member1.getM_id();
        Member member= memberService.SelectMemberById(m_id);
        List<Member> members=new ArrayList<>();
        members.add(member);
        model.addAttribute("members",members);
        return "views/member/selectmember";
    }

    @GetMapping("/deleteMemberById/{m_id}")
    public String deleteMemberById(@PathVariable("m_id") Integer m_id, Model model){
        int i = memberService.deleteMember(m_id);
        model.addAttribute("i",i);
        return "redirect:/selectmember";
    }

    @PostMapping("/updatemember")
    public String updatemember(Member member){
        int i = memberService.updateMember(member);
        return "redirect:/selectmember";
    }
}
