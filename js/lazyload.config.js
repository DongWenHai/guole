(function () {
var app = angular.module('app');

//配置懒加载信息
app.config(["$provide", "$compileProvider", "$controllerProvider", "$filterProvider", function ($provide, $compileProvider, $controllerProvider, $filterProvider) {
 app.controller = $controllerProvider.register;
 app.directive = $compileProvider.directive;
 app.filter = $filterProvider.register;
 app.factory = $provide.factory;
 app.service = $provide.service;
 app.constant = $provide.constant;
}])
	.config(["$ocLazyLoadProvider", function ($ocLazyLoadProvider) {
		$ocLazyLoadProvider.config({
	 		debug: false,
	 		events: false,
	 		modules: [
	 			//引导页
	 			{
			 		name: 'start',
			 		files: [
			 			'./views/start/start.css'
			 		]
			 	},
	 			{
			 		name: 'footer',
			 		files: [
			 			'./views/footer/footer.css'
			 		]
			 	},
			 	{
			 		name: 'home',
			 		files: [
			 			'./views/home/homeController.js',
			 			'./views/home/home.css'
			 		]
			 	},
			 	{
			 		name: 'homesearch',
			 		files: [
			 			'./views/homesearch/homesearchController.js',
			 			'./views/homesearch/homesearch.css'
			 		]
			 	},
			 	{
			 		name: 'phoneclassify',
			 		files: [
			 			'./views/phoneclassify/phoneclassifyController.js',
			 			'./views/phoneclassify/phoneclassify.css'
			 		]
			 	},
			 	{
			 		name: 'notebookclassify',
			 		files: [
			 			'./views/notebookclassify/notebookclassifyController.js',
			 			'./views/notebookclassify/notebookclassify.css'
			 		]
			 	},
			 	{
			 		name: 'carfireclassify',
			 		files: [
			 			'./views/carfireclassify/carfireclassifyController.js',
			 			'./views/carfireclassify/carfireclassify.css'
			 		]
			 	},
			 	//分类页
			 	{
			 		name: 'classify',
			 		files: [
			 			'./views/classify/classifyController.js',
			 			'./views/classify/classify.css'
			 		]
			 	},
			 	{
			 		name: 'classifyhot',
			 		files: [
			 			'./views/classifyhot/classifyhotController.js',
			 			'./views/classifyhot/classifyhot.css'
			 		]
			 	},
			 	{
			 		name: 'classifylistcontent',
			 		files: [
			 			'./views/classifylistcontent/classifylistcontentController.js',
			 			'./views/classifylistcontent/classifylistcontent.css'
			 		]
			 	},
			 	//精选页
			 	{
			 		name: 'selected',
			 		files: [
			 			'./views/selected/selectedController.js',
			 			'./views/selected/selected.css'
			 		]
			 	},
			 	{
			 		name: 'selectedtype',
			 		files: [
			 			'./views/selectedtype/selectedtypeController.js',
			 			'./views/selectedtype/selectedtype.css'
			 		]
			 	},
			 	//购物车
			 	{
			 		name: 'car',
			 		files: [
			 			'./views/car/carController.js',
			 			'./views/car/car.css'
			 		]
			 	},
			 	{
			 		name: 'confirmpay',
			 		files: [
			 			'./views/confirmpay/confirmpayController.js',
			 			'./views/confirmpay/confirmpay.css'
			 		]
			 	},
			 	{
			 		name: 'paynow',
			 		files: [
			 			'./views/paynow/paynowController.js',
			 			'./views/paynow/paynow.css'
			 		]
			 	},
			 	//个人中心
			 	{
			 		name: 'mine',
			 		files: [
			 			'./views/mine/mineController.js',
			 			'./views/mine/mine.css'
			 		]
			 	},
			 	{
			 		name: 'mineEdit',
			 		files: [
			 			'./views/mineEdit/mineEditController.js',
			 			'./views/mineEdit/mineEdit.css'
			 		]
			 	},
			 	{
			 		name: 'mineaddress',
			 		files: [
			 			'./views/mineaddress/mineaddressController.js',
			 			'./views/mineaddress/mineaddress.css'
			 		]
			 	},
			 	{
			 		name: 'mineset',
			 		files: [
			 			'./views/mineset/minesetController.js',
			 			'./views/mineset/mineset.css'
			 		]
			 	},
			 	{
			 		name: 'mineredpaper',
			 		files: [
			 			'./views/mineredpaper/mineredpaperController.js',
			 			'./views/mineredpaper/mineredpaper.css'
			 		]
			 	},
			 	{
			 		name: 'minecoupons',
			 		files: [
			 			'./views/minecoupons/minecouponsController.js',
			 			'./views/minecoupons/minecoupons.css'
			 		]
			 	},
			 	{
			 		name: 'minefactory',
			 		files: [
			 			'./views/minefactory/minefactoryController.js',
			 			'./views/minefactory/minefactory.css'
			 		]
			 	},
			 	{
			 		name: 'mineorder',
			 		files: [
			 			'./views/mineorder/mineorderController.js',
			 			'./views/mineorder/mineorder.css'
			 		]
			 	},
			 	//登录和注册
			 	{
			 		name: 'login',
			 		files: [
			 			'./views/login/loginController.js',
			 			'./views/login/login.css'
			 		]
			 	},
			 	{
			 		name: 'register',
			 		files: [
			 			'./views/register/registerController.js',
			 			'./views/register/register.css'
			 		]
			 	},
			 	//商品详情
			 	{
			 		name: 'product',
			 		files: [
			 			'./views/product/productController.js',
			 			'./views/product/product.css'
			 		]
			 	},
			 	{
			 		name: 'productdetail',
			 		files: [
			 			'./views/productdetail/productdetail.css'
			 		]
			 	},
			 	{
			 		name: 'productinformation',
			 		files: [
			 			'./views/productinformation/productinformation.css'
			 		]
			 	},
			 	//支付成功或失败
			 	{
			 		name: 'paysuccess',
			 		files: [
			 			'./views/paysuccess/paysuccessController.js',
			 			'./views/paysuccess/paysuccess.css'
			 		]
			 	},
			 	{
			 		name: 'payfail',
			 		files: [
			 			'./views/payfail/payfailController.js',
			 			'./views/payfail/payfail.css'
			 		]
			 	}
	 		]
 		});
	}]);
	
})();