package duanjianhui.assication.serviceimpl;

import duanjianhui.assication.entity.Activity;
import duanjianhui.assication.repository.ActivityRepository;
import duanjianhui.assication.service.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Duanjianhui
 * @create 2020-11-11 11:10
 */
@Service
public class ActivityServiceImpl implements ActivityService {
    @Autowired
    private ActivityRepository activityRepository;
    @Override
    public List<Activity> selectAll() {
        return activityRepository.selectAll();
    }

    @Override
    public Activity SelectActivityById(Integer ac_id) {
        return activityRepository.SelectActivityById(ac_id);
    }

    @Override
    public int updataStatus(Integer ac_id) {
        return activityRepository.updataStatus(ac_id);
    }

    @Override
    public int updataStatus1(Integer ac_id) {
        return activityRepository.updataStatus1(ac_id);
    }

    @Override
    public int deleteActivity(Integer ac_id) {
        return activityRepository.deleteActivity(ac_id);
    }
}
