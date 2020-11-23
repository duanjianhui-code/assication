package duanjianhui.assication.service;

import duanjianhui.assication.entity.Admin;

/**
 * @author Duanjianhui
 * @create 2020-11-04 22:43
 */
public interface AdminService {
    public int register(Admin admin);
    public Admin login(Admin admin);
    public int updateinfo(Admin admin);
}
