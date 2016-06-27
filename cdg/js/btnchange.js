function btnchange($box, $table){
      var tablebtn = $box.find('button');
      var tablewrap = $table;
      tablebtn.on('click', function(e){
        e.preventDefault();
      var table_i = $(this).index();
      var $this = $(this);
        tablewrap.removeClass('table_hide').eq(table_i - 1).siblings().addClass('table_hide');
        $this.addClass('addColor').siblings().removeClass('addColor');
      });               
  
  
};
