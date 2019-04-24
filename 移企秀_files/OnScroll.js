/***********************************滚动触发方法*********************************************/
$(function() {

  var $window           = $(window),
      win_height_padded = $window.height() + 10,
      isTouch           = true;
	if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE6.0") 
	{ 
		$('.revealOnScroll').css("opacity","1");
	} 
	else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE7.0") 
	{ 
		$('.revealOnScroll').css("opacity","1");
	} 
	else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE8.0") 
	{ 
		$('.revealOnScroll').css("opacity","1");
	} 
	else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE9.0") 
	{ 
		$('.revealOnScroll').css("opacity","1");
	}

  //if (isTouch) { $('.revealOnScroll').addClass('animated'); }

  $window.on('scroll', revealOnScroll);

  function revealOnScroll() {
      var scrolled = $window.scrollTop(),
          win_height_padded = $window.height() - 100;

    //addclass
    $(".revealOnScroll:not(.animated)").each(function () {
        	  var $this = $(this),
            offsetTop = $this.offset().top;
        if (scrolled + win_height_padded > offsetTop) {
          if ($this.data('timeout')) {
            window.setTimeout(function(){
              $this.addClass('animated ' + $this.data('animation'));
            }, parseInt($this.data('timeout'),10));
          } else {
            $this.addClass('animated ' + $this.data('animation'));
          }
        }else{
          if ($this.data('timeout')) {
            window.setTimeout(function(){
              $this.addClass('animated ' + $this.data('animation'));
            }, parseInt($this.data('timeout'),10));
          } else {
            $this.addClass('animated ' + $this.data('animation'));
          }
        }
    });
    //removeclass
    $(".revealOnScroll.animated").each(function (index) {
        var $this     = $(this),
            offsetTop = $this.offset().top;
        if (scrolled + win_height_padded < offsetTop) {
          $(this).removeClass('animated '+$(this).data('animation'));
        }
    });
  }
  revealOnScroll();
});

//二维码展示效果
$(function(){
      var item_ul=$(".class_main4_img");
      var item_li=item_ul.children("li")
      var item_a=item_li.children("a");
      var erweima_img=$(".eqx_case_backImg");
      item_li.find("a").hover(function(){
        var index=$(this).index();
        $(this).find(".eqx_case_backImg").css({'opacity':'1','width':'190px','height':'190px','position':'absolute','top':'0px','left':'0px'})
      },function  () {
        $(this).find(".eqx_case_backImg").css({'opacity':'0','width':'90px','height':'90px','position':'absolute','top':'57px','left':'50px'})
      })
     
})