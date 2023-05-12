'use strict';
var primary = "#716aca";
var success = "#28D094";
var danger = "#FF4961";
var warning = "#ff9149";
// [ 1 row ] start
$(function() {
    var options1 = {
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
    var options2 = {
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
                        return 'Page Views'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    }
    new ApexCharts(document.querySelector("#widgetchart1-2"), options2).render();
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
    var options4 = {
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
                        return 'Downloads'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    }
    new ApexCharts(document.querySelector("#widgetchart1-4"), options4).render();
});
// [ 1 row ] end
// [ 2 row ] start
$(function() {
    var options1 = {
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
                        return 'Monthly sales'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    }
    new ApexCharts(document.querySelector("#widgetchart2-1"), options1).render();
    var options2 = {
        chart: {
            type: 'bar',
            height: 50,
            sparkline: {
                enabled: true
            }
        },
        colors: [success],
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
                        return 'Monthly visits'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    }
    new ApexCharts(document.querySelector("#widgetchart2-2"), options2).render();
    var options3 = {
        chart: {
            type: 'bar',
            height: 50,
            sparkline: {
                enabled: true
            }
        },
        colors: [danger],
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
                        return 'Products'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    }
    new ApexCharts(document.querySelector("#widgetchart2-3"), options3).render();
    var options4 = {
        chart: {
            type: 'bar',
            height: 50,
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
// [ 2 row ] end
// [ 3 row ] start
$(function() {
    var options1 = {
        chart: {
            type: 'area',
            height: 40,
            sparkline: {
                enabled: true
            }
        },
        colors: [primary],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.5,
                opacityTo: 0.5
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
            fixed: {
                enabled: false
            },
            x: {
                show: false,
            },
            y: {
                title: {
                    formatter: function(seriesName) {
                        return 'Bitcoin'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    }
    new ApexCharts(document.querySelector("#widgetchart3-1"), options1).render();
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
                opacityFrom: 0.5,
                opacityTo: 0.5
            }
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        series: [{
            name: 'series1',
            data: [0, 50, 35, 75, 90, 55, 0]
        }],
        yaxis: {
            min: 0,
            max: 100,
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false,
            },
            y: {
                title: {
                    formatter: function(seriesName) {
                        return 'Ethereum'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    }
    new ApexCharts(document.querySelector("#widgetchart3-2"), options2).render();
    var options3 = {
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
                opacityFrom: 0.5,
                opacityTo: 0.5
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
            fixed: {
                enabled: false
            },
            x: {
                show: false,
            },
            y: {
                title: {
                    formatter: function(seriesName) {
                        return 'Ripple'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    }
    new ApexCharts(document.querySelector("#widgetchart3-3"), options3).render();
    var options4 = {
        chart: {
            type: 'area',
            height: 40,
            sparkline: {
                enabled: true
            }
        },
        colors: [warning],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.5,
                opacityTo: 0.5
            }
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        series: [{
            name: 'series1',
            data: [0, 50, 35, 75, 90, 55, 0]
        }],
        yaxis: {
            min: 0,
            max: 100,
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false,
            },
            y: {
                title: {
                    formatter: function(seriesName) {
                        return 'Neo'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    }
    new ApexCharts(document.querySelector("#widgetchart3-4"), options4).render();
});
// [ 3 row ] end
// [ 4 row ] start
$(function() {
    var options1 = {
        chart: {
            type: 'area',
            height: 45,
            sparkline: {
                enabled: true
            }
        },
        colors: [primary],
        markers: {
            size: 2,
            opacity: 0.9,
            colors: primary,
            strokeColor: primary,
            strokeWidth: 2,
            hover: {
                size: 3,
                strokeColor: '#fff',
            }
        },
        fill: {
            type: 'solid',
            opacity: 0.2,
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        series: [{
            name: 'series1',
            data: [0, 90, 40, 65, 25, 75, 0]
        }],
        yaxis: {
            min: 0,
            max: 100,
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false,
            },
            y: {
                title: {
                    formatter: function(seriesName) {
                        return 'Messages'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    }
    new ApexCharts(document.querySelector("#widgetchart4-1"), options1).render();
    var options2 = {
        chart: {
            type: 'area',
            height: 45,
            sparkline: {
                enabled: true
            }
        },
        colors: [success],
        markers: {
            size: 2,
            opacity: 0.9,
            colors: success,
            strokeColor: success,
            strokeWidth: 2,
            hover: {
                size: 3,
                strokeColor: '#fff',
            }
        },
        fill: {
            type: 'solid',
            opacity: 0.2,
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        series: [{
            name: 'series1',
            data: [0, 90, 40, 65, 25, 75, 0]
        }],
        yaxis: {
            min: 0,
            max: 100,
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false,
            },
            y: {
                title: {
                    formatter: function(seriesName) {
                        return 'Deposit'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    }
    new ApexCharts(document.querySelector("#widgetchart4-2"), options2).render();
    var options3 = {
        chart: {
            type: 'area',
            height: 45,
            sparkline: {
                enabled: true
            }
        },
        colors: [danger],
        markers: {
            size: 2,
            opacity: 0.9,
            colors: danger,
            strokeColor: danger,
            strokeWidth: 2,
            hover: {
                size: 3,
                strokeColor: '#fff',
            }
        },
        fill: {
            type: 'solid',
            opacity: 0.2,
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        series: [{
            name: 'series1',
            data: [0, 90, 40, 65, 25, 75, 0]
        }],
        yaxis: {
            min: 0,
            max: 100,
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false,
            },
            y: {
                title: {
                    formatter: function(seriesName) {
                        return 'Revenue'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    }
    new ApexCharts(document.querySelector("#widgetchart4-3"), options3).render();
    var options4 = {
        chart: {
            type: 'area',
            height: 45,
            sparkline: {
                enabled: true
            }
        },
        colors: [warning],
        markers: {
            size: 2,
            opacity: 0.9,
            colors: warning,
            strokeColor: warning,
            strokeWidth: 2,
            hover: {
                size: 3,
                strokeColor: '#fff',
            }
        },
        fill: {
            type: 'solid',
            opacity: 0.2,
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        series: [{
            name: 'series1',
            data: [0, 90, 40, 65, 25, 75, 0]
        }],
        yaxis: {
            min: 0,
            max: 100,
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false,
            },
            y: {
                title: {
                    formatter: function(seriesName) {
                        return 'Customers'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    }
    new ApexCharts(document.querySelector("#widgetchart4-4"), options4).render();
});
// [ 4 row ] end
// [ 5 row ] start
$(function() {
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
        colors: [primary],
        fill: {
            type: 'solid',
            opacity: 0.3,
        },
        markers: {
            size: 3,
            opacity: 0.9,
            colors: "#fff",
            strokeColor: primary,
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
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function(seriesName) {
                        return 'Amount Processed :'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };
    new ApexCharts(document.querySelector("#widgetchart5-1"), options1).render();
    var options2 = {
        chart: {
            type: 'bar',
            height: 50,
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: [success],
        plotOptions: {
            bar: {
                columnWidth: '60%'
            }
        },
        series: [{
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89, 63, 25, 44, 12]
        }],
        xaxis: {
            crosshairs: {
                width: 1
            },
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function(seriesName) {
                        return 'Amount Spent :'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };
    new ApexCharts(document.querySelector("#widgetchart5-2"), options2).render();
    var options3 = {
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
        colors: [warning],
        fill: {
            type: 'solid',
            opacity: 0.3,
        },
        markers: {
            size: 3,
            opacity: 0.9,
            colors: "#fff",
            strokeColor: warning,
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
            data: [1, 44, 12, 36, 9, 54, 25, 66, 41, 89, 25, 66, 41, 89, 63, 54, 25, 66, 41, 50, 1]
        }],
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function(seriesName) {
                        return 'Profit Processed :'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };
    new ApexCharts(document.querySelector("#widgetchart5-3"), options3).render();
});
// [ 5 row ] end
// [ 6 row ] start
$(function() {
    var options1 = {
        chart: {
            type: 'area',
            height: 100,
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: [primary],
        fill: {
            type: 'solid',
            opacity: 0.3,
        },
        markers: {
            size: 0,
            opacity: 0.9,
            colors: "#fff",
            strokeColor: primary,
            strokeWidth: 2,
            hover: {
                size: 7,
            }
        },
        stroke: {
            width: 3,
        },
        grid: {
            padding: {
                right: -12,
                left: -12
            }
        },
        series: [{
            name: 'series1',
            data: [25, 66, 41, 89, 25, 44, 12, 36, 9, 54, 25, 66, 41, 66, 41, 89]
        }],
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function(seriesName) {
                        return 'Sale Income :'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };
    new ApexCharts(document.querySelector("#widgetchart6-1"), options1).render();
    var options2 = {
        chart: {
            type: 'area',
            height: 100,
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: [success],
        fill: {
            type: 'solid',
            opacity: 0.3,
        },
        markers: {
            size: 0,
            opacity: 0.9,
            colors: "#fff",
            strokeColor: success,
            strokeWidth: 2,
            hover: {
                size: 7,
            }
        },
        stroke: {
            width: 3,
        },
        grid: {
            padding: {
                right: -12,
                left: -12
            }
        },
        series: [{
            name: 'series1',
            data: [9, 54, 25, 66, 41, 66, 41, 89, 25, 66, 41, 89, 25, 44, 12, 36, ]
        }],
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function(seriesName) {
                        return 'Rent Income :'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };
    new ApexCharts(document.querySelector("#widgetchart6-2"), options2).render();
    var options3 = {
        chart: {
            type: 'area',
            height: 100,
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: [danger],
        fill: {
            type: 'solid',
            opacity: 0.3,
        },
        markers: {
            size: 0,
            opacity: 0.9,
            colors: "#fff",
            strokeColor: danger,
            strokeWidth: 2,
            hover: {
                size: 7,
            }
        },
        stroke: {
            width: 3,
        },
        grid: {
            padding: {
                right: -12,
                left: -12
            }
        },
        series: [{
            name: 'series1',
            data: [25, 66, 41, 89, 25, 44, 12, 36, 9, 54, 25, 66, 41, 66, 41, 89]
        }],
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function(seriesName) {
                        return 'Income Analysis :'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };
    new ApexCharts(document.querySelector("#widgetchart6-3"), options3).render();
});
// [ 6 row ] end
// [ 7 row ] start
$(function() {
    var options1 = {
        chart: {
            type: 'line',
            height: 90,
            width: '100%',
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: [1, 0],
                top: 10,
                left: 0,
                blur: 3,
                color: '#1c8ffe',
                opacity: 0.1
            }
        },
        dataLabels: {
            enabled: false,
        },
        colors: [warning],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 1,
                opacityTo: 1,
                gradientToColors: [warning],
                stops: [0, 100]
            }
        },
        markers: {
            size: 0,
            opacity: 0.9,
            strokeWidth: 2,
            hover: {
                size: 7,
            }
        },
        stroke: {
            curve: 'smooth',
            width: 3,
        },
        series: [{
            name: 'series1',
            data: [40, 60, 35, 55, 35, 75, 50]
        }],
        yaxis: {
            min: 10,
            max: 80,
        },
        grid: {
            padding: {
                top: 0,
                right: -20,
                bottom: 0,
                left: -20,
            },
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false,
            },
            y: {
                title: {
                    formatter: function(seriesName) {
                        return 'Power(kw) '
                    }
                }
            },
            marker: {
                show: false
            }
        }
    }
    new ApexCharts(document.querySelector("#widgetchart7-1"), options1).render();
    var options2 = {
        chart: {
            type: 'line',
            height: 90,
            width: '100%',
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: [1, 0],
                top: 10,
                left: 0,
                blur: 3,
                color: '#1c8ffe',
                opacity: 0.1
            }
        },
        dataLabels: {
            enabled: false,
        },
        colors: [primary],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 1,
                opacityTo: 1,
                gradientToColors: [primary],
                stops: [0, 100]
            }
        },
        markers: {
            size: 0,
            opacity: 0.9,
            strokeWidth: 2,
            hover: {
                size: 7,
            }
        },
        stroke: {
            curve: 'smooth',
            width: 3,
        },
        series: [{
            name: 'series1',
            data: [40, 60, 35, 55, 35, 75, 50]
        }],
        yaxis: {
            min: 10,
            max: 80,
        },
        grid: {
            padding: {
                top: 0,
                right: -20,
                bottom: 0,
                left: -20,
            },
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false,
            },
            y: {
                title: {
                    formatter: function(seriesName) {
                        return 'Water(m3) '
                    }
                }
            },
            marker: {
                show: false
            }
        }
    }
    new ApexCharts(document.querySelector("#widgetchart7-2"), options2).render();
    var options3 = {
        chart: {
            type: 'line',
            height: 90,
            width: '100%',
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: [1, 0],
                top: 10,
                left: 0,
                blur: 3,
                color: '#1c8ffe',
                opacity: 0.1
            }
        },
        dataLabels: {
            enabled: false,
        },
        colors: [danger],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 1,
                opacityTo: 1,
                gradientToColors: [danger],
                stops: [0, 100]
            }
        },
        markers: {
            size: 0,
            opacity: 0.9,
            strokeWidth: 2,
            hover: {
                size: 7,
            }
        },
        stroke: {
            curve: 'smooth',
            width: 3,
        },
        series: [{
            name: 'series1',
            data: [40, 60, 35, 55, 35, 75, 50]
        }],
        yaxis: {
            min: 10,
            max: 80,
        },
        grid: {
            padding: {
                top: 0,
                right: -20,
                bottom: 0,
                left: -20,
            },
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false,
            },
            y: {
                title: {
                    formatter: function(seriesName) {
                        return 'Temperature(deg) '
                    }
                }
            },
            marker: {
                show: false
            }
        }
    }
    new ApexCharts(document.querySelector("#widgetchart7-3"), options3).render();
});
// [ 7 row ] end
// [ 8 row ] start
$(function() {
    var options1 = {
        chart: {
            type: 'area',
            height: 40,
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: [primary],
        fill: {
            type: 'solid',
            opacity: 0.3,
        },
        markers: {
            size: 2,
            opacity: 0.9,
            colors: primary,
            strokeColor: primary,
            strokeWidth: 2,
            hover: {
                size: 4,
            }
        },
        stroke: {
            curve: 'straight',
            width: 3,
        },
        series: [{
            name: 'series1',
            data: [9, 66, 41, 89, 63, 25, 44, 12, 36, 20, 54, 25, 9]
        }],
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function(seriesName) {
                        return 'Visits :'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };
    new ApexCharts(document.querySelector("#widgetchart8-1"), options1).render();
    var options2 = {
        chart: {
            type: 'bar',
            height: 40,
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: [success],
        plotOptions: {
            bar: {
                columnWidth: '60%'
            }
        },
        series: [{
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63]
        }],
        xaxis: {
            crosshairs: {
                width: 1
            },
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function(seriesName) {
                        return 'Bounce Rate :'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };
    new ApexCharts(document.querySelector("#widgetchart8-2"), options2).render();
    var options3 = {
        chart: {
            type: 'area',
            height: 40,
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: [danger],
        fill: {
            type: 'solid',
            opacity: 0,
        },
        markers: {
            size: 2,
            opacity: 0.9,
            colors: danger,
            strokeColor: danger,
            strokeWidth: 2,
            hover: {
                size: 4,
            }
        },
        stroke: {
            curve: 'straight',
            width: 3,
        },
        series: [{
            name: 'series1',
            data: [9, 66, 41, 89, 63, 25, 44, 12, 36, 20, 54, 25, 9]
        }],
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function(seriesName) {
                        return 'Products :'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };
    new ApexCharts(document.querySelector("#widgetchart8-3"), options3).render();
});
// [ 8 row ] end
// [ 9 row ] start
$(function() {
    var options1 = {
        chart: {
            type: 'area',
            height: 100,
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: [primary],
        fill: {
            type: 'solid',
            opacity: 0.3,
        },
        stroke: {
            curve: 'straight',
            width: 3,
        },
        grid: {
            padding: {
                right: -12,
                left: -12
            }
        },
        series: [{
            name: 'series1',
            data: [25, 66, 41, 89, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89]
        }],
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function(seriesName) {
                        return 'Total Leads :'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };
    new ApexCharts(document.querySelector("#widgetchart9-1"), options1).render();
    var options2 = {
        chart: {
            type: 'area',
            height: 100,
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: [success],
        fill: {
            type: 'solid',
            opacity: 0.3,
        },
        stroke: {
            curve: 'straight',
            width: 3,
        },
        grid: {
            padding: {
                right: -12,
                left: -12
            }
        },
        series: [{
            name: 'series1',
            data: [25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 25, 66, 41, 50]
        }],
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function(seriesName) {
                        return 'Total Vendors :'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };
    new ApexCharts(document.querySelector("#widgetchart9-2"), options2).render();
    var options3 = {
        chart: {
            type: 'area',
            height: 100,
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: [danger],
        fill: {
            type: 'solid',
            opacity: 0.3,
        },
        stroke: {
            curve: 'straight',
            width: 3,
        },
        grid: {
            padding: {
                right: -12,
                left: -12
            }
        },
        series: [{
            name: 'series1',
            data: [25, 66, 41, 89, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89]
        }],
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function(seriesName) {
                        return 'Invoice Generate :'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };
    new ApexCharts(document.querySelector("#widgetchart9-3"), options3).render();
});
// [ 9 row ] end
// [ customer-chart ] start
$(function() {
    var options = {
        chart: {
            height: 245,
            type: 'donut',
        },
        dataLabels: {
            enabled: false
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '65%'
                }
            }
        },
        labels: ['New', 'Return', 'Custom'],
        series: [76.7, 15, 30],
        legend: {
            show: false
        },
        grid: {
            padding: {
                top: 20,
                right: 0,
                bottom: 0,
                left: 0
            },
        },
        colors: [primary, success, danger],
    }
    var chart = new ApexCharts(document.querySelector("#widgetchart10-1"), options);
    chart.render();
});
// [ customer-chart ] end
// [ revenue-chart ] start
$(function() {
    var options = {
        chart: {
            height: 200,
            type: 'donut',
        },
        dataLabels: {
            enabled: false
        },
        labels: ['Target', 'Last week', 'Last day'],
        series: [1258, 975, 500],
        legend: {
            show: false
        },
        colors: [success, warning, danger],
    }
    var chart = new ApexCharts(document.querySelector("#widgetchart10-2"), options);
    chart.render();
});
// [ revenue-chart ] end
// [ proj-earning ] start
$(function() {
    var options = {
        chart: {
            type: 'bar',
            height: 200,
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        colors: ["#fff"],
        plotOptions: {
            bar: {
                color: '#fff',
                columnWidth: '60%',
            }
        },
        fill: {
            type: 'solid',
            opacity: 1,
        },
        series: [{
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36]
        }],
        xaxis: {
            crosshairs: {
                width: 1
            },
            labels: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                style: {
                    color: '#fff',
                }
            },
        },
        grid: {
            borderColor: '#ffffff85',
            padding: {
                bottom: 0,
                left: 10,
            }
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function(seriesName) {
                        return 'Total Earnings'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };
    var chart = new ApexCharts(document.querySelector("#widgetchart10-3"), options);
    chart.render();
});
// [ proj-earning ] end
// [ 5 row ] start
