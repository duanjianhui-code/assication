/**
 * 社团财务管理管理初始化
 */
var Finance = {
    id: "FinanceTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
Finance.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: '', field: 'id', visible: false, align: 'center', valign: 'middle'},
            {title: '社团', field: 'deptName', visible: true, align: 'center', valign: 'middle', sortable: true},
            {title: '类型', field: 'category', visible: true, align: 'center', valign: 'middle', sortable: true},
            {title: '关联的活动', field: 'activityName', visible: true, align: 'center', valign: 'middle', sortable: true},
            {title: '花费金额', field: 'money', visible: true, align: 'center', valign: 'middle', sortable: true},
            /*{title: '余额', field: 'balance', visible: true, align: 'center', valign: 'middle'},*/
            {title: '申请日期', field: 'costtime', visible: true, align: 'center', valign: 'middle', sortable: true},
            {title: '审批状态', field: 'agree', visible: true, align: 'center', valign: 'middle', sortable: true},
            {title: '审批日期', field: 'agreetime', visible: true, align: 'center', valign: 'middle', sortable: true}
    ];
};

/**
 * 检查是否选中
 */
Finance.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        Finance.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加社团财务管理
 */
Finance.openAddFinance = function () {
    var index = layer.open({
        type: 2,
        title: '添加社团财务管理',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/finance/finance_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看社团财务管理详情
 */
Finance.openFinanceDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '社团财务管理详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/finance/finance_update/' + Finance.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除社团财务管理
 */
Finance.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/finance/delete", function (data) {
            Feng.success("删除成功!");
            Finance.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("financeId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询社团财务管理列表
 */
Finance.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    queryData['category'] = $("#category").val();
    Finance.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = Finance.initColumn();
    var table = new BSTable(Finance.id, "/finance/list", defaultColunms);
    table.setPaginationType("client");
    Finance.table = table.init();
});
