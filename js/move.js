	/**
	obj上下左右移动到target
	*/
	function move1(obj,target,attr){//"left" "top"
		clearInterval(timer);//消除抖动现象
		timer=setInterval(function(){
			let attrValue=parseInt(getStyle(obj,attr));
			let speed=(attrValue>target)?-10:10;
			//当前位置与目标位置的差小于速度
			//必须求绝对值保证运算正确
			if((Math.abs(attrValue-target))<Math.abs(speed)){
				obj.style[attr]=target+"px";
				//清除定时器
				clearInterval(timer);
			}else{
				//修改坐标实现运动
				obj.style[attr]=attrValue+speed+"px";	
			}				
		},30);
	}
	//缓冲运动
	function move4(obj,target,attr){
		clearInterval(timer);//消除抖动现象
		timer=setInterval(function(){
			//当前位置
			let attrValue=parseInt(getStyle(obj,attr));
			//算出的速度
			let speed=(target-attrValue>0)?Math.ceil((target-attrValue)/7):Math.floor((target-attrValue)/7);
			if(attrValue==target){
				clearInterval(timer);
			}else{
				obj.style[attr]=attrValue+speed+"px";
			}
		},30);
	}
	/*目标淡入淡出**/
	function move5(obj,target){
		clearInterval(timer);
		timer=setInterval(function(){
			let attrValue=getStyle(obj,"opacity")*100;//透明度要乘100，放大进行运算
			let speed=(target-attrValue)/7;
			speed=(speed>0)?Math.ceil(speed):Math.floor(speed);
			if(attrValue==target){
				clearInterval(timer);
			}else{
				//给元素赋值时，要考虑兼容性
				obj.style["filter"]=`alpha(opacity:${attrValue+speed})`;
				obj.style["opacity"]=(attrValue+speed)/100;
			}		
		},30);
	}
	/*多物体淡入淡出**/
	function move6(obj,target){
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			let attrValue=getStyle(obj,"opacity")*100;//透明度要乘100，放大进行运算
			let speed=(target-attrValue)/7;
			speed=(speed>0)?Math.ceil(speed):Math.floor(speed);
			if(attrValue==target){
				clearInterval(obj.timer);
			}else{
				//给元素赋值时，要考虑兼容性
				obj.style["filter"]=`alpha(opacity:${attrValue+speed})`;
				obj.style["opacity"]=(attrValue+speed)/100;
			}		
		},30);
	}
/*目标淡入淡出**/	
	function move7(obj,target){//运动对象和目标值
		clearInterval(timer);//清除定时器
		timer=setInterval(function(){//开启定时器
			let curt=getStyle(obj,"opacity")*100;//去的当前值
			let speed=(target-curt)/10;//计算速度
			speed=(speed>0)?Math.ceil(speed):Math.floor(speed);//速度取整
			if(target==curt){//判断目标是否达到
				clearInterval(timer);//清除定时器
			}else{
				obj.style["opacity"]=(curt+speed)/100;//赋值
				obj.style["filter"]=`alpha(opacity:${curt+speed})`;
			}
		},30);
	}
	/*多物体淡入淡出**/
	function move8(obj,target){//运动对象和目标值
		clearInterval(obj.timer);//清除定时器
		obj.timer=setInterval(function(){//开启定时器
			let curt=getStyle(obj,"opacity")*100;//去的当前值
			let speed=(target-curt)/10;//计算速度
			speed=(speed>0)?Math.ceil(speed):Math.floor(speed);//速度取整
			if(target==curt){//判断目标是否达到
				clearInterval(obj.timer);//清除定时器
			}else{
				obj.style["opacity"]=(curt+speed)/100;//赋值
				obj.style["filter"]=`alpha(opacity:${curt+speed})`;
			}
		},30);
	}
	/*多物体 单个属性**/
	function move9(obj,target,attr){
		clearInterval(obj.timer);//消除抖动现象
		obj.timer=setInterval(function(){
			//当前值
			obj.curt=0;
			if(attr=="opacity"){
				obj.curt=getStyle(obj,attr)*100;
				console.log(obj.curt+obj.innerHTML);
			}else{
				obj.curt=parseInt(getStyle(obj,attr));
			}
			//算出的速度
			let speed=(target-obj.curt>0)?Math.ceil((target-obj.curt)/7):Math.floor((target-obj.curt)/7);
			if(obj.curt==target){
				clearInterval(obj.timer);
			}else{
				if(attr=="opacity"){
					obj.style["opacity"]=(obj.curt+speed)/100;//赋值
					obj.style["filter"]=`alpha(opacity:${obj.curt+speed})`;
				}else{
					obj.style[attr]=obj.curt+speed+"px";
				}
			}
		},30);
	}
	/*多物体多属性同时运动**/
	function movex(obj,attrs){
		clearInterval(obj.timer);//消除抖动现象
		obj.timer=setInterval(function(){
			let isEnd=false;
			for(let attr in attrs){//遍历对象的属性
				//当前值
				obj.curt=0;
				if(attr=="opacity"){
					obj.curt=getStyle(obj,attr)*100;
				}else{
					obj.curt=parseInt(getStyle(obj,attr));
				}
				//算出的速度
				let speed=(attrs[attr]-obj.curt>0)?Math.ceil((attrs[attr]-obj.curt)/7):Math.floor((attrs[attr]-obj.curt)/7);
				if(obj.curt==attrs[attr]){
					isEnd=true;					
				}else{
					isEnd=false;
					if(attr=="opacity"){
						obj.style["opacity"]=(obj.curt+speed)/100;//赋值
						obj.style["filter"]=`alpha(opacity:${obj.curt+speed})`;
					}else{
						obj.style[attr]=obj.curt+speed+"px";
					}
				}				
			}
			if(isEnd){
				clearInterval(obj.timer);
			}
		},30);
	}
	/*链式运动
	缺少使用isEnd记录是否所有目标都达到
	isEnd==true关闭定时器
	**/
	function movel(obj,attrs,fun){
		clearInterval(obj.timer);//消除抖动现象
		obj.timer=setInterval(function(){
			for(let attr in attrs){//遍历对象的属性
				//当前值
				obj.curt=0;
				if(attr=="opacity"){
					obj.curt=getStyle(obj,attr)*100;
				}else{
					obj.curt=parseInt(getStyle(obj,attr));
				}
				//算出的速度
				let speed=(attrs[attr]-obj.curt>0)?Math.ceil((attrs[attr]-obj.curt)/7):Math.floor((attrs[attr]-obj.curt)/7);
				if(obj.curt==attrs[attr]){
					clearInterval(obj.timer);
					if(fun){fun();}
				}else{
					if(attr=="opacity"){
						obj.style["opacity"]=(obj.curt+speed)/100;//赋值
						obj.style["filter"]=`alpha(opacity:${obj.curt+speed})`;
					}else{
						obj.style[attr]=obj.curt+speed+"px";
					}
				}				
			}
		},30);
	}
