$('#app').html(`  
	`);
setTimeout(function(){
	x();
},10);

function x(){
	$.ajax({
	url:"https://api.spotify.com/v1/search?q=artist:shawn%20mendes&type=album"
}).done(function(response){
	$.ajax({
		url:response.albums.items[0].href
	}).done(function(album){
	console.log(response);
	let name = response.albums.items[0].artists[0].name;
	let image1 = response.albums.items[0].images[0].url;
	let mp3 = album.tracks.items[0].preview_url;
	var html = `
		<h2>"Shawn's Latest Single"</br></h2>
		<img src="${image1}"/></br>
		<audio controls>
		<source src="${mp3}" type="audio/mpeg">
		Your browser does not support the audio element.
		</audio>
	

	`;
	$('#app').html(html);
		
	});
});
}