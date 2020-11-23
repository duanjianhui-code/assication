/**
 * 留言管理管理初始化
 */
var Message = {
    id: "MessageTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
Message.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: '留言id', field: 'id', visible: false, align: 'center', valign: 'middle'},
            {title: '留言标题', field: 'title', visible: true, align: 'center', valign: 'middle', sortable: true},
            {title: '留言内容', field: 'content', visible: true, align: 'center', valign: 'middle', sortable: true},
            {title: '留言人姓名', field: 'username', visible: true, align: 'center', valign: 'middle', sortable: true},
            {title: '留言时间', field: 'createtime', visible: true, align: 'center', valign: 'middle', sortable: true},
            {title: '预留字段', field: 'string1', visible: false, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
Message.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        Message.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加留言管理
 */
Message.openAddMessage = function () {
    var index = layer.open({
        type: 2,
        title: '添加留言管理',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/message/message_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看留言管理详情
 */
Message.openMessageDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '留言管理详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/message/message_update/' + Message.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除留言管理
 */
Message.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/message/delete", function (data) {
            Feng.success("删除成功!");
            Message.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("messageId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 重置搜索
 */
Message.resetSearch = function () {
    $("#condition").val("");
    Message.search();
};




/**
 * 查询留言管理列表
 */
Message.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    Message.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = Message.initColumn();
    var table = new BSTable(Message.id, "/message/list", defaultColunms);
    table.setPaginationType("client");
    Message.table = table.init();
});
