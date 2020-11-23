/**
 * 初始化社团活动详情对话框
 */
var ActivityInfoDlg = {
    activityInfoData: {},
    validateFields: {
        activityName: {
            validators: {
                notEmpty: {
                    message: '请输入活动名称'
                }
            }
        },
        activityPlace: {
            validators: {
                notEmpty: {
                    message: '请输入活动地点'
                }
            }
        },
        activityCategory: {
            validators: {
                notEmpty: {
                    message: '请选择活动类型'
                }
            }
        },
        activityStartTime: {
            validators: {
                notEmpty: {
                    message: '请选择活动开始时间'
                }
            }
        },
        activityEndTime: {
            validators: {
                notEmpty: {
                    message: '请选择活动结束时间'
                }
            }
        }
    }
};

/**
 * 清除数据
 */
ActivityInfoDlg.clearData = function () {
    this.activityInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
ActivityInfoDlg.set = function (key, val) {
    this.activityInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
ActivityInfoDlg.get = function (key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
ActivityInfoDlg.close = function () {
    parent.layer.close(window.parent.Activity.layerIndex);
}

/**
 * 收集数据
 */
ActivityInfoDlg.collectData = function () {
    this.set('activityId')
        .set('activityCategory')
        .set('activityName')
        .set('activityPlace')
        .set('activityStartTime')
        .set('activityEndTime');
};

ActivityInfoDlg.validate = function () {
    $('#ActivityInfoForm').data("bootstrapValidator").resetForm();
    $('#ActivityInfoForm').bootstrapValidator('validate');
    return $("#ActivityInfoForm").data('bootstrapValidator').isValid();
};

/**
 * 提交添加
 */
ActivityInfoDlg.addSubmit = function () {

    this.clearData();
    this.collectData();

    if (!this.validate()) {
        return;
    }

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/activity/add", function (data) {
        Feng.success("添加成功!等待审核。");
        window.parent.Activity.table.refresh();
        ActivityInfoDlg.close();
    }, function (data) {
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.activityInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
ActivityInfoDlg.editSubmit = function () {

    this.clearData();
    this.collectData();
    if (!this.validate()) {
        return;
    }

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/activity/update", function (data) {
        Feng.success("修改成功!");
        window.parent.Activity.table.refresh();
        ActivityInfoDlg.close();
    }, function (data) {
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.activityInfoData);
    ajax.start();
}

$(function () {
    Feng.initValidator("ActivityInfoForm", ActivityInfoDlg.validateFields);
    $("#activityCategory").val($("#activityCategoryValue").val());
});
