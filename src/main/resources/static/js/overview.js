
//活动总计
function activityTotal() {
    $.ajax({
        url: "/activityStatistics/list",
        dataType: "json",
        async: false,
        success: function (data) {
            xName = new Array(data.length);
            y1Name = new Array(data.length);
            y2Name = new Array(data.length);
            y3Name = new Array(data.length);
            for (var i = 0; i < data.length; i++) {
                xName[i] = data[i].clubName;
                y1Name[i] = data[i].commonNum;
                y2Name[i] = data[i].greatNum;
                y3Name[i] = data[i].total;
            }
        }
    });
};

//本周活动总计
function getWeekActivityNum() {
    $.ajax({
        url: "/activityStatistics/getweekynum",
        dataType: "json",
        async: false,
        success: function (data) {
            //填充数据
            week_xName = new Array(data.length);
            week_y1Name = new Array(data.length);
            week_y2Name = new Array(data.length);
            week_y3Name = new Array(data.length);
            for (var i = 0; i < data.length; i++) {
                week_xName[i] = data[i].weekday;
                week_y1Name[i] = data[i].common_activity;
                week_y2Name[i] = data[i].great_activity;
                week_y3Name[i] = data[i].total_activity;
            }
        }
    });
}


function getview() {
    $.ajax({
        url: "/activityStatistics/getview",
        dataType: "json",
        async: false,
        success: function (data) {
            //填充数据
            $("#club_num").text(data.club_num);
            $("#user_num").text(data.user_num);
            $("#week_activity_num").text(data.week_activity_num);
            $("#activity_num").text(data.activity_num);
            $("#week_common_num").text(data.week_common_num);
            $("#week_great_num").text(data.week_great_num);
            $("#week_num").text(parseInt(data.week_common_num) + parseInt(data.week_great_num));
        }
    });
}


function echarts_data() {
    //noticeNum();

    getview();
    /*本周活动数量统计*/
    var dashboard_week = document.getElementById("dashboard-week");
    var week_hart = echarts.init(dashboard_week);
    getWeekActivityNum();
    var week = {};
    activity_week = null;
    week.title = '本周活动数量统计';
    activity_week = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['常规', '重大', '活动总量']
        },
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: week_xName
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '常规',
                type: 'line',
                data: week_y1Name
            },
            {
                name: '重大',
                type: 'line',
                data: week_y2Name
            },
            {
                name: '活动总量',
                type: 'line',
                data: week_y3Name
            }
        ]

    };
    if (activity_week && typeof activity_week === "object") {
        week_hart.setOption(activity_week, true);

        /*
        * Echarts自动轮播插件
        *
        * interval	    轮播时间间隔，单位毫秒	                                                                            默认为2000
        * loopSeries	true表示循环所有series的tooltip，false则显示指定seriesIndex的tooltip	                            boolean类型，默认为false
        * seriesIndex	指定某个系列（option中的series索引）循环显示tooltip,当loopSeries为true时，从seriesIndex系列开始执行.   默认为0
        * */
        tools.loopShowTooltip(week_hart, activity_week, {interval: 1500, loopSeries: true});
    }

    /*各社团活动数量统计*/
    var dashboard_year = document.getElementById("dashboard-year");
    var year_hart = echarts.init(dashboard_year);
    activityTotal();
    var year = {};
    activity_year = null;
    year.title = '各社团本年度活动数量统计';
    activity_year = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['常规', '重大', '活动总量']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        /*toolbox: {
            show: true,
            feature: {
                saveAsImage: {}
            }
        },*/
        dataZoom: [
            {
                id: 'dataZoomX',
                type: 'slider',
                xAxisIndex: [0],
                //filterMode: 'filter', // 设定为 'filter' 从而 X 的窗口变化会影响 Y 的范围。
                start: 0,
                end: 15
            }
        ],
        xAxis: [
            {
                type: 'category',
                data: xName,
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    interval: 0,// 横轴信息全部显示
                    rotate: 20// 角度倾斜显示
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '常规',
                type: 'bar',
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'top'
                        }
                    }
                },
                data: y1Name
            },
            {
                name: '重大',
                type: 'bar',
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'top'
                        }
                    }
                },
                data: y2Name
            },
            {
                name: '活动总量',
                type: 'bar',
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'top'
                        }
                    }
                },
                data: y3Name
            }
        ]
    };
    if (activity_year && typeof activity_year === "object") {
        year_hart.setOption(activity_year, true);
    }
}