angular.module('app')
	.factory('isValid',[function(){

		return{
			//验证非空，非空返回ture,空返回false
			isNotEmputy: function(val){
				return val =='' ? false : true;
			},

			//验证长度，bool为true范围内返回true,bool为false等于minLength或maxLength返回ture
			isLength: function(val,minLength,maxLength,bool){
				bool = bool || false;
				if(bool){
					return (val.length == minLength || val.length == maxLength) ? true : false;
				}else{
					return (val.length>=minLength && val.length<=maxLength) ? true : false;
				}
				
			},

			//验证正则,匹配返回true
			isRegexp: function(val,reg){
				return reg.test(val);
			console.log(typeof reg);
			},

			//验证是否相等
			isEqual: function(val1,val2){
				return val1 == val2 ? true : false;
			}
		}

	}])