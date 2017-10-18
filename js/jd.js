window.onload = function(){


	var p = document.getElementById('point');
	console.log(p);
	var pointArr = p.getElementsByTagName('a');
	var slidePic = document.getElementById('slide-pic');			
	var slideImageArr = slidePic.getElementsByTagName('img');  
	var imageCount = slideImageArr.length;
	for (var m = 0; m < imageCount; m++) {
		var a = document.createElement('a');
		a.innerHTML = m+1;
		console.log(a);
		a.index = m;
		if( m == 0){
			a.className = 'active';
		}
		p.appendChild(a);
		var select = 0;
		a.onclick = function(){
			select = this.index;
			changeImages(this.index);
		}
		a.onmouseover = function(){
			changeImages(this.index);
		}

		a.onmouseout = function(){
			changeImages(select);
		}
	}
	function changeImages(i){
		for (var j = pointArr.length - 1; j >= 0; j--) {
					var otherPoint = pointArr[j];
					// otherPoint.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
					otherPoint.className = '';
				}
			// this.style.backgroundColor = '#B1191A';
			pointArr[i].className = 'active';
			
			for (var n = slideImageArr.length - 1; n >= 0; n--) {
				var slideImage = slideImageArr[n];
				slideImage.style.display = 'none';
			}
			slideImageArr[i].style.display = 'block';
			
		}

	// 获取广告关闭按钮
	// 按钮的点击事件
	// 隐藏广告界面
	var close=document.getElementById("close");
	var ad=document.getElementById("ad");
	// ad.style.display="none";
	close.onclick=function(){
		// 隐藏一个DOM元素
		ad.style.display="none";
		console.log(ad);
	}
	// 登录框显示
	var loginButton=document.getElementById("loginButton");
	loginButton.onclick=function(){
		var loginMask=document.getElementById("login-mask");
		loginMask.style.display="block";
	}
	// 关闭登录界面
	var loginCancel=document.getElementById("login-cancel");
	loginCancel.onclick=function(){
		var loginMask=document.getElementById("login-mask");
		loginMask.style.display="none";

	}
}
	