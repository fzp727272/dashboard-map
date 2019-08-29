var $ = require('jquery');

module.exports = {
  init: function(ele, data) {
    //   var data = [
    //     { name: '北京', value: Math.round(Math.random() * 100000),
    //     markPoint:{symbol:'circle',symbolSize:100}, },
    //     { name: '天津', value: Math.round(Math.random() * 100000) },
    //     { name: '上海', value: Math.round(Math.random() * 100000) },
    //     { name: '重庆', value: Math.round(Math.random() * 100000) },
    //     { name: '河北', value: Math.round(Math.random() * 100000) },
    //     { name: '河南', value: Math.round(Math.random() * 100000) },
    //     { name: '云南', value: Math.round(Math.random() * 100000) },
    //     { name: '辽宁', value: Math.round(Math.random() * 100000) },
    //     { name: '黑龙江', value: Math.round(Math.random() * 100000) },
    //     { name: '湖南', value: Math.round(Math.random() * 100000) },
    //     { name: '安徽', value: Math.round(Math.random() * 100000) },
    //     { name: '山东', value: Math.round(Math.random() * 100000) },
    //     { name: '新疆', value: Math.round(Math.random() * 100000) },
    //     { name: '江苏', value: Math.round(Math.random() * 100000) },
    //     { name: '浙江', value: Math.round(Math.random() * 100000) },
    //     { name: '江西', value: Math.round(Math.random() * 100000) },
    //     { name: '湖北', value: Math.round(Math.random() * 100000) },
    //     { name: '广西', value: Math.round(Math.random() * 100000) },
    //     { name: '甘肃', value: Math.round(Math.random() * 100000) },
    //     { name: '山西', value: Math.round(Math.random() * 100000) },
    //     { name: '内蒙古', value: Math.round(Math.random() * 100000) },
    //     { name: '陕西', value: Math.round(Math.random() * 100000) },
    //     { name: '吉林', value: Math.round(Math.random() * 100000) },
    //     { name: '福建', value: Math.round(Math.random() * 100000) },
    //     { name: '贵州', value: Math.round(Math.random() * 100000) },
    //     { name: '广东', value: Math.round(Math.random() * 100000) },
    //     { name: '青海', value: Math.round(Math.random() * 100000) },
    //     { name: '西藏', value: Math.round(Math.random() * 100000) },
    //     { name: '四川', value: Math.round(Math.random() * 100000) },
    //     { name: '宁夏', value: Math.round(Math.random() * 100000) },
    //     { name: '海南', value: Math.round(Math.random() * 100000) },
    //     { name: '台湾', value: Math.round(Math.random() * 100000) },
    //     { name: '香港', value: Math.round(Math.random() * 100000) },
    //     { name: '澳门', value: Math.round(Math.random() * 100000) },
    //   ];
    // option11 = {
    //   // title : {
    //   //     text: 'iphone销量',
    //   //     subtext: '纯属虚构',
    //   //     left: 'center'
    //   // },
    //   // tooltip : {
    //   //     trigger: 'item'
    //   // },
    //   // legend: {
    //   //     orient: 'vertical',
    //   //     left: 'left',
    //   //     data:['iphone3','iphone4','iphone5']
    //   // },

    //   tooltip: {
    //     show: true,
    //     padding: [10, 5, 10, 5],
    //   },
    //   geo: {
    //     show: true,
    //     map: 'china',
    //     zoom: 1.2,
    //     label: {
    //       normal: {
    //         show: false,
    //       },
    //       emphasis: {
    //         show: false,
    //       },
    //     },
    //     // roam: false,//地图设置不可拖拽，固定的
    //     itemStyle: {
    //       normal: {
    //         areaColor: '#090919',
    //         borderWidth: 2,
    //         borderColor: 'rgba(47,89,255,1)',
    //         label: { show: true },

    //         // shadowColor: '#2F59FF',
    //         // shadowBlur: 10
    //       },
    //       emphasis: {
    //         label: { show: true },
    //       },
    //     },
    //   },
    //   grid: {
    //     top: -30,
    //     right: -100,
    //     bottom: 0,
    //     left: 0,
    //   },

    //   visualMap: {
    //     show: false,
    //     min: 0,
    //     max: 2500,
    //     left: 0,
    //     right: 0,
    //     top: -100,
    //     bottom: 0,
    //     text: ['高', '低'],
    //     inRange: {
    //       color: ['rgba(47,89,255,0.1)', 'rgba(47,89,255,0)'],
    //     },
    //     // 文本，默认为数值文本
    //     calculable: true,
    //   },

    //   series: [
    //     {

    //       name: '出货量',
    //       type: 'map',
    //       mapType: 'china',
    //       showAllSymbol: true,
    //       symbolSize: 20,
    //       zoom: 1.2,
    //       itemStyle: {
    //         normal: {
    //           label: {
    //             formatter: '{b}\n{c}',
    //             show: true,
    //             color: '#fff',
    //           },
    //           borderColor: 'rgba(47,89,255,.1)',
    //           areaColor: 'rgba(47,89,255,1)',
    //           borderWidth: 2,
    //         },

    //         emphasis: { label: { show: true, color: '#fff' }, areaColor: 'rgba(47,89,255,0.3)' },
    //       },
    //     //   renderItem: function (params, api) {//具体实现自定义图标的方法
    //     //     return {
    //     //         type: 'image',
    //     //         style: {
    //     //             image: "./images/map-icon.png",
    //     //             x: api.coord([
    //     //                 coldCar[params.dataIndex].value[0], coldCar[params.dataIndex]
    //     //                     .value[1]
    //     //             ])[0],
    //     //             y: api.coord([
    //     //                 coldCar[params.dataIndex].value[0], coldCar[params.dataIndex]
    //     //                     .value[1]
    //     //             ])[1]
    //     //         }
    //     //     }
    //     // },
    //       // label: {
    //       //     normal: {
    //       //         show: true,
    //       //         color:'#fff'
    //       //     },
    //       //     emphasis: {
    //       //         show: true,
    //       //         areaColor: 'red',
    //       //     }
    //       // },
    //       //   itemStyle: {
    //       //     normal: {
    //       //         areaColor: 'rgba(0,0,0,0)',
    //       //         borderWidth: 1,
    //       //         borderColor:"#2F59FF",
    //       //         // shadowColor: 'rgba(0,54,255, 1)',
    //       //         // shadowBlur: 100
    //       //     }
    //       // },
    //       data: data,
    //     },

    //   ],
    // };
    var geoCoordMap = {
      上海: [121.4648, 31.2891],
      新疆: [87.9236, 43.5883],
      甘肃: [103.5901, 36.3043],
      总部: [70.4551, 50.2539],
      北京: [116.4551, 40.2539],
      江苏: [118.8062, 31.9208],
      广西: [108.479, 23.1152],
      江西: [116.0046, 28.6633],
      安徽: [117.29, 32.0581],
      内蒙古: [111.4124, 40.4901],
      黑龙江: [127.9688, 45.368],
      天津: [117.4219, 39.4189],
      山西: [112.3352, 37.9413],
      广东: [113.5107, 23.2196],
      四川: [103.9526, 30.7617],
      西藏: [91.1865, 30.1465],
      云南: [102.9199, 25.4663],
      浙江: [119.5313, 29.8773],
      湖北: [114.3896, 30.6628],
      辽宁: [123.1238, 42.1216],
      山东: [117.1582, 36.8701],
      海南: [110.3893, 19.8516],
      河北: [114.4995, 38.1006],
      福建: [119.4543, 25.9222],
      青海: [101.4038, 36.8207],
      陕西: [109.1162, 34.2004],
      贵州: [106.6992, 26.7682],
      河南: [113.4668, 34.6234],
      重庆: [107.7539, 30.1904],
      宁夏: [106.3586, 38.1775],
      吉林: [125.8154, 44.2584],
      湖南: [113.0823, 28.2568],
    };
    var mapData = data;

    var convertData = function(data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value),
            rank: data[i].rank,
          });
        }
      }
      //   console.log(res);
      return res;
    };

    option = {
      //  backgroundColor: '#404a59',
      //  title: {
      //      text: '全国主要城市空气质量',
      //      subtext: 'data from PM25.in',
      //      sublink: 'http://www.pm25.in',
      //      x:'center',
      //      textStyle: {
      //          color: '#fff'
      //      }
      //  },
      //  tooltip: {
      //      trigger: 'item',
      //      formatter: function (params) {
      //          return params.name + ' : ' + params.value[2];
      //      }
      //  },
      legend: {
          show:false,
        orient: 'vertical',
        y: 'bottom',
        x: 'right',
        data: ['出货量（件）'],
        textStyle: {
          color: '#fff',
        },
      },
      tooltip: {
        show: true,
        label: {
          formatter: function(params) {
            // console.log(params)
            return params.value[2];
          },
        },
        padding: [10, 5, 10, 5],
      },
      visualMap: {
        min: 0,
        max: 10000,
        show: false,
        calculable: true,
        inRange: {
          color: ['#FF006D'],
        },
        textStyle: {
          color: '#fff',
        },
      },
      geo: {
        map: 'china',
        zoom: 1.2,
        label: {
          formatter: '{b}\n{c}',
          normal: {
            color: '#fff',
            show: false,
          },
          emphasis: {
            color: '#fff',
            show: false,
          },
        },
        itemStyle: {
          normal: {
            areaColor: '#090919',
            borderWidth: 2,
            borderColor: 'rgba(47,89,255,1)',
          },
          emphasis: {
            show: false,
            areaColor: 'rgba(47,89,255,1)',
          },
        },
      },
      series: [
        {
          name: '出货量（件）',
          type: 'scatter',
          coordinateSystem: 'geo',
          zoom: 1.2,
          //   symbol: 'pin',
          symbol: 'image://./images/map-icon.png',
          data: convertData(mapData),
          symbolSize: function(params) {
            //   var ratio = 50000 / 24;
            var size = 20 + (params[2] - 5000) / 5000;
            return size;
          },
          tooltip: {
            formatter: function(params) {
              // console.log(params)
              var res =
                '<div>' +
                '<div style="font-size:14px;"><div style="text-align:center;display:block;width:16px;height:16px;line-height:16px;border-radius:10px;background:#FF006D;margin-right:4px;">' +
                params.data.rank +
                '</div>' +
                params.name +
                '</div>' +
                '出货量：' +
                params.value[2] +
                '</div>';
              return res;
            },
          },
          itemStyle: {
            normal: {
              borderColor: 'rgba(47,89,255,.1)',
              areaColor: 'rgba(47,89,255,1)',
              borderWidth: 2,
            },
            emphasis: {
              show: false,
              borderColor: '#fff',
              borderWidth: 1,
            },
          },
          label: {
            normal: {
              color: '#fff',
              fontSize: 10,
              padding: [30, 0, 0, 0],

              formatter: function(params) {
                // console.log(params)
                let res = params.name + '\n' + params.value[2];
                return res;
              },
              show: true,
            },
            emphasis: {
              show: false,
            },
          },
        },
      ],
    };
    var chinaMap = echarts.init(ele.get(0), 'steven.fu');
    chinaMap.setOption(option);
    tools.loopShowTooltip(chinaMap, option, {
        loopSeries: true
      });
  },
};
