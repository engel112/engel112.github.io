function gallery(){
	var imgbox     = $('.fullbox'),
			gallerybox = $('#full_image'),
			gallerybtn = gallerybox.find('a');

	imgbox.html("<img src='./img/section/data/imsi.jpg' alt='아래 메뉴에서 원하는 이미지를 선택해주세요'>");

	// 이미지 설명넣기위한 상자만들기

	// 좌/우 버튼 클릭
	var gal_btn           = $('.gall_btn'),
			thum_box          = $('.thumbox'),
			thum_box_w        = $('.thumbox').width(),
			thum_box_ul       = thum_box.children('ul'),
			list_length	      =	5, // li크기값 및 반복처리할 갯수 설정
			thum_box_li       = thum_box_ul.find('li'),
			widbox = Math.round(thum_box_w / list_length);
			thum_box_li_w     = thum_box_li.width( widbox ), 
			thum_box_li_width = thum_box_li.width(), // li크기값 가져오기(설정한 값을 가져와서 ul의 크기값 배정)
			thum_box_li_set   = thum_box_li.length, // thumnail 이미지 보이는 갯수파악하기
			thum_box_ul_width = thum_box_li_width * thum_box_li_set *2;
			move_length	      = thum_box_li.eq(list_length);

	//-------------------------------------------
	thum_box_li.last().prependTo(thum_box_ul);

	thum_box_ul.width(thum_box_ul_width);
	thum_box_ul.css({'margin-left':-thum_box_li_width});

	var gulWidth = thum_box_ul.width(thum_box_ul_width);

	// 이미지 클릭
	gallerybtn.on('click', function(e){
		e.preventDefault();
			
		var imgspan = imgbox.find('div'),
				data_img = $(this).attr("data-img"),
				a_nar = $(this).text();
				a_el = $(this).html();

			// 갤러리 큰창에 이미지 및 alt값 넣기	
		imgbox.find('img')
					.attr({'src': data_img, 'alt':a_nar});

	}); // gallerybtn.click
}; // gallery
