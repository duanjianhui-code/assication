/**
 * 社团活动管理初始化
 */
var Activity = {
    id: "ActivityTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
Activity.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
        {title: '活动id', field: 'activity_id', visible: false, align: 'center', valign: 'middle'},
        {title: '活动发起社团', field: 'deptName', visible: true, align: 'center', valign: 'middle'},
        {title: '活动名称', field: 'activity_name', visible: true, align: 'center', valign: 'middle'},
        {title: '活动地点', field: 'activity_place', visible: true, align: 'center', valign: 'middle'},
        {title: '活动开始时间', field: 'activity_start_time', visible: true, align: 'center', valign: 'middle'},
        {title: '活动结束时间', field: 'activity_end_time', visible: true, align: 'center', valign: 'middle'},
        {title: '活动负责人', field: 'activity_createName', visible: true, align: 'center', valign: 'middle'},
        {title: '活动发起时间', field: 'activity_creat_time', visible: false, align: 'center', valign: 'middle'},
        {title: '活动类别', field: 'activity_categoryName', visible: true, align: 'center', valign: 'middle'},
        {title: '活动状态', field: 'activity_stateName', visible: true, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
Activity.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if (selected.length == 0) {
        Feng.info("请先选中表格中的某一记录！");
        return false;
    } else {
        Activity.seItem = selected[0];
        return true;
    }
};

Activity.apply_again = function () {
    if (this.check()) {
        var operation = function () {
            var activityId = Activity.seItem.activity_id;
            var ajax = new $ax(Feng.ctxPath + "/activity/again", function (data) {
                Feng.success("已撤销此审批!");
                Activity.table.refresh();
            }, function (data) {
                Feng.error("撤销失败!请联系网信部!" + data.responseJSON.message + "!");
            });
            ajax.set("activityId", activityId);
            ajax.start();
        };
        Feng.confirm("是否重新审批此社团活动申请? ", operation);
    }
};




/**
 * 查询社团活动列表
 */
Activity.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    queryData['activity_category'] = $("#activity_category").val();
    queryData['beginTime'] = $("#beginTime").val();
    queryData['state'] = $("#state").val();
    Activity.table.refresh({query: queryData});
};

Activity.resetSearch = function () {
    $("#condition").val("");
    $("#activity_category").val("");
    $("#beginTime").val("");
    $("#state").val("");
    Activity.search();
}

$(function () {
    var defaultColunms = Activity.initColumn();
    var table = new BSTable(Activity.id, "/activity/history", defaultColunms);
    table.setPaginationType("client");
    Activity.table = table.init();
});
