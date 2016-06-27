function headerfix(){
                $(window).on('scroll', function(){
            var sc = $(this).scrollTop(),
                win_h = $(window).height(),
                head_h = $('#header').height(),
                head_top = $('#header').offset().top,
                hope_h = win_h - head_h;
            if(sc >= hope_h - 20){
                $('#header').addClass('scroll');
            }else{
                $('#header').removeClass('scroll');
            }
        });
};
