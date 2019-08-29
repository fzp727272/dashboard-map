var $ = require('jquery');
// var circleProgress = require("circleProgress")

var statisticsChart = require('./component/statisticsChart');
var warehouseGood = require('./component/warehouseGood');
var goodRank = require('./component/goodRank');
var chinaMap = require('./component/mapRender');
var warehouseValue = require('./component/warehouseValue');
var staffOperation = require('./component/staffOperation');

//假数据
var xAxisData = [];
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i < 12; i++) {
  xAxisData.push(i + 1 + '月');
  data1.push((Math.random() * 3000).toFixed(2));
  data2.push((Math.random() * 2000).toFixed(2));
  data3.push((Math.random() * 1000).toFixed(2));
}


//屏幕宽度缩放
var screenWidth = $(window).width();
var screenHeight = $(window).height();
if (screenWidth > 1920) {
  $('html').css({
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'center',
  });
  $('body').width(1920);
  $('body').height((1920 * screenHeight) / screenWidth);
  var scaleSize = 'scale(' + screenWidth / 1920 + ')';
  $('body').css({ transform: scaleSize });
}

//仓库统计数据
$(function(){
  var data = [
    {name:'当前库存',state:'normal',value:'190,908'},
    {name:'当前库存',state:'warning',value:'190,908'},
    {name:'当前库存',state:'warning',value:'180,908'},
    {name:'当前库存',state:'normal',value:'1890,908'},
  ]
var $ele = $("#warehouse-statistics").find('.statistics-list');
data.map(function(item,key){
if(item.state == 'warning'){
  $ele.eq(key).addClass('statistics-list-warning');
}
$ele.eq(key).find('.statistics-value').children('span').html(item.value)
$ele.eq(key).find('.statistics-label').html(item.name)
})
});


//仓库当前状态 进度条
$(function() {
  require('jquery-circle-progress');
  var data = [
    { ratio: 0.67, title: '周转率1', value: '1231,890' },
    { ratio: 0.17, title: '周转率2', value: '1231,890' },
    { ratio: 0.58, title: '周转率3', value: '1231,890' },
    { ratio: 0.97, title: '周转率4', value: '1231,890' },
  ];
  data.map(function(item, key) {
    var ele =  $('.warehouse-state-list')
    .eq(key);
   
    ele.find('.dashboard-progress')
      .circleProgress({
        value: item.ratio,
        size: $('.dashboard-progress').width() - 30,
        lineCap: 'round',
        fill: { color: '#2F59FF' },
        thickness: ($('.dashboard-progress').width() - 60) / 20,
      });
      var value = item.ratio * 1000 / 10;
      ele.find(".progress-ration").html(value+'%');
      ele.find(".warehouse-state-text-title").html(item.title);
      ele.find(".warehouse-state-text-value").html(item.value);
  });

});

//仓库使用率
$(function(){
  var value = '80%';
	$("#warehouse-ration-svg").find(".change-point").attr({
		offset:value//图形百分比
	});
	$("#warehouse-ration-value").html(value)//百分比
})

//地图
$(function() {
  var mapData = [
    { name: '天津', value: Math.round(Math.random() * 100000), rank: 1 },
    { name: '上海', value: Math.round(Math.random() * 100000), rank: 2 },
    { name: '重庆', value: Math.round(Math.random() * 100000), rank: 3 },
    { name: '河北', value: Math.round(Math.random() * 100000), rank: 4 },
    { name: '河南', value: Math.round(Math.random() * 100000), rank: 5 },
    { name: '云南', value: Math.round(Math.random() * 100000), rank: 6 },
    { name: '辽宁', value: Math.round(Math.random() * 100000), rank: 7 },
    { name: '黑龙江', value: Math.round(Math.random() * 100000), rank: 8 },
    { name: '湖南', value: Math.round(Math.random() * 100000), rank: 9 },
    { name: '安徽', value: Math.round(Math.random() * 100000), rank: 10 },
  ];

  chinaMap.init($('#map-container'), mapData);
});

//库存产品占比
$(function() {
  var goodData = [
    { value: 335, name: '直接访问' },
    { value: 310, name: '邮件营销' },
    { value: 234, name: '联盟广告' },
    { value: 135, name: '视频广告' },
    { value: 900, name: '搜索引擎' },
  ];

  warehouseGood.init($('#warehouse-good'), goodData);
});

//员工操作
$(function() {
  var data = [
    {
      rank: 1,
      operation: '入库',
      state: '上架完成',
      number: '198,900',
      name: '刘永伟',
      time: '2019-08-09 12:00:00',
    },
    {
      rank: 2,
      operation: '入库',
      state: '上架完成',
      number: '198,900',
      name: '刘永伟',
      time: '2019-08-09 12:00:00',
    },
    {
      rank: 3,
      operation: '入库',
      state: '上架完成',
      number: '198,900',
      name: '刘永伟',
      time: '2019-08-09 12:00:00',
    },
    {
      rank: 4,
      operation: '入库',
      state: '上架完成',
      number: '198,900',
      name: '刘永伟',
      time: '2019-08-09 12:00:00',
    },
    {
      rank: 5,
      operation: '入库',
      state: '上架完成',
      number: '198,900',
      name: '刘永伟',
      time: '2019-08-09 12:00:00',
    },
    {
      rank: 6,
      operation: '入库',
      state: '上架完成',
      number: '198,900',
      name: '刘永伟',
      time: '2019-08-09 12:00:00',
    },
    {
      rank: 7,
      operation: '入库',
      state: '上架完成',
      number: '198,900',
      name: '刘永伟',
      time: '2019-08-09 12:00:00',
    },
    {
      rank: 8,
      operation: '入库',
      state: '上架完成',
      number: '198,900',
      name: '刘永伟',
      time: '2019-08-09 12:00:00',
    },
    {
      rank: 9,
      operation: '入库',
      state: '上架完成',
      number: '198,900',
      name: '刘永伟',
      time: '2019-08-09 12:00:00',
    },
    {
      rank: 10,
      operation: '入库',
      state: '上架完成',
      number: '198,900',
      name: '刘永伟',
      time: '2019-08-09 12:00:00',
    },
  ];
  staffOperation.init($('#current-state'), data);

  // $("#current-state").find('tbody').scrollTo(100,500);
});

