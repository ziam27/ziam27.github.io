// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked


/*
$('#first').click(swapFirst)
$('#second').click(swapSecond)
$('#third').click(swapThird)
$('#fourth').click(swapFourth)

function swapFirst() {
  $('#bigimage').attr('src', 'img/1.jpg')
}

function swapSecond() {
  $('#bigimage').attr('src','img/2.jpg')
}

function swapThird() {
  $('#bigimage').attr('src','img/3.jpg')
}

function swapFourth() {
  $('#bigimage').attr('src','img/4.jpg')
}
*/

function changeImage () {

	var src = $(this).attr('src')
	//output: #bigimage has changed

	$ ('#bigimage').attr('src', src)

}

$('.thumb').click(changeImage)

