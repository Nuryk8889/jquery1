

// hide()   display -none
// show()   display -block
// fadeIn() display -block 
// fadeOut() display -none
// slideDown() display -block
// slideUp() display -none
// slideToggle() if(display == block){ display = none }
// else {display = block}

// $('.box').slideDown(4000)
// $('.box').slideUp(5000)

// $('.box').slideToggle(4000)



// $('.box1').fadeOut(1000)
// $('.box2').fadeOut(2000)
// $('.box3').fadeOut(3000)
// $('.box4').fadeOut(4000)
// $('.box5').fadeOut(5000)

// $('.box1').fadeIn(6000)
// $('.box2').fadeIn(7000)
// $('.box3').fadeIn(8000)
// $('.box4').fadeIn(9000)
// $('.box5').fadeIn(10000)

$('#btn').click(()=>{
 $('.box1').hide(1000)
 $('.box2').hide(2000)
 $('.box3').hide(3000)
 $('.box4').hide(4000)
 $('.box5').hide(5000)

 $('.box1').show(6000)
 $('.box2').show(7000)
 $('.box3').show(8000)
 $('.box4').show(9000)
 $('.box5').show(10000)
})

// $('.box1').slideUp(1000)
// $('.box2').slideUp(2000)
// $('.box3').slideUp(3000)
// $('.box4').slideUp(4000)
// $('.box5').slideUp(5000)

// $('.box1').slideDown(6000)
// $('.box2').slideDown(7000)
// $('.box3').slideDown(8000)
// $('.box4').slideDown(9000)
// $('.box5').slideDown(10000)