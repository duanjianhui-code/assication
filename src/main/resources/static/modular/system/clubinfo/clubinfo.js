/**
 * 社团简介管理管理初始化
 */
var Clubinfo = {
    id: "ClubinfoTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
Clubinfo.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: '社团信息id', field: 'id', visible: false, align: 'center', valign: 'middle'},
            {title: '社团名称', field: 'fullname', visible: true, align: 'center', valign: 'middle'},
            {title: '社团分类', field: 'club_category', visible: true, align: 'center', valign: 'middle'},
            {title: '社团成立时间', field: 'culb_create_time', visible: true, align: 'center', valign: 'middle'},
            {title: '社团现有人数', field: 'club_number', visible: true, align: 'center', valign: 'middle'},
            {title: '社团信息', field: 'club_infomation', visible: true, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
Clubinfo.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        Clubinfo.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加社团简介管理
 */
Clubinfo.openAddClubinfo = function () {
    var index = layer.open({
        type: 2,
        title: '添加社团简介管理',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/clubinfo/clubinfo_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看社团简介管理详情
 */
Clubinfo.openClubinfoDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '社团简介管理详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/clubinfo/clubinfo_update/' + Clubinfo.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除社团简介管理
 */
Clubinfo.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/clubinfo/delete", function (data) {
            Feng.success("删除成功!");
            Clubinfo.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("clubinfoId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询社团简介管理列表
 */
Clubinfo.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    Clubinfo.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = Clubinfo.initColumn();
    var table = new BSTable(Clubinfo.id, "/clubinfo/myclub", defaultColunms);
    table.setPaginationType("client");
    Clubinfo.table = table.init();
});
