//(function () {
//var video = document.querySelector("video")
//	vendorurl = window.URL || window.webkitURL;

navigator.getUserMedia = navigator.getUserMedia ||
	navigator.webkitGetUsermedia ||
	navigator.mozGetUserMedia ||
	navigator.msGetUserMedia ||
	navigator.oGetUserMedia;

if (navigator.getUserMedia) {
	navigator.getUserMedia({ video: true }, handleVideo, videoError)
}

function handleVideo(stream) {
	document.querySelector('video').src = window.URL.createObjectURL(stream);
}

function videoError(e) {
	alert("There is Error...!!!");
}
	//navigator.getMedia({
	//	video: true,
	//	Audio: false
	//}, function (stream) {
	//	video.src = vendorurl.createObjectURL(stream);
	//	video.play();
	//}, function (error) {
		// Error Code
	//});
//});