var counter =0
var numOfTiles = $(".tile").length

console.log(numOfTiles)
$(window).resize(function(){
	// $('.focus').scrollIntoView()

	$('.container').animate({
		scrollLeft: $('.focus').scrollLeft}, 00);
		counter = 0;
	// $('.container').animate({
	// 	scrollLeft: $}, 1500);
	// 	console.log(window.scrollX())
})
console.log()

$('#right').click(function() {
	if($('.focus').hasClass('proc')){
		return;
	}
	$(this).addClass("proc")
  counter++
  if (counter > numOfTiles) {
    counter = numOfTiles
  }
	switchClass()
	$('.container').animate({
		scrollLeft: '+=' + $('.tile').width() }, 1000);
		$(this).removeClass('proc')
})


$('#left').click(function() {
  counter--
  if (counter < 0) {
    counter = 0
  }
	switchClass()

	$('.container').animate({
		scrollLeft: '-=' + window.innerWidth }, 1000);
})

function switchClass() {
  $('.tile').removeClass('focus')
  document.querySelectorAll('.tile')[counter].classList.add('focus')


}



//
// $('.arrow').click(
// 	switchClass()
// 	)

// })





// $('#right').click(function() {
// if (counter >= 2) {
//   scrollRight = true;
// }
// else if (counter <= 0) {
//   scrollRight = false;
// }

// if (scrollRight == false) {
// $('.container').animate({
// scrollLeft: ('+=' + (containerW))
// }, 1500);

// counter++;
// }

// else if (scrollRight == true) {
// })
// $('#left').click(function() {

// $('.container').animate({
// scrollLeft: ('-=' + (containerW))
// }, 1500);
// counter--;

// })
// document.querySelector('.tile').classList.remove('fixed')
// console.log(counter)
// console.log(scrollRight)
