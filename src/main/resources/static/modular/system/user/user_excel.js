/**
 * 导出人员
 */
MgrUser.expUsers = function () {
    var ajax = new $ax(Feng.ctxPath + "/mgr/exp", function () {
        Feng.success("导出成功!");
    }, function (data) {
        Feng.error("导出失败!" + data.responseJSON.message + "!");
    });
};

/**
 * 导入人员
 */
MgrUser.impUsers = function () {
    var ajax = new $ax(Feng.ctxPath + "/mgr/imp", function () {
        Feng.success("导入成功!");
        MgrUser.table.refresh();
    }, function (data) {
        Feng.error("导入成功!" + data.responseJSON.message + "!");
    });
};