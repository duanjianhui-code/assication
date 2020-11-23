package duanjianhui.assication.serviceimpl;

import duanjianhui.assication.entity.DataModel;
import duanjianhui.assication.repository.DataRepository;
import duanjianhui.assication.service.DataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author Duanjianhui
 * @create 2020-11-11 21:23
 */
@Service
public class DataServiceImpl implements DataService {
    @Autowired
    private DataRepository repository;
    @Override
    public int visit_add() {
        return repository.visit_add();
    }

    @Override
    public int download_add() {
        return repository.download_add();
    }

    @Override
    public int member_add() {
        return repository.member_add();
    }

    @Override
    public DataModel selectData() {
        return repository.selectData();
    }
}
