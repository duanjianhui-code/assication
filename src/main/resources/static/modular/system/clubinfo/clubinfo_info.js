/**
 * 初始化社团简介管理详情对话框
 */
var ClubinfoInfoDlg = {
    clubinfoInfoData : {}
};

/**
 * 清除数据
 */
ClubinfoInfoDlg.clearData = function() {
    this.clubinfoInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
ClubinfoInfoDlg.set = function(key, val) {
    this.clubinfoInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
ClubinfoInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
ClubinfoInfoDlg.close = function() {
    parent.layer.close(window.parent.Clubinfo.layerIndex);
}

/**
 * 收集数据
 */
ClubinfoInfoDlg.collectData = function() {
    this.clubinfoInfoData['clubInfomation'] = ClubinfoInfoDlg.editor.txt.html();
    this.set('id').set('clubNumber').set('clubCategory').set('culbCreateTime');

}

/**
 * 提交添加
 */
ClubinfoInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/clubinfo/add", function(data){
        Feng.success("添加成功!");
        window.parent.Clubinfo.table.refresh();
        ClubinfoInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.clubinfoInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
ClubinfoInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/clubinfo/update", function(data){
        Feng.success("修改成功!");
        window.parent.Clubinfo.table.refresh();
        ClubinfoInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.clubinfoInfoData);
    ajax.start();
}

$(function() {
    var E = window.wangEditor;
    var editor = new E('#editor');
    editor.create();
    editor.txt.html($("#clubInfomationVal").val());
    ClubinfoInfoDlg.editor = editor;
    $("#clubCategory").val($("#clubCategoryValue").val());
});
