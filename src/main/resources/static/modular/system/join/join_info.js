/**
 * 初始化活动报名详情对话框
 */
var JoinInfoDlg = {
    joinInfoData : {}
};

/**
 * 清除数据
 */
JoinInfoDlg.clearData = function() {
    this.joinInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
JoinInfoDlg.set = function(key, val) {
    this.joinInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
JoinInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
JoinInfoDlg.close = function() {
    parent.layer.close(window.parent.Join.layerIndex);
}

/**
 * 收集数据
 */
JoinInfoDlg.collectData = function() {
    this
    .set('id')
    .set('activityId')
    .set('userid')
    .set('joinTime')
    .set('joinState');
}

/**
 * 提交添加
 */
JoinInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/join/add", function(data){
        Feng.success("添加成功!");
        window.parent.Join.table.refresh();
        JoinInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.joinInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
JoinInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/join/update", function(data){
        Feng.success("修改成功!");
        window.parent.Join.table.refresh();
        JoinInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.joinInfoData);
    ajax.start();
}

$(function() {

});
