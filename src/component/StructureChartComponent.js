import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Highcharts3D from 'highcharts/highcharts-3d';
import exportingInit from 'highcharts/modules/exporting';

Highcharts3D(Highcharts);
exportingInit(Highcharts);


const StructureChartComponent = ({
    chartType, chartOptions, chartData, innerSize, depth, colorTheme, title, titleSize, subTitleSize, subTitle, seriesTitle
}) => {
    const options = {
        credits: {
            enabled: false
        },
        exporting: {
            buttons: {
                contextButton: {
                    menuItems: [
                        'downloadPNG',
                        'downloadJPEG',
                        'downloadPDF',
                        'downloadSVG',
                        'separator',
                        'viewFullscreen'
                    ]
                }
            }
        },

        xAxis: {
            gridLineWidth: 0 // Disable grid lines on the x-axis
        },
        yAxis: {
            gridLineWidth: 0 // Disable grid lines on the y-axis
        },
        chart: {
            type: chartType,
            backgroundColor: 'transparent',
            options3d: chartOptions
        },
        title: {
            text: title,
            style: {
                fontSize: titleSize
            }

        },
        subtitle: {
            text: subTitle,
            align: 'center', style: {
                fontSize: subTitleSize
            }
        },
        plotOptions: {
            pie: {
                innerSize: innerSize,
                depth: depth

            }
        },

        colors: colorTheme,
        series: [{

            name: seriesTitle,
            data: chartData
        }]
    };

    return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default StructureChartComponent;
