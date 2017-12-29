angular.module('app')
	.controller('classifyhotController',['$scope',function($scope){
		$scope.newproductsdata =[
			{
				imgsrc:'./images/brand_class@3x.png',
				name:'brand多口无线冲'
			},
			{
				imgsrc:'./images/outside_class@3x.png',
				name:'户外储能电源'
			},
			{
				imgsrc:'./images/YN-037_class@3x.png',
				name:'YN-037移动电源'
			},
			{
				imgsrc:'./images/classy2_cls@3x.png',
				name:'classy2小锁版'
			},
			{
				imgsrc:'./images/YN-013@3x.png',
				name:'YN-013移动电源'
			}
		];

		$scope.loveproductsdata = [
			{
				imgsrc:'./images/USB_m_class@3x.png',
				name:'USB多口移动冲'
			},
			{
				imgsrc:'./images/six_class@3x.png',
				name:'USB多口六输出'
			},
			{
				imgsrc:'./images/computer_class@3x.png',
				name:'笔记本p-17电源'
			},
			{
				imgsrc:'./images/classy1_cls@3x.png',
				name:'USB多口移动冲'
			},
			{
				imgsrc:'./images/office4@3x.png',
				name:'office4 电霸版'
			},
			{
				imgsrc:'./images/gun_class@3x.png',
				name:'弹夹式移动电源'
			}
		];

		$scope.giftproductsdata = [
			{
				imgsrc:'./images/ICBC@3x.png',
				name:'中国银行礼品定制'
			},
			{
				imgsrc:'./images/YN-004_class@3x.png',
				name:'YN-004 移动电源'
			},
			{
				imgsrc:'./images/yn-007_class@3x.png',
				name:'yn-007移动电源'
			},
			{
				imgsrc:'./images/YN-015_class@3x.png',
				name:'YN-015 移动电源'
			}
		];
	}])