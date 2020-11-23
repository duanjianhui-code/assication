package duanjianhui.assication.service;

import duanjianhui.assication.entity.DataModel;
import org.apache.ibatis.annotations.Update;

/**
 * @author Duanjianhui
 * @create 2020-11-11 21:21
 */
public interface DataService {

    public int visit_add();


    public int download_add();


    public int member_add();

    public DataModel selectData();
}
