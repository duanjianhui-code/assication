package duanjianhui.assication.service;

import duanjianhui.assication.entity.Activity;
import java.util.List;

/**
 * @author Duanjianhui
 * @create 2020-11-11 11:08
 */
public interface ActivityService {

    public List<Activity> selectAll();
    public Activity SelectActivityById(Integer ac_id);
    public int updataStatus(Integer ac_id);
    public int updataStatus1(Integer ac_id);

    public int deleteActivity(Integer ac_id);
}
