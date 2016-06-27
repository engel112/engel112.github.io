function season(){
var window_w = $(window).width();
    
    if(window_w <= 768){
        
        
    
// 계절 창 효과
          var $season = $('.season'),
              $season_div = $season.find('div'),
              $seasonBox_wrap = $('.season_Box'),
              $seasonBox = $('.season_Box').find('ul');
          $season_div.on('click', function(e){
              e.preventDefault();
              var i_index = $(this).index();
            $season_div.eq(i_index).css({'width': 'calc(75% - 20px)'});
              var $spring = $season.find('div').eq(0);
              var $summer = $season.find('div').eq(1);
              var $autumn = $season.find('div').eq(2);
              var $winter = $season.find('div').eq(3);
              var $all = {'width':'calc(50% - 20px)'}
              var $small = {'width':'calc(25% - 20px)'}
              if(i_index == 0)
              {$summer.css($small)
              $autumn.css($all)
              $winter.css($all)
              }else if(i_index == 1){
                $spring.css($small)
                $autumn.css($all)
                $winter.css($all)
              }else if(i_index == 2){
                $spring.css($all)
                $summer.css($all)
                $winter.css($small)
              }else if(i_index == 3){
                $spring.css($all)
                $summer.css($all)
                $autumn.css($small)
                      
                  };
          });
  
// 계절 갤러리
            $season_div.on('click', function(){
                var $seasonUl = $(this).find('ul');
                $seasonUl.animate({'right':'0'}, 300);
                $season_div.not($(this)).find('ul').animate({'right' : '-65%'}, 300);
            });
            
          $season.on('mouseleave', function(){
           $season_div.css({'width': 'calc(50% - 20px)'}, 300);
              $seasonBox.animate({'right' : '-65%'}, 300);
          });
    $seasonBox.find('a').on('click',function(){
        
    });
    
//이미지 풀사이즈
    var imgbox = $('.season_fullbox'),
        gallerybox = $('.season_img_box'),
        gallerybtn = gallerybox.find('a');
    
    imgbox.html("<img src=''>").find('img');
    
    gallerybtn.on('click', function(e){
		e.preventDefault();
			imgbox.fadeIn();
        imgbox.on('click',function(){
            imgbox.fadeOut();
        });
		var imgspan = imgbox.find('div'),
				data_img = $(this).attr('data-img'),
				a_nar = $(this).text();

			// 갤러리 큰창에 이미지 및 alt값 넣기	
		imgbox.find('img')
					.attr({'src': data_img, 'alt':a_nar});

	}); // gallerybtn.click
    
        
    }; // tab + mob
        
        
    if(window_w > 768){
    
// 계절 창 효과
          var $season = $('.season'),
              $season_div = $season.find('div'),
              $seasonBox_wrap = $('.season_Box'),
              $seasonBox = $('.season_Box').find('ul');
          $season_div.on('click', function(e){
              e.preventDefault();
              var i_index = $(this).index();
            $season_div.eq(i_index).css({'width': 'calc(58% - 20px)'}).siblings('div').css({'width':'calc(14% - 20px)'});
          });
  
// 계절 갤러리
            $season_div.on('click', function(){
                var $seasonUl = $(this).find('ul');
                $seasonUl.animate({'right':'0'}, 300);
                $season_div.not($(this)).find('ul').animate({'right' : '-65%'}, 300);
            });
            
          $season.on('mouseleave', function(){
           $season_div.css({'width': 'calc(25% - 20px)'}, 300);
              $seasonBox.animate({'right' : '-65%'}, 300);
          });
    $seasonBox.find('a').on('click',function(){
        
    });
    
//이미지 풀사이즈
    var imgbox = $('.season_fullbox'),
        gallerybox = $('.season_img_box'),
        gallerybtn = gallerybox.find('a');
    
    imgbox.html("<img src=''>").find('img');
    
    gallerybtn.on('click', function(e){
		e.preventDefault();
			imgbox.fadeIn();
        imgbox.on('click',function(){
            imgbox.fadeOut();
        });
		var imgspan = imgbox.find('div'),
				data_img = $(this).attr('data-img'),
				a_nar = $(this).text();

			// 갤러리 큰창에 이미지 및 alt값 넣기	
		imgbox.find('img')
					.attr({'src': data_img, 'alt':a_nar});

	}); // gallerybtn.click
    
        
        }; // pc
    
};
