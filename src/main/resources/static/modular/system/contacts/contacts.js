





$(function () {
    var ztree = new $ZTree("contactTree", "/contact/sltree");
    //ztree.bindOnClick(MgrContacts.onClickDept);
    ztree.init();
    $('a:contains("顶级")').parent().parent().remove();
});


/*MgrContacts.onClickDept = function (e, treeId, treeNode) {
    MgrContacts.deptid = treeNode.id;
    MgrContacts.search();
};*/



