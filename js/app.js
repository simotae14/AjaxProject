$(function(){
	function handleMenu() {
		function toggleInfoPanel(anchor) {
			var infoPanelEl = $(this).siblings('.menu-item-info');
			infoPanelEl.toggleClass('is-visible');
		}
		$('.menu-item > a')
			.mouseover(toggleInfoPanel)
			.mouseout(toggleInfoPanel);
	}
});
