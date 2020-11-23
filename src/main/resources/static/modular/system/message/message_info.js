/**
 * 初始化留言管理详情对话框
 */
var MessageInfoDlg = {
    messageInfoData : {},
    editor: null,
    validateFields: {
        title: {
            validators: {
                notEmpty: {
                    message: '标题不能为空'
                }
            }
        }
    }
};

/**
 * 清除数据
 */
MessageInfoDlg.clearData = function() {
    this.messageInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
MessageInfoDlg.set = function(key, val) {
    this.messageInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
MessageInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
MessageInfoDlg.close = function() {
    parent.layer.close(window.parent.Message.layerIndex);
}

/**
 * 收集数据
 */
MessageInfoDlg.collectData = function() {
    this.messageInfoData['content'] = MessageInfoDlg.editor.txt.text();
    this.set('id').set('title').set('username');
}

/**
 * 验证数据是否为空
 */
MessageInfoDlg.validate = function () {
    $('#messageInfoForm').data("bootstrapValidator").resetForm();
    $('#messageInfoForm').bootstrapValidator('validate');
    return $("#messageInfoForm").data('bootstrapValidator').isValid();
};

/**
 * 提交添加
 */
MessageInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();


    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/message/add", function(data){
        Feng.success("添加成功!");
        window.parent.Message.table.refresh();
        MessageInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.messageInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
MessageInfoDlg.editSubmit = function() {
    this.clearData();
    this.collectData();
    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/message/update", function(data){
        Feng.success("修改成功!");
        window.parent.Message.table.refresh();
        MessageInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.messageInfoData);
    ajax.start();
}

$(function() {
    Feng.initValidator("messageInfoForm", MessageInfoDlg.validateFields);
    //初始化编辑器
    var E = window.wangEditor;
    var editor = new E('#editor');
    editor.create();
    editor.txt.html($("#contentVal").val());
    MessageInfoDlg.editor = editor;
});
