'use strict';
var primary = "#716aca";
var success = "#28D094";
var danger = "#FF4961";
var warning = "#ff9149";
var info = "#1e9ff2";
new PerfectScrollbar(document.getElementById('feeds-scroll'));
$(function () {
    var options1 = {
        chart: {
            type: 'bar',
            height: 95,
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
                    formatter: function (seriesName) {
                        return 'Earnings'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    }
    new ApexCharts(document.querySelector("#widgetchart1-1"), options1).render();
});
$(function () {
    var options1 = {
        chart: {
            type: 'area',
            height: 50,
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: [info],
        fill: {
            type: 'solid',
            opacity: 0.3,
        },
        markers: {
            size: 3,
            opacity: 0.9,
            colors: "#fff",
            strokeColor: info,
            strokeWidth: 2,
            hover: {
                size: 7,
            }
        },
        stroke: {
            curve: 'straight',
            width: 3,
        },
        grid: {
            padding: {
                right: -10,
                left: -10
            }
        },
        series: [{
            name: 'series1',
            data: [1, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 1]
        }],
        tooltip: {
            theme: 'dark',
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return 'Amount Processed :'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };
    new ApexCharts(document.querySelector("#widgetchart6-3"), options1).render();
});
$(function () {
    var options = {
        chart: {
            type: 'area',
            height: 175,
            sparkline: {
                enabled: true
            }
        },
        grid: {
            padding: {
                right: -25,
                left: -25
            }
        },
        colors: [danger, success, primary],
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.6,
                opacityTo: 0.4,
                stops: [0, 50, 100]
            }
        },
        series: [{
            name: 'Growth',
            data: [30, 45, 55, 35, 60, 40, 55, 35]
        }, {
            name: 'Refund',
            data: [55, 65, 75, 65, 85, 72, 75, 65]
        }, {
            name: 'Online',
            data: [60, 85, 95, 75, 99, 80, 95, 75]
        }],
        tooltip: {
            theme: 'dark',
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
    new ApexCharts(document.querySelector("#overall-chart"), options).render();
});
$(function () {
    var options1 = {
        chart: {
            type: 'bar',
            height: 90,
            sparkline: {
                enabled: true
            }
        },
        colors: [warning],
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
            theme: 'dark',
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return ''
                    }
                }
            },
            marker: {
                show: false
            }
        }
    }
    new ApexCharts(document.querySelector("#del-reports"), options1).render();
});
$(function () {
    var options1 = {
        chart: {
            type: 'area',
            height: 40,
            sparkline: {
                enabled: true
            }
        },
        colors: [danger],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.8,
                opacityTo: 0.4,
                stops: [0, 90, 100]
            }
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        series: [{
            name: 'series1',
            data: [0, 55, 35, 75, 50, 90, 0]
        }],
        yaxis: {
            min: 0,
            max: 100,
        },
        tooltip: {
            theme: 'dark',
            fixed: {
                enabled: false
            },
            x: {
                show: false,
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return ''
                    }
                }
            },
            marker: {
                show: false
            }
        }
    }
    new ApexCharts(document.querySelector("#circleProgress1"), options1).render();
    var options2 = {
        chart: {
            type: 'area',
            height: 40,
            sparkline: {
                enabled: true
            }
        },
        colors: [success],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.8,
                opacityTo: 0.4,
                stops: [0, 90, 100]
            }
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        series: [{
            name: 'series1',
            data: [0, 50, 90, 55, 35, 75, 0]
        }],
        yaxis: {
            min: 0,
            max: 100,
        },
        tooltip: {
            theme: 'dark',
            fixed: {
                enabled: false
            },
            x: {
                show: false,
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return ''
                    }
                }
            },
            marker: {
                show: false
            }
        }
    }
    new ApexCharts(document.querySelector("#circleProgress2"), options2).render();
});