$(document).ready(function(){
 
	var data_arr = [
					'',
					'<iframe src="https://www.youtube.com/embed/6kl2ouO3LMM?si=m_Kol4N9EXWj7w3B" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
					'<iframe src="https://www.youtube.com/embed/YgzoCfAf9AY?si=nh5ufr-XYXdrbctN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
					'<iframe src="https://www.youtube.com/embed/rJgOK4RB_yM?si=qKTGW5smxTDy7StZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
					'<iframe src="https://www.youtube.com/embed/4D8EJ8vIYYE?si=edMxOXUP_Fkh9wJk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
					'<iframe src="https://www.youtube.com/embed/f6dXahYyrZQ?si=AchQ4ud9dy_tZemC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
					'<iframe src="https://www.youtube.com/embed/-nXNYeX-fIU?si=P1aEZN01ZbRMqx4R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
				]

	$(document).on('click','.play',function(){  
		var attr_data_id = $(this).attr('data_id'); 
		for (let index = 0; index < data_arr.length; index++) {
			 if(attr_data_id == index){ 
				$('.popup-video').html(data_arr[index]);
			 }
		}
		$('.popup-video').css({'display':'flex'});
		$('.popup_overlay').show();
		return false;
	});

	$(document).on('click','.popup_overlay',function(){ 
		$('.popup-video').hide();
		$('.popup_overlay').hide();
		return false;
	});

	



});