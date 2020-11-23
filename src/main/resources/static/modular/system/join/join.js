/**
 * 活动报名管理初始化
 */
var Join = {
    id: "JoinTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
Join.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: '主键id', field: 'id', visible: false, align: 'center', valign: 'middle'},
            {title: '活动名称', field: 'activityId', visible: true, align: 'center', valign: 'middle'},
            {title: '报名人', field: 'userid', visible: true, align: 'center', valign: 'middle'},
            {title: '报名时间', field: 'join_time', visible: true, align: 'center', valign: 'middle'},
            {title: '状态', field: 'joinState', visible: true, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
Join.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        Join.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加活动报名
 */
Join.openAddJoin = function () {
    var index = layer.open({
        type: 2,
        title: '添加活动报名',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/join/join_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看活动报名详情
 */
Join.openJoinDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '活动报名详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/join/join_update/' + Join.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除活动报名
 */
Join.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/join/delete", function (data) {
            Feng.success("删除成功!");
            Join.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("joinId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询活动报名列表
 */
Join.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    Join.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = Join.initColumn();
    var table = new BSTable(Join.id, "/join/list", defaultColunms);
    table.setPaginationType("client");
    Join.table = table.init();
});
