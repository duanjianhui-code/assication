package duanjianhui.assication.controller;

import duanjianhui.assication.entity.Association;
import duanjianhui.assication.service.AssociationService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * @author Duanjianhui
 * @create 2020-11-06 21:20
 */
@Slf4j
@Controller
public class AssociationController {
    @Autowired
    private AssociationService associationService;

    @PostMapping("/addassociation")
    @ResponseBody
    public int addassociation(Association association, Model model){
        int i = associationService.addAssociation(association);
        model.addAttribute("i",i);
        return i;
    }
    @GetMapping("/selectassociation")
    public String selectassociation(Model model){
        List<Association> associations = associationService.selectAssociation();
        model.addAttribute("associations",associations);
        return "views/association/selectassociation";
    }
    @GetMapping("/add")
    public String addassociation(){
        return "views/association/addassociation";
    }
    @GetMapping("/selecteAssociationById/{as_id}")
    public String selectAssociationById(@PathVariable("as_id") Integer as_id,Model model){
        Association association = associationService.selectAssociationById(as_id);
        model.addAttribute("association",association);
        return "views/association/updateassociation";
    }
    @PostMapping("/selecteAssociationById")
    public String selectAssociationById(Association association1,Model model){
        if(association1.getAs_id()==null){
            List<Association> associations = associationService.selectAssociation();
            model.addAttribute("associations",associations);
            return "views/association/selectassociation";
        }
        Integer as_id=association1.getAs_id();
        Association association = associationService.selectAssociationById(as_id);
        List<Association> associations=new ArrayList<>();
        associations.add(association);
        model.addAttribute("associations",associations);
        return "views/association/selectassociation";
    }
    @GetMapping("/deleteAssociationById/{as_id}")
    public String deleteAssociationById(@PathVariable("as_id") Integer as_id,Model model){
        int i = associationService.deleteAssociation(as_id);
        model.addAttribute("i",i);
        return "redirect:/selectassociation";
    }

    @PostMapping("/updateassociation")
    public String updateassociation(Association association){
        int i = associationService.updateAssociation(association);
        return "redirect:/selectassociation";
    }

}
