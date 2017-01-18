
window.onload=celan;
function celan(){
	var _ul=document.getElementById("list")
	var _box_list=document.getElementById("box-list");
	
	for(var i=0;i<_ul.children.length;i++){
		_ul.children[i].index=i;
		//console.log(i)
		//console.log($(".list")[0].children[i])
		_ul.children[i].onmouseover=function(){
		
			
			//alert("ok");
			//console.log(_box_list.children[this.index]);
		_box_list.children[this.index].style.display="block";
		_box_list.children[this.index].onmouseover=function(){
			this.style.display="block";
		}
		_box_list.children[this.index].onmouseout=function(){
			this.style.display="none";
		}
		}
		_ul.children[i].onmouseout=function(){
			for(var n=0;n<_box_list.children.length;n++){
				_box_list.children[n].style.display="none";
			}
		}
		
	
		
}
}
//============================轮播图
$(function(){
	function lunbo(){
	var i=0;
	var _timer=0;
	function delay(){
		//alert("ok")
		$("#banner-btn div span").eq(i).css("background","red");
		//console.log($("#banner-btn div span").eq(i));
		$("#banner-img li").eq(i).css({
			"display":"none",
			"opacity":0.3
		});
		//console.log($("banner-img li"));
		i++;
		if(i>=$("#banner-img li").size()){
			i=0;
		}
		$("#banner-img li").eq(i).css("display","block");
		$($("#banner-btn span")[i]).css("background","#ccc");
			player(true)
	}
	function player(_cmd){
		$("#banner-btn span").eq(i).css("background","#ccc");
		$("#banner-img li").eq(i).animate({
			"opacity":1,},600,function(){
				if(_cmd){
					window.clearTimeout(_timer);
					_timer=window.setTimeout(delay,1000);
				}else{
					$("#banner-img li").eq(i).stop();
					window.clearTimeout(_timer);
				}
			});
	}
	player(true);
	function eventHandle(_cutter){
		$("#banner-img li").eq(i).finish();
		$("#banner-img li").eq(i).css({
			"opacity":0.3,
			"display":"none"
		})
		$(_cutter).css("background","#CCCCCC");
		$("#banner-btn span").css("background","red");
		i=$(_cutter).index();
		$("#banner-img li").eq(i).css("display","block");
		window.clearTimeout(_timer);
		player(false);
	}
	
	$("#banner").mouseenter(function(){
		window.clearTimeout(_timer);
		$("#banner-img li").eq(i).stop();
	});
	$("#banner").mouseleave(function(){
		player(true);
	});
	
	$("#banner-btn span").mouseenter(function(){
		eventHandle(this);
	});
}
	lunbo();
//	二级导航栏
	(function erNav(){
		$(window).scroll( function() { 
			var scrollTop =$(this).scrollTop();
				console.log(scrollTop);
		if(
			scrollTop>=120
		){
			$("#er-nav").css("display","block");
		}else{
			$("#er-nav").css("display","none");
		}
		
		});
	})();
	
	
	
})











