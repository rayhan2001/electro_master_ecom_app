'use strict';
var primary = "#716aca";
var success = "#28D094";
var danger = "#FF4961";
var warning = "#ff9149";
new PerfectScrollbar(document.getElementById('notifications-scroll'));
$(function() {
    var options = {
        chart: {
            type: 'line',
            height: 140,
            toolbar: {
                show: false,
            },
            sparkline: {
                enabled: !0
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: [1, 0],
                top: 10,
                left: 0,
                blur: 3,
                color: '#000',
                opacity: 0.1
            }
        },
        dataLabels: {
            enabled: !1
        },
        colors: [primary, "#aabace"],
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        fill: {
            type: 'solid',
        },
        stroke: {
            curve: 'smooth',
            width: [3, 2],
            dashArray: [0, 8]
        },
        grid: {
            padding: {
                left: -20,
                right: -20
            }
        },
        dataLabels: {
            enabled: !1
        },
        legend: {
            show: false,
        },
        markers: {
            size: 0,
            opacity: 0.9,
            strokeWidth: 2,
            hover: {
                size: 7,
            }
        },
        series: [{
            name: 'Avarage Revenue',
            data: [2, 14, 9, 20, 12, 45, 25, 35, 20, 38, 30, 50]
        }, {
            name: 'Annual Taxes',
            data: [2, 12, 6, 15, 8, 30, 15, 28, 11, 28, 18, 30]
        }],
        xaxis: {
            offsetY: -25,
            categories: ["", 1, 2, 3, 4, 5, 6, 7, 8, 9, ""],
            axisBorder: {
                show: !1
            },
            axisTicks: {
                show: !1
            },
            labels: {
                show: !0,
                style: {
                    colors: '#4E5155'
                }
            }
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            marker: {
                show: false
            }
        }
    }
    new ApexCharts(document.querySelector("#chart-main"), options).render();
});
$(function() {
    var options3 = {
        chart: {
            type: 'bar',
            height: 50,
            sparkline: {
                enabled: true
            }
        },
        colors: ["#fff"],
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: false
                },
                columnWidth: '75%',
                endingShape: 'flat'
            }
        },
        series: [{
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66]
        }],
        xaxis: {
            crosshairs: {
                width: 1
            },
        },
        tooltip: {
            theme: "dark",
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function(seriesName) {
                        return 'Task Completed'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    }
    new ApexCharts(document.querySelector("#widgetchart1-3"), options3).render();
});
$(function() {
    var options4 = {
        chart: {
            type: 'bar',
            height: 50,
            sparkline: {
                enabled: true
            }
        },
        colors: [primary],
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: false
                },
                columnWidth: '75%',
                endingShape: 'flat'
            }
        },
        series: [{
            data: [25, 66, 41, 89, 63, 54, 25, 12, 36, 9, 54, 25, 54, 25, 66, 66, 41, 89, 63, 25, 44, 12, 36, 9, 66, 41, 89, 63, 25, 44]
        }],
        xaxis: {
            crosshairs: {
                width: 1
            },
        },
        tooltip: {
            theme: "dark",
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function(seriesName) {
                        return 'Users'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    }
    new ApexCharts(document.querySelector("#widgetchart2-4"), options4).render();
});
// [ popup user details ] start
$(function() {
    $('.more-user-details').popover({
        placement: 'top',
        trigger: 'hover',
        html: true,
        animation: false,
        content: '<div><div class="media align-items-center"><img src="assets/img/avatars/1.png" class="rounded-circle ui-w-50 mr-3" alt="Avtar image"><div class="media-body"><h5 class="mt-0 mb-1">Jacob Doe <small class="badge badge-pill badge-light-success">Active</small></h5><p class="mb-0">Jacob_Doe@example.com</p></div></div></div><div class="alert alert-warning p-2 mb-1 mt-3 rounded"><div class="media align-items-center"><h3 class="feather icon-bell alert-heading m-0"></h3><div class="media-body pl-3"><small><b class="d-block">Unpaid invoice</b></small><small>This account will be disabled starting <b>14 March 1996</b>.</small></div></div></div><div class="no-gutters text-center row pt-3"><div class="col-6"><div><i class="feather icon-pie-chart h4 text-danger"></i></div><div class="mt-2"><b class="mb-1">$9,693</b><span class="d-block">revenue</span></div></div><div class="col-6"><div><i class="feather icon-shopping-cart h4 text-primary"></i></div><div class="mt-2"><b class="mb-1">2,345</b><span class="d-block">Orders</span></div></div></div>'
    });
});
// [ popup user details ] end
/*
var options = {
    chart: {
        height: 150,
        type: "line",
        stacked: !1,
        toolbar: {
            show: !1
        },
        sparkline: {
            enabled: !0
        }
    },
    colors: [primary, primary],
    dataLabels: {
        enabled: !1
    },
    stroke: {
        curve: "smooth",
        width: 3,
        dashArray: [0, 8]
    },
    fill: {
        type: "gradient",
        gradient: {
            inverseColors: !1,
            shade: "light",
            type: "vertical",
            gradientToColors: ["#fff", primary],
            opacityFrom: .7,
            opacityTo: .55,
            stops: [0, 80, 100]
        }
    },
    grid: {
        padding: {
            left: -40,
            right: -40
        }
    },
    series: [{
        name: "Weeks",
        data: [165, 175, 162, 173, 160, 195, 160, 170, 160, 190, 180],
        type: "area"
    }, {
        name: "Months",
        data: [168, 168, 155, 178, 155, 170, 190, 160, 150, 170, 140],
        type: "line"
    }],
    xaxis: {
        offsetY: -40,
        categories: ["", 1, 2, 3, 4, 5, 6, 7, 8, 9, ""],
        axisBorder: {
            show: !1
        },
        axisTicks: {
            show: !1
        },
        labels: {
            show: !0,
            style: {
                colors: primary
            }
        }
    },
    tooltip: {
        x: {
            show: !1
        }
    }
};
*/
