// *******************NAV BAR************************
//cant use arrow function because of this
//changes tab bg colors
$('.selector').click(function(e) {
    e.preventDefault();
    console.log(this)
    $('.selector').removeClass('bg-secondary text-white')
    $(this).addClass('bg-secondary text-white')
    
})
// *******************End Nav Bar*********************

// *******************CONTENT AREA********************
//hides WELCOME on home screen on click
$(document).click( (e) =>{
    e.preventDefault();
    $('.middleScreen').hide();
})


// *******************END CONTENT*********************