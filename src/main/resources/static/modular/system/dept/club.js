/**
 * 部门管理初始化
 */
var Dept = {
    id: "DeptTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
Dept.initColumn = function () {
    var columns = [
        {field: 'selectItem', radio: true},
        {title: 'id', field: 'id', visible: false, align: 'center', valign: 'middle', width: '50px'},
        {title: '社团名称', field: 'simplename', align: 'center', valign: 'middle', sortable: true},
        {title: '社团分类', field: 'club_category', align: 'center', valign: 'middle', sortable: true},
        {title: '社团人数', field: 'club_number', align: 'center', valign: 'middle', sortable: true},
        {title: '社团创建时间', field: 'culb_create_time', align: 'center', valign: 'middle', sortable: true}];
    return columns;
};

/**
 * 检查是否选中
 */
Dept.check = function () {
    debugger;
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if (selected.length == 0) {
        Feng.info("请先选中表格中的某一记录！");
        return false;
    } else {
        Dept.seItem = selected[0];
        return true;
    }
};


/**
 * 加入社团
 */
Dept.applyClub = function () {
    if (this.check()) {
        var operation = function () {
            var ajax = new $ax(Feng.ctxPath + "/dept/apply", function () {
                Feng.success("申请成功!请等待审核");
                Dept.table.refresh();
            }, function (data) {
                Feng.error("申请失败!" + data.responseJSON.message + "!");
            });
            ajax.set("deptId", Dept.seItem.id);
            ajax.start();
        };
        Feng.confirm("是否申请加入该社团?", operation);
    }
};

/**
 * 查询部门列表
 */
Dept.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    queryData['clubCategory'] = $("#clubCategory").val();
    Dept.table.refresh({query: queryData});
};

/**
 * 重置搜索
 */
Dept.resetSearch = function () {
    $("#condition").val("");
    $("#clubCategory").val("");
    Dept.search();
}

$(function () {
    var defaultColunms = Dept.initColumn();
    var table = new BSTable(Dept.id, "/dept/allclub", defaultColunms);
    table.setPaginationType("client");
    Dept.table = table.init();
});
