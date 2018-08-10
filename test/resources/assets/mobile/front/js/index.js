


window.onload=function(){
			//获得slider插件对象
		
		var gallery = mui('.mui-slider');
		gallery.slider({
		  interval:2000//自动轮播周期，若为0则不自动播放，默认为0；
		});
}

var flag=true;  //这个flag必须放在全局变量，不然放函数里面会反复执行flag=true
function index_cont1_change1(){
	var change=document.getElementById("index_cont1_change");
    var dis1=document.getElementById("index_cont1_banner_dis1");
    var dis2=document.getElementById("index_cont1_banner_dis2");
    var dis3=document.getElementById("index_cont1_banner_dis3");
    change.style.cursor="pointer";
    if(flag){
        dis1.style.display="none";
        dis2.style.display="block";
        dis3.style.display="none";
        flag=false;  //flag在变回错误才能执行else的选项
    }else if(flag){
         dis1.style.display="none";
        dis2.style.display="none";
        dis3.style.display="block";
         flag=false;  //flag变回true才能执行if里的语句
     }else{
     	dis1.style.display="block";
        dis2.style.display="none";
        dis3.style.display="none";
         flag=true;  //flag变回true才能执行if里的语句
     }
}

var flag1=true; 
function index_cont1_change2(){
	var change=document.getElementById("index_cont1_change2");
    var dis1=document.getElementById("index_cont4_banner_dis2");
    var dis2=document.getElementById("index_cont4_banner_dis3");
    var dis3=document.getElementById("index_cont4_banner_dis4");
    change.style.cursor="pointer";
    if(flag1){
        dis1.style.display="none";
        dis2.style.display="block";
        dis3.style.display="none";
        flag1=false;  //flag在变回错误才能执行else的选项
    }else if(flag1){
         dis1.style.display="none";
        dis2.style.display="none";
        dis3.style.display="block";
         flag1=false;  //flag变回true才能执行if里的语句
     }else{
     	dis1.style.display="block";
        dis2.style.display="none";
        dis3.style.display="none";
         flag1=true;  //flag变回true才能执行if里的语句
     }
}


window.onload=function(){
	//跳转
	$(".find nav ul li").each(function(i){
		$(".find nav ul li").eq(i).click(function(){
			$(".class_share").hide();
			$(".find nav ul li a").removeClass("find_cur");
			$(".class_share").eq(i).show();
			$(".find nav ul li a").eq(i).addClass("find_cur")
		})
			$(".class_share").eq(0).show();
	})
	//点赞
	$(".icons").each(function(k){
		var icon=$(".icons").eq(k).find(".icon");
		var color=true;
		var dznum=$(".dz-num").eq(k).text();
		var applynum=$(".apply-num").eq(k).text();
		icon.eq(0).click(function(){
			if(color){
				icon.eq(0).css("fill","#f01414");
				color=false;
				dznum=parseInt(dznum)+1;
				$(".dz-num").eq(k).text(dznum);
			}else{
				icon.eq(0).css("fill","#333");
				color=true;
				dznum=parseInt(dznum)-1
				$(".dz-num").eq(k).text(dznum);
			};
		})
		icon.eq(1).click(function(){
			//$(".apply-input").show();
			var case_height = $(this).parents(".case").height();
			//alert(case_height);
			$(".apply-input").css({"left":"50px","top":"case_height+'px","position":"absolute","display":"block"})
		})
	})
	//tool跳转
	$(".tool").click(function(){
		$(".mui-title").text("动态");
		$(".find").css("display","none");
		$(".class_share2").css("display","block");
		$(".class_share2").find("textarea").focus(function(){
			$(this).attr('placeholder','')
		})
		$(".mui-action-back").click(function(){
			$(".mui-title").text("发现");
			$(".find").css("display","block");
			$(".class_share2").hide();
		})
	})
	//评论符号
	/*$(".icons").each(function(k){
		var icon=$(".icons").eq(k).find(".icon");
		icon.eq(1).click(function(){
			alert("qqqqqqqqqqqqqqq")
			$(".apply-input").show();
			var case_height = $(this).parents("case").attr("height");
			alert(case_height)
			$(".apply-input").css({"left":"","":""})
		})
	})
	*/
}