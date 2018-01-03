angular.module('app')
	.factory('formatTime', [function () {
		return {
			format: function (time, format) {
				/*
			  **@ (new Date()).format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
				**@	(new Date()).format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
			  */
				//time: 需要格式化时间
				//format: 格式化规则
				var o = {
		      "M+": time.getMonth() + 1, 										//月份 
		      "d+": time.getDate(), 												//日 
		      "h+": time.getHours(), 												//小时 
		      "m+": time.getMinutes(), 											//分 
		      "s+": time.getSeconds(), 											//秒 
		      "q+": Math.floor((time.getMonth() + 3) / 3), 	//季度 
		      "S": time.getMilliseconds() 									//毫秒 
    		};
		    if (/(y+)/.test(format)){
		    	format = format.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
		    } 
		    for (var k in o){
		      if (new RegExp("(" + k + ")").test(format)) {
		      	format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		    	}
		    }
		    return format;
			}
		}
	}])