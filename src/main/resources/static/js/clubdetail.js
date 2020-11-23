var Activity = {
    id: "ActivityTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
Activity.initColumn = function () {
    return [
        {field: 'selectItem', radio: true, visible: false},
        {title: '活动id', field: 'activity_id', visible: false, align: 'center', valign: 'middle'},
        {title: '活动发起社团', field: 'deptName', visible: true, align: 'center', valign: 'middle'},
        {title: '活动名称', field: 'activity_name', visible: true, align: 'center', valign: 'middle'},
        {title: '活动地点', field: 'activity_place', visible: true, align: 'center', valign: 'middle'},
        {title: '活动开始时间', field: 'activity_start_time', visible: true, align: 'center', valign: 'middle'},
        {title: '活动结束时间', field: 'activity_end_time', visible: true, align: 'center', valign: 'middle'},
        {title: '活动负责人', field: 'activity_createName', visible: true, align: 'center', valign: 'middle'},
        {title: '活动发起时间', field: 'activity_creat_time', visible: false, align: 'center', valign: 'middle'},
        {title: '活动类别', field: 'activity_categoryName', visible: true, align: 'center', valign: 'middle'},
        {title: '活动状态', field: 'activity_stateName', visible: false, align: 'center', valign: 'middle'}
    ];
};

$(function () {
    var deptid = $("#dept_input").val();
    $.ajax({
        url: "/welcome/club/"+deptid,
        dataType: "json",
        data : deptid,
        async: true,
        success: function (data) {
            $("#club_number").html(data[0].club_number);
            $("#culb_create_time").html(data[0].culb_create_time);
            $("#club_infomation").html(data[0].club_infomation);
            $("#fullname").html(data[0].fullname);
            $("#club_category").html(data[0].club_category);
        }
    });
    var defaultColunms = Activity.initColumn();
    var table = new BSTable(Activity.id, "/welcome/clubactivity/"+deptid, defaultColunms);
    table.setData(deptid);
    table.setPaginationType("client");
    Activity.table = table.init();
    $(".fixed-table-toolbar").remove();
});