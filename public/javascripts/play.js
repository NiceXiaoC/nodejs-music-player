$(document).ready(function(){
	Player.init();
	$('#songs').live('click', function(e) {		
		path = $(this).attr("value");
		//首先清空歌曲数组列表
		Player.clearList();
		Player.add(path,'/upload/' + path);		
		Player.play(0);	
	});
});

