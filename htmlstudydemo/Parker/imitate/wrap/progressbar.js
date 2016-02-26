/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-11-10 17:13:05
 * @version $Id$ 计算进度条
 */

/* ---------------------------------------------- /*
 * Progress bars, counters animations
/* ---------------------------------------------- */
$(document).ready(function() {

	$('.progress-bar').each(function() {
	$(this).appear(function() {
		var percent = $(this).attr('aria-valuenow');
		$(this).animate({'width' : percent + '%'});
		$(this).find('.progress-value').countTo({from: 0, to: percent, speed: 900, refreshInterval: 30});
	});
});

$('.counter').each(function() {
	$(this).appear(function() {
		var number = $(this).find('.counter-timer').attr('data-to');
		$(this).find('.counter-timer').countTo({from: 0, to: number, speed: 1500, refreshInterval: 30});
	});
});
});
