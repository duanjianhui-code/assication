package duanjianhui.assication.service;

import duanjianhui.assication.entity.Association;

import java.util.List;

/**
 * @author Duanjianhui
 * @create 2020-11-06 21:24
 */
public interface AssociationService {
    public int addAssociation(Association association);

    public List<Association> selectAssociation();

    public Association selectAssociationById(Integer as_id);

    public int updateAssociation(Association association);

    public int deleteAssociation(Integer as_id);
}
