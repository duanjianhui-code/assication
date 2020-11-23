package duanjianhui.assication.controller;

import duanjianhui.assication.entity.Admin;
import duanjianhui.assication.service.AdminService;
import duanjianhui.assication.service.DataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.Mapping;
import org.springframework.web.bind.annotation.PostMapping;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * @author Duanjianhui
 * @create 2020-11-04 22:58
 */
@Controller
public class AdminController {
    @Autowired
    private DataService dataService;
    @Autowired
    private AdminService adminService;
    @PostMapping("/register")
    public String register(Admin admin){
        int i=adminService.register(admin);
        if(i!=0){
            return "login";
        }
        return "register";
    }
    @PostMapping("/login")
    public String login(Admin admin, HttpSession session){
        Admin admin1 = adminService.login(admin);
        if(admin1!=null){
            session.setAttribute("admin",admin1);
            dataService.visit_add();
            return "views/index";
        }
        return "register";
    }

    /**
     *
     * @logout 注销
     * @return String
     */
    @GetMapping("/logout")
    public String logout(HttpSession session){
        session.invalidate();
        return "login";
    }
    @GetMapping("/info")
    public String info(){
        return "views/admin/info";
    }
    @PostMapping("/info")
    public String updatainfo(Admin admin,Model model){
        String msg="修改失败";
        int i=adminService.updateinfo(admin);
        if(i!=0){
            msg="修改成功";
            model.addAttribute("msg",msg);
            return "views/admin/info";
        }
        model.addAttribute("msg",msg);
        return "views/admin/info";
    }
}
