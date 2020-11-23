/**
 * 初始化申请加入社团详情对话框
 */
var ApplyInfoDlg = {
    applyInfoData : {}
};

/**
 * 清除数据
 */
ApplyInfoDlg.clearData = function() {
    this.applyInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
ApplyInfoDlg.set = function(key, val) {
    this.applyInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
ApplyInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
ApplyInfoDlg.close = function() {
    parent.layer.close(window.parent.Apply.layerIndex);
}

/**
 * 收集数据
 */
ApplyInfoDlg.collectData = function() {
    this
    .set('id')
    .set('userid')
    .set('deptid')
    .set('applytime');
}

/**
 * 提交添加
 */
ApplyInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/apply/add", function(data){
        Feng.success("添加成功!");
        window.parent.Apply.table.refresh();
        ApplyInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.applyInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
ApplyInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/apply/update", function(data){
        Feng.success("修改成功!");
        window.parent.Apply.table.refresh();
        ApplyInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.applyInfoData);
    ajax.start();
}

$(function() {

});
