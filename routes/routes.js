angular.module('app')
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/start');
		$stateProvider
			.state('start', {
				url: '/start',
				templateUrl: './views/start/start.html',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('start');
					}]
				}
			})
			.state('footer', {
				url: '',
				abstract:true,
				templateUrl: './views/footer/footer.html',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('footer');
					}]
				}
			})
			.state('footer.home', {
				url: '/home',
				templateUrl: './views/home/home.html',
				controller:'homeController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('home');
					}]
				}
			})
			.state('homesearch', {
				url: '/homesearch',
				templateUrl: './views/homesearch/homesearch.html',
				controller: 'homesearchController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('homesearch');
					}]
				}
			})
			.state('phoneclassify', {
				url: '/phoneclassify',
				templateUrl: './views/phoneclassify/phoneclassify.html',
				controller: 'phoneclassifyController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('phoneclassify');
					}]
				}
			})
			.state('notebookclassify', {
				url: '/notebookclassify',
				templateUrl: './views/notebookclassify/notebookclassify.html',
				controller: 'notebookclassifyController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('notebookclassify');
					}]
				}
			})
			.state('carfireclassify', {
				url: '/carfireclassify',
				templateUrl: './views/carfireclassify/carfireclassify.html',
				controller: 'carfireclassifyController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('carfireclassify');
					}]
				}
			})
			
			//分类页
			.state('footer.classify', {
				url: '',
				abstract:true,
				templateUrl: './views/classify/classify.html',
				controller: 'classifyController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('classify');
					}]
				}
			})
			.state('footer.classify.classifyhot', {
				url: '/classifyhot',
				templateUrl: './views/classifyhot/classifyhot.html',
				controller: 'classifyhotController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('classifyhot');
					}]
				}
			})
			.state('footer.classify.classifylistcontent', {
				url: '/classifylistcontent/:listdata',
				templateUrl: './views/classifylistcontent/classifylistcontent.html',
				controller: 'classifylistcontentController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('classifylistcontent');
					}]
				}
			})
			//精选页
			.state('footer.selected', {
				url: '',
				abstract:true,
				templateUrl: './views/selected/selected.html',
				controller: 'selectedController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('selected');
					}]
				}
			})
			.state('footer.selected.selectedtype', {
				url: '/selectedtype',
				templateUrl: './views/selectedtype/selectedtype.html',
				controller: 'selectedtypeController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('selectedtype');
					}]
				}
			})
			//购物车
			.state('footer.car', {
				url: '/car',
				templateUrl: './views/car/car.html',
				controller: 'carController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('car');
					}]
				}
			})
			.state('confirmpay', {
				url: '/confirmpay/:confirm',
				templateUrl: './views/confirmpay/confirmpay.html',
				controller: 'confirmpayController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('confirmpay');
					}]
				}
			})
			.state('paynow', {
				url: '/paynow/:order/:allMoney',
				templateUrl: './views/paynow/paynow.html',
				controller: 'paynowController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('paynow');
					}]
				}
			})
			//个人中心
			.state('footer.mine', {
				url: '/mine',
				templateUrl: './views/mine/mine.html',
				controller: 'mineController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('mine');
					}]
				}
			})
			.state('mineEdit', {
				url: '/mineEdit',
				templateUrl: './views/mineEdit/mineEdit.html',
				controller: 'mineEditController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('mineEdit');
					}]
				}
			})
			.state('mineaddress', {
				url: '/mineaddress',
				templateUrl: './views/mineaddress/mineaddress.html',
				controller: 'mineaddressController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('mineaddress');
					}]
				}
			})
			.state('mineset', {
				url: '/mineset',
				templateUrl: './views/mineset/mineset.html',
				controller: 'minesetController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('mineset');
					}]
				}
			})
			.state('mineredpaper', {
				url: '/mineredpaper',
				templateUrl: './views/mineredpaper/mineredpaper.html',
				controller: 'mineredpaperController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('mineredpaper');
					}]
				}
			})
			.state('minecoupons', {
				url: '/minecoupons',
				templateUrl: './views/minecoupons/minecoupons.html',
				controller: 'minecouponsController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('minecoupons');
					}]
				}
			})
			.state('minefactory', {
				url: '/minefactory',
				templateUrl: './views/minefactory/minefactory.html',
				controller: 'minefactoryController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('minefactory');
					}]
				}
			})
			.state('mineorder', {
				url: '/mineorder',
				templateUrl: './views/mineorder/mineorder.html',
				controller: 'mineorderController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('mineorder');
					}]
				}
			})
			//登录和注册
			.state('login', {
				url: '/login',
				templateUrl: './views/login/login.html',
				controller: 'loginController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('login');
					}]
				}
			})
			.state('register', {
				url: '/register',
				templateUrl: './views/register/register.html',
				controller: 'registerController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('register');
					}]
				}
			})
			//产品详情
			.state('product', {
				url: '',
				abstract: true,
				templateUrl: './views/product/product.html',
				controller: 'productController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('product');
					}]
				}
			})
			.state('product.productdetail', {
				url: '/productdetail',
				templateUrl: './views/productdetail/productdetail.html',
				controller: 'productController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('productdetail');
					}]
				}
			})
			.state('product.productinformation', {
				url: '/productinformation',
				templateUrl: './views/productinformation/productinformation.html',
				controller: 'productController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('productinformation');
					}]
				}
			})
			//支付成功或失败
			.state('paysuccess', {
				url: '/paysuccess',
				templateUrl: './views/paysuccess/paysuccess.html',
				controller: 'paysuccessController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('paysuccess');
					}]
				}
			})
			.state('payfail', {
				url: '/payfail',
				templateUrl: './views/payfail/payfail.html',
				controller: 'payfailController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('payfail');
					}]
				}
			})
	}])