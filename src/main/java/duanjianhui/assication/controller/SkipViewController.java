package duanjianhui.assication.controller;


import duanjianhui.assication.entity.Association;
import duanjianhui.assication.entity.DataModel;
import duanjianhui.assication.service.AssociationService;
import duanjianhui.assication.service.DataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;

import java.util.List;

/**
 * @author Duanjianhui
 * @create 2020-11-04 15:20
 */
@Controller
public class SkipViewController {
    @Autowired
    private DataService dataService;
    @Autowired
    private AssociationService associationService;
    @GetMapping("/register")
    public String register() {
        return "register";
    }

    @GetMapping("/login")
    public String login() {
        return "login";
    }
    @GetMapping("/")
    public String index(){
        return "login";
    }
    @GetMapping("/home/console")
    public String index1(Model model){
        DataModel dataModel = dataService.selectData();
        List<Association> associations = associationService.selectAssociation();
        int size = associations.size();
        model.addAttribute("size",size);
        model.addAttribute("data",dataModel);
        return "views/home/homepage2";
    }
}
