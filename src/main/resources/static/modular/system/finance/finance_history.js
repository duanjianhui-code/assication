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
        {title: 'id', field: 'id', visible: false, align: 'center', valign: 'middle'},
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
 * 社团财务审批：拒绝
 */
Finance.again = function () {
    if (this.check()) {
        var operation = function () {
            var financeId = Finance.seItem.id;
            var ajax = new $ax(Feng.ctxPath + "/finance/apply_again", function (data) {
                Feng.success("已撤销此审批");
                Finance.table.refresh();
            }, function (data) {
                Feng.error("撤销失败!请联系网信部！" + data.responseJSON.message + "!");
            });
            ajax.set("financeId", financeId);
            ajax.start();
        };
        Feng.confirm("是否重新审批? ", operation);
    }
};

/**
 * 查询社团财务管理列表
 */
Finance.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    queryData['category'] = $("#category").val();
    queryData['state'] = $("#state").val();
    Finance.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = Finance.initColumn();
    var table = new BSTable(Finance.id, "/finance/history", defaultColunms);
    table.setPaginationType("client");
    Finance.table = table.init();
});
