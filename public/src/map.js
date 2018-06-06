// 百度地图API功能
var center = new BMap.Point(104.862946,31.333467);//伍佰村 徐老师
var city = new BMap.Point(105.06,31.10);//三台 
var test1 = new BMap.Point(104.86,31.33);//test1
var test2 = new BMap.Point(104.868,31.33);//test2
var test3 = new BMap.Point(104.865,31.336);//test1
var test4 = new BMap.Point(104.863,31.335);//test1
var test5 = new BMap.Point(104.866,31.334);//test1
var test6 = new BMap.Point(104.868,31.338);//test1
var test7 = new BMap.Point(104.861,31.331);//test1


map.centerAndZoom(center,15);	//初始化地图，设置中心点坐标和地图级别 
map.enableScrollWheelZoom(true); //滚轮滑动

map.addControl(new BMap.NavigationControl());    
map.addControl(new BMap.ScaleControl());    
map.addControl(new BMap.OverviewMapControl());    //添加控件系列

var marker = new BMap.Marker(center);
var marker2 = new BMap.Marker(city);
var marker3 = new BMap.Marker(test1);
var marker4 = new BMap.Marker(test2);
var marker5 = new BMap.Marker(test3);
var marker6 = new BMap.Marker(test4);
var marker7 = new BMap.Marker(test5);
var marker8 = new BMap.Marker(test6);
var marker9 = new BMap.Marker(test7);

map.addOverlay(marker);
map.addOverlay(marker2);
map.addOverlay(marker3);
map.addOverlay(marker4);
map.addOverlay(marker5);
map.addOverlay(marker6);
map.addOverlay(marker7);
map.addOverlay(marker8);
map.addOverlay(marker9);

marker.addEventListener("click",function(){
	var opts = {
		width: 250,
		height: 100,
		title: "徐老师"
	}
	var content = "姓名：徐老师，所在位置：四川省绵阳市三台县伍佰村智慧藤椒系统使用基地，手机号：13908233345";
	var infoWindow = new BMap.InfoWindow(content,opts);
	map.openInfoWindow(infoWindow,center);
});


marker2.addEventListener("click",function(){
	var opts = {
		width: 250,
		height: 100,
		title: "三台县"
	}
	var content = "基地所在县";
	var infoWindow = new BMap.InfoWindow(content,opts);
	map.openInfoWindow(infoWindow,city);
});

marker3.addEventListener("click",function(){
	var opts = {
		width: 250,
		height: 100,
		title: "用户一"
	}
	var content = "姓名：用户一，藤椒数量：3亩，所在位置：四川省绵阳市三台县，手机号：11111111111";
	var infoWindow = new BMap.InfoWindow(content,opts);
	map.openInfoWindow(infoWindow,test1);
});

marker4.addEventListener("click",function(){
	var opts = {
		width: 250,
		height: 100,
		title: "用户二"
	}
	var content = "姓名：用户二，藤椒数量：4亩，所在位置：四川省绵阳市三台县，手机号：12222222222";
	var infoWindow = new BMap.InfoWindow(content,opts);
	map.openInfoWindow(infoWindow,test2);
});

marker5.addEventListener("click",function(){
	var opts = {
		width: 250,
		height: 100,
		title: "用户三"
	}
	var content = "姓名：用户三，藤椒数量：2亩，所在位置：四川省绵阳市三台县，手机号：13333333333";
	var infoWindow = new BMap.InfoWindow(content,opts);
	map.openInfoWindow(infoWindow,test3);
});

marker6.addEventListener("click",function(){
	var opts = {
		width: 250,
		height: 100,
		title: "用户四"
	}
	var content = "姓名：用户四，藤椒数量：3亩，所在位置：四川省绵阳市三台县，手机号：14444444444";
	var infoWindow = new BMap.InfoWindow(content,opts);
	map.openInfoWindow(infoWindow,test4);
});

marker7.addEventListener("click",function(){
	var opts = {
		width: 250,
		height: 100,
		title: "用户五"
	}
	var content = "姓名：用户五，藤椒数量：4亩，所在位置：四川省绵阳市三台县，手机号：15555555555";
	var infoWindow = new BMap.InfoWindow(content,opts);
	map.openInfoWindow(infoWindow,test5);
});

marker8.addEventListener("click",function(){
	var opts = {
		width: 250,
		height: 100,
		title: "用户六"
	}
	var content = "姓名：用户六，藤椒数量：3亩，所在位置：四川省绵阳市三台县，手机号：16666666666";
	var infoWindow = new BMap.InfoWindow(content,opts);
	map.openInfoWindow(infoWindow,test6);
});

marker9.addEventListener("click",function(){
	var opts = {
		width: 250,
		height: 100,
		title: "用户七"
	}
	var content = "姓名：用户七，藤椒数量：6亩，所在位置：四川省绵阳市三台县，手机号：17777777777";
	var infoWindow = new BMap.InfoWindow(content,opts);
	map.openInfoWindow(infoWindow,test7);
});
