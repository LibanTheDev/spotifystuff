
var $ = require('jquery');
var searchBox=$("#searchBox");
var spotifyLogo = $('#spotifylogo');
var searchTerm="";
var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi();



$(document).ready(function(){


spotifyLogo.click(function(){

	$('.text-input').show();
	$('.results').html('');
	searchBox.val('');

});

searchBox.keyup(function(event){

	if(event.which==13){
	$('.text-input').hide();
	searchTerm = searchBox.val();

	getSongs(searchTerm);
}	

});





});

function getSongs(val){

	var html="";
	


	

	spotifyApi.searchTracks(val,{limit:27, offset:0},function(err,data){

		if(err){

			console.log(err);

		}


	console.log(data.body.tracks.items);			
	var songs = data.body.tracks.items
	var result  = Object.keys(songs);
	
	result.forEach(function(song){
		
		var albumCover = songs[song].album.images[1].url;
		var songLink = songs[song].preview_url;
		var artist = songs[song].artists[0].name;


		var title = songs[song].name;
		html+= '<div class="song clear"><a href=" '+songLink+' " target="_blank"><img class="songs" src=" '+albumCover+' " ></a><h2>'+title+'</h2></div>';
		
		

		





	});


	$('.results').prepend(html);
	
	
	
	
});
	function clear(arr){

		arr.length=0;

		$('.results').html('');

	}
	
			
			



}
			

	
		

		




