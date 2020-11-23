/**
 * 初始化社团财务管理详情对话框
 */
var FinanceInfoDlg = {
    financeInfoData : {},
    validateFields: {
        category: {
            validators: {
                notEmpty: {
                    message: '财务类型不能为空'
                }
            }
        },
        money: {
            validators: {
                notEmpty: {
                    message: '请输入金额'
                },
                regexp: {
                    regexp: /^[0-9\.]+$/,
                    message: '只能是数字和小数点'
                }
            }
        }
    }
};

/**
 * 清除数据
 */
FinanceInfoDlg.clearData = function() {
    this.financeInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
FinanceInfoDlg.set = function(key, val) {
    this.financeInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
FinanceInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
FinanceInfoDlg.close = function() {
    parent.layer.close(window.parent.Finance.layerIndex);
};

FinanceInfoDlg.validate = function () {
    $('#financeInfoForm').data("bootstrapValidator").resetForm();
    $('#financeInfoForm').bootstrapValidator('validate');
    return $("#financeInfoForm").data('bootstrapValidator').isValid();
};

/**
 * 收集数据
 */
FinanceInfoDlg.collectData = function() {
    this
    .set('id')
    .set('deptid')
    .set('category')
    .set('activityid')
    .set('money')
    .set('balance')
    .set('costtime');
}

/**
 * 提交添加
 */
FinanceInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();
    if (!this.validate()) {
        return;
    }

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/finance/add", function(data){
        Feng.success("添加成功!");
        window.parent.Finance.table.refresh();
        FinanceInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.financeInfoData);
    ajax.start();
};


/**
 * 提交修改
 */
FinanceInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    if (!this.validate()) {
        return;
    }

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/finance/update", function(data){
        Feng.success("修改成功!");
        window.parent.Finance.table.refresh();
        FinanceInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.financeInfoData);
    ajax.start();
};


$(function() {
    Feng.initValidator("financeInfoForm", FinanceInfoDlg.validateFields);

    $.ajax({
        url: "/activity/tree",
        dataType: "json",
        async: true,
        success: function (data) {

            /*$("#club_number").html(data[0].club_number);
            $("#culb_create_time").html(data[0].culb_create_time);
            $("#club_infomation").html(data[0].club_infomation);
            $("#fullname").html(data[0].fullname);
            $("#club_category").html(data[0].club_category);*/
            var html = '';
            if (data.length > 0){
                for (var i = 0; i < data.length; i++) {
                    html += '<option value="'+data[i].id+'">'+data[i].name+'</option>';
                }
            }
            $("#activityid").append(html);
        }
    });
    $("#category").val($("#categoryValue").val());
    $("#activityid").val($("#activityidValue").val());


});
