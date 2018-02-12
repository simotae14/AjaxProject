$(function(){
	var containerEl = $('#main-menu');
	function handleMenu() {
		function toggleInfoPanel(anchor) {
			var infoPanelEl = $(this).siblings('.menu-item-info');
			infoPanelEl.toggleClass('is-visible');
		}
		$('.menu-item > a')
			.mouseover(toggleInfoPanel)
			.mouseout(toggleInfoPanel);
	}

	function buildMenuItem(data) {
		var liEl,
			infoPanelEl;

		liEl = $('<li class="menu-item">' + 
									'<a href="#">' + data.title + '</a>' + 
									'<div class="menu-item-info"></div>' + 
							'</li>');
		return liEl;
	}

	$.get('api/menu.json', function(data){
		// i dati son stati caricati

		// cancello il contenuto dell'ul
		containerEl.empty();

		data.forEach(function(menuItem){
			containerEl.append(buildMenuItem(menuItem));	
		});
	}, 'json');
});
