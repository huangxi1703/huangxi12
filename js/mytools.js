	//传入一个id返回一个标签
	function $(id){
		return document.getElementById(id);
	}
	//返回给定数的阶乘
	function nn(num1){
		if(num1==1){
			return 1;
		}
		return num1* nn(num1-1);
	}
	/*
	功能：在数组中查找某个元素
	参数1：数组
	参数2：目标元素
	返回值：true-找到了；false-没找到
	**/
	function has(arr,n){
		for(var i=0;i<arr.length;i++){
			if(arr[i]==n){
				return true;
			}
		}
		return false;		
	}
	/*
	功能：返回两个数之间的随机整数
	参数1：开始数
	参数2：结束数
	返回值：随机整数
	**/	
	function areaRandom(min,max){//
		var num=max-min;
		num=parseInt(Math.random()*(num+1));
		return num+min;
	}
	/*
	功能：产生#ffff内的随机颜色
	返回值：#开头的十六进制6位颜色值
	**/	
	function randomColor(){
		var str="#";
		for(var i=0;i<6;i++){
			var num1=areaRandom(0,15);
			str+=num1.toString(16);
		}
		return str;
	}
	/*
	功能：返回汉字星期
	参数1：日期对象
	返回值：字符串星期（汉字）
	**/	
	function getWeek(date){
		switch(date.getDay()){
			case 0:return "星期天";
			case 1:return "星期一";
			case 2:return "星期二";
			case 3:return "星期三";
			case 4:return "星期四";
			case 5:return "星期五";
			case 6:return "星期六";
			default:break;
		}		
	}
	/*
	功能：返回日期（yyyy年MM月dd日）
	参数1：日期对象
	返回值：字符串日期（yyyy年MM月dd日）
	**/	
	function formatDate(date){
		var year=date.getFullYear();
		var month=date.getMonth()+1;
		var day=date.getDate();
		return year+"年"+month+"月"+day+"日";
	}
	/*
	功能：计算两个日期之间的天数
	参数1：第一个日期对象
	参数1：第二个日期对象
	返回值：日期天数的差（整数）
	**/	
	function dateDifference(date1,date2){
		var num1=date1.getTime();
		var num2=date2.getTime();
		return Math.ceil((num2-num1)/(1000*60*60*24));
	}
	/*
	月份差
	**/
	function getMonthCha(date1,date2){
		if(date2<date1){
			var temp=date1;
			date1=date2;
			date2=temp;
		}
		var year1=date1.getFullYear();
		var year2=date2.getFullYear();
		var month1=date1.getMonth();
		var month2=date2.getMonth();
		return (year2-year1)*12+(month2-month1);
	}
	/*
	是否闰年
	**/	
	
	function hasRun(year){
		if((year%4==0 && year%100!=0)||year%400==0){
			return true;
		}else{
			return false;
		}
	}
	/*
	功能：返回节点的某类型的子节点
	参数1：节点
	参数1：节点类型
	返回值：符合传入类型的子节点（数组）
	**/	
	function getElementChilds(node,type){
		var arr=[];
		for(var i in node.childNodes){
			if( node.childNodes[i].nodeType==type){
				arr.push(node.childNodes[i]);
			}
		}
		return arr;
	}
	function getElementNode(node,type){
		var arr=[];
		var arr1=node.childNodes;
		for(var i in arr1){
			if(arr1[i].nodeType==type){
				arr.push(arr1[i]);
			}
		}
		return arr;		
	}
	/*
	功能：取得样式的值
	参数1：元素
	参数2：样式名
	返回值：样式的值
	**/	
	function getStyle(obj,attrName){
		if(obj.currentStyle){
			return obj.currentStyle[attrName];
		}else{
			return window.getComputedStyle(obj,false)[attrName];
		}
	}
	/*
	功能：设置cookie
	参数1：键名
	参数2：值
	参数3：过期值（天数）
	返回值：true:false
	**/	
	function setCookie(key,value,time){
		if(isCookie()){
			var date=new Date();
			date.setDate(date.getDate()+time);
			document.cookie=key+"="+value+"; expires="+date.toGMTString();
			return true;
		}else{
			return false;
		}
	}
	/*
	功能：获取cookie
	参数1：键名
	返回值：string:null:undefined
	**/	
	function getCookie(key){
		if(isCookie()){
			var arr=document.cookie.split("; ");
			for(var i in arr){
				var item=arr[i].split("=");
				if(item[0]==key){
					return item[1];
				}
			}
			return null;
		}else{
			return undefined;
		}
	 }
	/*
	功能：判断浏览器是否禁用cookie
	返回值：true:false
	**/	
	 function isCookie(){
		return navigator.cookieEnabled?true:false;
	 }
	 /*
	功能：删除cookie
	参数1：键名
	返回值：true:false
	**/	
	function delCookie(key){
		if(isCookie()){
			var date=new Date();
			date.setDate(date.getDate()-1);
			document.cookie=key+"=1; expires="+date.toGMTString();
			return true;
		}else{
			return false;
		}	
	}
	 /*
	功能：正则验证
	参数1：验证类型
	参数2：验证的字符串
	返回值：true:false
	**/		
	function checkAll(type,value){ 		 //type是你要验证的类型（自定），value验证该值
		switch(type) {				//判断该类型       
		case 'Phone':   			//如果类型是Phone的话，就执行下面的判断  
			if((/^1[34578]\d{9}$/).test(value)){   //1开头后跟345678，后跟9个数字，结尾
				return true;   
			}else{  
				return false;
			}  
			break;  
		case 'Email':  
			if((/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/).test(value)){   
				return true;   
			}else{  
				return false;
			}  
			break; 
		}  
	} 
	 /*
	功能：拖拽
	参数1：拖拽的元素
	返回值：无
	**/		
	function drup(obj){
		obj.onmousedown=function(){
			let e=myEventUtil.getEvent();
			let x=e.offsetX;
			let y=e.offsetY;
			document.onmousemove=function(){
				let e=myEventUtil.getEvent();
				obj.style.top=e.clientY-y+"px";
				obj.style.left=e.clientX-x+"px";
			};
			document.onmouseup=function(){
				document.onmousemove=null;
			};
			return false;
		};
	}
	/*
	3) 字符串相关（12分）
	**/
	function changeStr(a,b){
		var str="";
		var arr=a.split(b);
		str=arr[0];
		for(var i=1;i<arr.length;i++){
			if(arr[i].length>0){
				var str2=arr[i][0].toUpperCase();
				var str3=arr[i].substring(1);
				str+=str2+str3;
			}
		}
		return str;
	}
	/*
	1)	切割字符串相关（8分）
	**/
	function mySubString(str,index1,index2){
		var str1="";
		for(let i=index1;i<index2;i++){
			str1+=str[i];
		}
		return str1;
	}
	/*
	2) DOM封装（15分）
	**/
	function $create(str){
		let obj;
		//let reg=/^\<[a-zA-Z]+\>$/;
		if(str[0]=="<" && str[str.length-1]==">"){
			let str1=str.substring(1);
			alert(str1);
			let str2=str1.substring(0,str1.length-1);
			alert(str2);
			obj=document.createElement(str2);
		}else{
			obj=document.createTextNode(str);
		}
		return obj;
	}