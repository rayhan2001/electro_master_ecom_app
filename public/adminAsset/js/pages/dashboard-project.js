'use strict';
var primary = "#716aca";
var success = "#28D094";
var danger = "#FF4961";
var warning = "#ff9149";
$(function() {
    new PerfectScrollbar(document.getElementById('latestactivity'));
    new PerfectScrollbar(document.getElementById('feeds'));
    new PerfectScrollbar(document.getElementById('tasks-inner'));
});

// [ Project flow ] start
$(function() {
    var options = {
        chart: {
            height: 300,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                offsetY: -30,
                startAngle: 0,
                endAngle: 270,
                hollow: {
                    margin: 5,
                    size: '30%',
                    background: 'transparent',
                    image: undefined,
                },
                dataLabels: {
                    name: {
                        show: false,

                    },
                    value: {
                        show: false,
                    }
                }
            }
        },
        colors: ['#8ac542', '#537df9', '#ff5722', '#ffc200'],
        series: [76, 67, 61, 90],
        labels: ['Analysis', 'Design', 'Codding', 'Testing'],
        stroke: {
            lineCap: 'round'
        },
        legend: {
            show: true,
            floating: true,
            fontSize: '13px',
            position: 'left',
            verticalAlign: 'top',
            textAnchor: 'end',
            offsetY: 0,
            offsetX: 0,
            labels: {
                useSeriesColors: true,
            },
            markers: {
                size: 0
            },
            formatter: function(seriesName, opts) {
                return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
            },
            itemMargin: {
                vertical: 4,
            },
            containerMargin: {
                left: 310,
                top: 8
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    show: false
                }
            }
        }]
    }
    var chart = new ApexCharts(
        document.querySelector("#circle-angle-radial"),
        options
    );
    chart.render();
});
// [ Project flow ] end
// [ chart-income-project ] start
$(function() {
    var options = {
        chart: {
            type: 'bar',
            height: 230
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
            },
        },
        colors: [primary, success, danger, warning],
        series: [{
            name: 'Payroll',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
            name: 'HRM',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }, {
            name: 'E-commerce',
            data: [24, 65, 27, 56, 21, 68, 43, 60, 76]
        }, {
            name: 'Support',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }],
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function(val) {
                    return "$ " + val + " thousands"
                }
            }
        }
    };
    var chart = new ApexCharts(
        document.querySelector("#chart-income-project"),
        options
    );
    chart.render();
});
// [ chart-income-project ] end
// // [ chart-income-project ] start
// $(function() {
//     var options = {
//         chart: {
//             height: 315,
//             type: "line",
//             stacked: !1,
//             toolbar: {
//                 show: !1
//             },
//             sparkline: {
//                 enabled: !0
//             }
//         },
//         colors: [primary, primary],
//         dataLabels: {
//             enabled: !1
//         },
//         stroke: {
//             curve: "smooth",
//             width: 3,
//             dashArray: [0, 8]
//         },
//         fill: {
//             type: "gradient",
//             gradient: {
//                 inverseColors: !1,
//                 shade: "light",
//                 type: "vertical",
//                 gradientToColors: ["#fff", primary],
//                 opacityFrom: .7,
//                 opacityTo: .55,
//                 stops: [0, 80, 100]
//             }
//         },
//         grid: {
//             padding: {
//                 left: -40,
//                 right: -40
//             }
//         },
//         series: [{
//             name: "Weeks",
//             data: [165, 175, 162, 173, 160, 195, 160, 170, 160, 190, 180],
//             type: "area"
//         }, {
//             name: "Months",
//             data: [168, 168, 155, 178, 155, 170, 190, 160, 150, 170, 140],
//             type: "line"
//         }],
//         xaxis: {
//             offsetY: -40,
//             categories: ["", 1, 2, 3, 4, 5, 6, 7, 8, 9, ""],
//             axisBorder: {
//                 show: !1
//             },
//             axisTicks: {
//                 show: !1
//             },
//             labels: {
//                 show: !0,
//                 style: {
//                     colors: primary
//                 }
//             }
//         },
//         tooltip: {
//             x: {
//                 show: !1
//             }
//         }
//     };
//     var chart = new ApexCharts(
//         document.querySelector("#chart-income-project"),
//         options
//     );
//     chart.render();
// });
// // [ chart-income-project ] end
