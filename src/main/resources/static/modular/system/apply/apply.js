/**
 * 申请加入社团管理初始化
 */
var Apply = {
    id: "ApplyTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
Apply.initColumn = function () {
    return [
        {field: 'selectItem', checkbox: true},
            {title: '', field: 'id', visible: false, align: 'center', valign: 'middle'},
            {title: '姓名', field: 'userid', visible: true, align: 'center', valign: 'middle', sortable: true},
            {title: '申请加入的社团名称', field: 'deptid', visible: true, align: 'center', valign: 'middle', sortable: true},
            {title: '申请时间', field: 'applytime', visible: true, align: 'center', valign: 'middle', sortable: true}
    ];
};

/**
 * 检查是否选中
 */
Apply.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        Apply.seItem = selected[0];
        return true;
    }
};


/**
 * 通过审批，允许加社团
 */
Apply.agree = function () {
    if (this.check()) {
        var operation = function () {
            var id = Apply.seItem.id;
            var ajax = new $ax(Feng.ctxPath + "/apply/agree", function (data) {
                Feng.success("通过申请成功!");
                Apply.table.refresh();
            }, function (data) {
                Feng.error("通过申请失败!" + data.responseJSON.message + "!");
            });
            ajax.set("applyId", id);
            ajax.start();
        };
        Feng.confirm("是否允许加入社团?", operation);
    }
};

/**
 * 一键通过审批，允许所有用户加入加社团
 */
Apply.agree_all = function () {
        var operation = function () {
            var ajax = new $ax(Feng.ctxPath + "/apply/agree_all", function (data) {
                Feng.success("一键通过申请成功!");
                Apply.table.refresh();
            }, function (data) {
                Feng.error("一键通过申请失败!" + data.responseJSON.message + "!");
            });
            //ajax.set("applyId",this.seItem.id);
            ajax.start();
        };
    Feng.confirm("是否一键允许加入社团? 请谨慎操作！", operation);
};

/**
 * 一键通过审批，允许所有用户加入加社团
 */
Apply.disagree = function () {
    if (this.check()) {
        var operation = function () {
            var id = Apply.seItem.id;
            var ajax = new $ax(Feng.ctxPath + "/apply/disagree", function (data) {
                Feng.success("拒绝申请成功!");
                Apply.table.refresh();
            }, function (data) {
                Feng.error("拒绝申请失败!" + data.responseJSON.message + "!");
            });
            ajax.set("applyId", id);
            ajax.start();
        };
        Feng.confirm("是否拒绝加入社团? ", operation);
    }
};


/**
 * 重置搜索
 */
Apply.research = function () {
    $("#condition").val("");
    Apply.search();
};

/**
 * 查询申请加入社团列表
 */
Apply.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    Apply.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = Apply.initColumn();
    var table = new BSTable(Apply.id, "/apply/club_apply", defaultColunms);
    table.setPaginationType("client");
    Apply.table = table.init();
});