//出入库统计
$(function() {
  //
  var delayTime = 5000;

  function yearData() {
    //近一年数据
    statisticsChart.init($('#statistics-chart'), xAxisData, data1, data2, data3);
  }

  function monthData() {
    //近一月数据
    statisticsChart.init($('#statistics-chart'), xAxisData, data3, data1, data1);
  }

  function next() {
    monthData();
    $('.statistics-chart')
      .find('.panel-header-button')
      .removeClass('active');

    $('.statistics-chart')
      .find('.panel-header-button')
      .eq(1)
      .addClass('active');
    setTimeout(pre, delayTime);
  }
  function pre() {
    yearData();
    $('.statistics-chart')
      .find('.panel-header-button')
      .removeClass('active');

    $('.statistics-chart')
      .find('.panel-header-button')
      .eq(0)
      .addClass('active');
    setTimeout(next, delayTime);
  }
  next();

  //按钮点击切换逻辑

  $('.statistics-chart')
    .find('.panel-header-button')
    .on('click', function() {
      $('.statistics-chart')
        .find('.panel-header-button')
        .removeClass('active');
      $(this).addClass('active');
      if ($(this).text() == '近一年') {
        yearData();
      } else {
        monthData();
      }
    });
});

//库存数
$(function() {
  var data = [{ name: '成品', data: data1 }, { name: '促销品', data: data2 }];
  warehouseValue.init($('#warehouse-value'), xAxisData, data);
});

//商品出库排名
$(function() {
  //假数据 - 当月
  var data = [
    { name: '三生花金盏花舒润 嫩肤面膜', value: 709488, rank: 1 },
    { name: '三生花山茶花清滢 保湿面膜', value: 665280, rank: 2 },
    { name: '百雀羚IFSCC 杰伦塑料袋', value: 464280, rank: 3 },
    { name: '三生花雪莲花晶采 亮肤面膜', value: 394848, rank: 4 },
    { name: '三生花金盏花舒润 嫩肤面膜', value: 709488, rank: 5 },
    { name: '三生花山茶花清滢 保湿面膜', value: 665280, rank: 6 },
    { name: '百雀羚IFSCC 杰伦塑料袋', value: 464280, rank: 7 },
    { name: '三生花雪莲花晶采 亮肤面膜', value: 394848, rank: 8 },
    { name: '百雀羚IFSCC 杰伦塑料袋', value: 464280, rank: 9 },
    { name: '三生花雪莲花晶采 亮肤面膜', value: 394848, rank: 10 },
  ];
  //假数据 - 当年
  var data1 = [
    { name: '三生花金盏1肤面膜', value: 122438, rank: 1 },
    { name: '三生花山茶花3保湿面膜', value: 5280, rank: 2 },
    { name: '百雀羚IFSCC 杰伦塑料袋', value: 412380, rank: 3 },
    { name: '三生花雪莲花1面膜', value: 3914848, rank: 4 },
    { name: '三生花金盏花舒润 嫩肤面膜', value: 712388, rank: 5 },
    { name: '三生花山茶花清滢 保湿面膜', value: 35280, rank: 6 },
    { name: '百雀羚IFSCC 杰伦塑料袋', value: 123280, rank: 7 },
    { name: '三生花雪3 亮肤面膜', value: 3123848, rank: 8 },
    { name: '百雀羚IFSCC 杰伦塑料袋', value: 423280, rank: 9 },
    { name: '三生花雪莲 面膜', value: 313848, rank: 10 },
  ];

  //当月数据显示
  function monthData() {
    goodRank.init($('#warehouse-good-rank'), data);
  }
  //当年数据显示
  function yearData() {
    goodRank.init($('#warehouse-good-rank'), data1);
  }
  //间隔时间
  var delayTime = 5000;

  function next() {
    monthData();

    $('#warehouse-good-rank-container')
      .find('.panel-header-button')
      .removeClass('active');

    $('#warehouse-good-rank-container')
      .find('.panel-header-button')
      .eq(1)
      .addClass('active');
    setTimeout(pre, delayTime);
  }
  function pre() {
    // $('#warehouse-good-rank').fadeOut(300).fadeIn(300)
    yearData();
    $('#warehouse-good-rank-container')
      .find('.panel-header-button')
      .removeClass('active');

    $('#warehouse-good-rank-container')
      .find('.panel-header-button')
      .eq(0)
      .addClass('active');
    setTimeout(next, delayTime);
  }
  next();

  $('#warehouse-good-rank-container')
    .find('.panel-header-button')
    .on('click', function() {
      $('#warehouse-good-rank-container')
        .find('.panel-header-button')
        .removeClass('active');
      $(this).addClass('active');
      if ($(this).text() == '近一年') {
        //这里插入一年的数据
        yearData();
      } else {
        //这里插入当月的数据
        monthData();
      }
    });
  // .animate({scrollTop: '300px'}, 8000).animate({scrollTop: '0px'}, 8000)
});
