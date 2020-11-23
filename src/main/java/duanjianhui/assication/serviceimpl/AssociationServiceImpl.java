package duanjianhui.assication.serviceimpl;

import duanjianhui.assication.entity.Association;
import duanjianhui.assication.repository.AssociationRepository;
import duanjianhui.assication.service.AssociationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Duanjianhui
 * @create 2020-11-06 21:38
 */
@Service
public class AssociationServiceImpl implements AssociationService {
    @Autowired
    private AssociationRepository associationRepository;
    @Override
    public int addAssociation(Association association) {
        return associationRepository.addAssociation(association);
    }

    @Override
    public List<Association> selectAssociation() {
        return associationRepository.selectAssociation();
    }

    @Override
    public Association selectAssociationById(Integer as_id) {
        return associationRepository.SelectAssociationById(as_id);
    }

    @Override
    public int updateAssociation(Association association) {
        return associationRepository.updateAssociation(association);
    }

    @Override
    public int deleteAssociation(Integer as_id) {
        return associationRepository.deleteAssociation(as_id);
    }

}
