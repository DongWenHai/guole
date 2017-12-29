angular.module('app')
	.controller('selectedtypeController',['$scope',function($scope){
		$scope.productsdata = [
			{
				imgsrc:'./images/brand_type.png',
				title:'brand多口无线冲',
				infor:'5V 12A智能QI标准 多口无线二合一8口USB',
				price:'￥200'
			},
			{
				imgsrc:'./images/powerout@3x.png',
				title:'户外充电太阳能折叠包',
				infor:'18W自带照明警示灯solar charger',
				price:'￥205'
			},
			{
				imgsrc:'./images/EC2.00@3x.png',
				title:'高通QC3.0',
				infor:'精灵球伴侣移动电源 电商好评热销款qc3.0',
				price:'￥125'
			},
			{
				imgsrc:'./images/classy1type@3x.png',
				title:'classy1豆豆版',
				infor:'5200mah OEM 私模移动电源套料',
				price:'￥89'
			},
		]
	}])