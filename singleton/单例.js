//第一种方式  单例的一种模式
var  someClass = {
	_singleton :null,
	getInstace :function  () {
		if(!this._singleton){
			this._singleton={
				//
			}
		}
		return this._singleton;
	}
}


var Singleton  = (function  () {
	var instance;
	function  init () {
		return {
			publicMethod:function  () {
				console.log('hello world');
			},
			publicProperty:"test"
		}
	};
	return {
		getInstace:function  () {
			if(!instance){
				instance = init();
			}
			return instance;
		}
	}
});

//通过调用公有的方法来获取实例

Singleton.getInstace().publicProperty



//3 
function Universe() {
	if(typeof Universe.instance ==='object'){
		return Universe.instance;
	}
	this.a = 'a';
	this.b = "b";
	Universe.instance = this
};

var uni1 = new Universe();
var uni2 = new Universe();
console.log(uni1 ==uni2);
uni1.c ='c';
console.log(uni2.c)

//4 
function Universe () {
	var instance = null;//缓存实例
	this.s = '0';
	Universe = function  () {
		//重写构造函数
		return instance;
	}
}

var uni1 = new Universe();
var uni2 = new Universe();
uni1 == uni2
