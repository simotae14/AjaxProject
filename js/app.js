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
		if(data.infoPanel && data.infoPanel.length){
			infoPanelEl = $('div.menu-item-info', liEl);
			data.infoPanel.forEach(function(entry){
				infoPanelEl.append("<img class='menu-item-info-image' src='" + entry.image + "'>");
			})
		}
		return liEl;
	}

	$.get('api/menu.json', function(data){
		// i dati son stati caricati

		// cancello il contenuto dell'ul
		containerEl.empty();

		data.forEach(function(menuItem){
			containerEl.append(buildMenuItem(menuItem));	
		});
		containerEl.append('<div class="cf"></div>');
		handleMenu();
	}, 'json');
});
