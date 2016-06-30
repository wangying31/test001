
//cmd  定义模块 
//define(function(){

	module.exports = {
		plus : function(n1,n2){
			return n1 + n2;
		},
		minus : function(n1,n2){
			return n1 - n2;
		},
		random : function(){
			return (Math.random()*100+1).toFixed(2);
		}
		
	}

//})







