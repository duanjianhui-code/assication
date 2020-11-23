package duanjianhui.assication.serviceimpl;

import duanjianhui.assication.entity.Admin;
import duanjianhui.assication.repository.AdminRepository;
import duanjianhui.assication.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author Duanjianhui
 * @create 2020-11-04 22:52
 */
@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    private AdminRepository adminRepository;
    @Override
    public int register(Admin admin) {
        return adminRepository.register(admin);
    }

    @Override
    public Admin login(Admin admin) {
        return adminRepository.login(admin);
    }

    @Override
    public int updateinfo(Admin admin) {
        return adminRepository.updateinfo(admin);
    }
}
