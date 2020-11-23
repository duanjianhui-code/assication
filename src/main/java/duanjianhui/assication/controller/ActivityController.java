package duanjianhui.assication.controller;

import duanjianhui.assication.entity.Activity;
import duanjianhui.assication.entity.Association;
import duanjianhui.assication.service.ActivityService;
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
 * @create 2020-11-11 10:49
 */
@Controller
public class ActivityController {

    @Autowired
    private ActivityService activityService;
    @GetMapping("/check")
    public String ckeck(Model model){
        List<Activity> activities = activityService.selectAll();
        model.addAttribute("activitys",activities);
        return "views/activity/activity";
    }

    @GetMapping("/updateactivity/{ac_id}")
    @ResponseBody
    public int updateactivity(@PathVariable("ac_id") Integer ac_id){
        int i =activityService.updataStatus(ac_id);
        return i;
    }

    @GetMapping("/updateactivity1/{ac_id}")
    @ResponseBody
    public int updateactivity1(@PathVariable("ac_id") Integer ac_id){
        int i =activityService.updataStatus1(ac_id);
        return i;
    }

    @GetMapping("/deleteactivity/{ac_id}")
    @ResponseBody
    public int deleteactivity(@PathVariable("ac_id") Integer ac_id){
        int i =activityService.deleteActivity(ac_id);
        return i;
    }
    @PostMapping("/selectActivityById")
    public String selectAssociationById(Activity activity1, Model model){
        System.out.println(activity1);
        if(activity1.getAc_id()==null){
            List<Activity> activities = activityService.selectAll();
            model.addAttribute("activitys",activities);
            return "views/activity/activity";
        }
        Integer ac_id=activity1.getAc_id();
        Activity activity = activityService.SelectActivityById(ac_id);
        List<Activity> activities=new ArrayList<>();
        activities.add(activity);
        model.addAttribute("activitys",activities);
        return "views/activity/activity";
    }
}
