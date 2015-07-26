
$(function () {
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Test Prep Time by Race'
        },
        xAxis: {
            categories: [
               '<1 month',
               '1-4 months',
               '4-6 months',
               '6-12 months',
               '>1 year'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: null
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}%</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'White',
            data: [9.52, 28.57, 19.05, 23.81, 19.05],
            color: "#50B358"
        }, {
            name: 'Asian',
            data: [4.11, 27.40, 17.81, 27.40, 21.92],
            color: "#8C58BD"

        }, {
            name: 'Other',
            data: [16.67, 16.67, 16.67, 16.67, 16.67],
            color: "#62B3E6"

        }]
    });
});
