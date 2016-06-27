function autoslide($wrap, $wrapsrc, l){
'use strict';
      
      var banner = $wrap,
          banLi = banner.find(l),
          banLiFirst = banner.find(l).first(),
          banLiWid = parseInt(banLi.width()),
          banLihei = banner.find(l).height(),
          bannerWidth = parseInt($('#banner').width()),
          
          l_btn = $('.l_btn'),
          r_btn = $('.r_btn'),
          
          
          slideTime = 1000,  // 배너움직이는 시간
          settingTime = 1100; // 슬라이가 작동되게 하는 시간(버튼)
 
      
        banLi.last().clone().prependTo($wrapsrc);
      // slidebtn 버튼클릭     
       l_btn.on('click', function(){
          var bannerML = parseInt(banner.css('margin-left'));
          if(bannerML == -bannerWidth){
            banner.stop().delay(100).animate({'margin-left':"+="+bannerWidth},slideTime, function(){
              banner.css({'margin-left':-bannerWidth*3})
            });
          }else{
            banner.stop().delay(100).animate({'margin-left':"+="+bannerWidth},slideTime)
            var bannerMarginCut = Math.abs( parseInt(banner.css('margin-left') ) ) / banner.find(l).width();
          };
        });
        
       
      
      
      
      var rightBtn = function(){
        r_btn.on('click', function(){
            var bannerML = parseInt(banner.css('margin-left'));
            if(bannerML <= -bannerWidth*3){
              banner.css({'margin-left':0}).stop().delay(100).animate({'margin-left':"-="+bannerWidth},slideTime);
            }else{
              banner.stop().delay(100).animate({'margin-left':"-="+bannerWidth},slideTime)
            };
          var bannerMarginCut = Math.abs( parseInt($('.ban').css('margin-left') ) ) / $('.ban').find(l).width();
           $('.ind li').eq(bannerMarginCut+1).addClass('indWidth').siblings().removeClass('indWidth');
        });
      }
      rightBtn();
      
 
  

    // 자동움직임
      // var timer;
      // 일정한 시간간격을 두고 움직이는기능 : setInterval
      function startBtn(){ settingTime = setInterval('$(".r_btn").click()', 3000) };
      //setInterval 취소시키는 기능: clearInterval
      function stopBtn(){	clearInterval( settingTime )};
      startBtn();
      $('#banner').on({mouseenter:stopBtn ,mouseleave:startBtn});
  

    }
