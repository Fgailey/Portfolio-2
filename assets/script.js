// *******************NAV BAR************************
//cant use arrow function because of this
//changes tab bg colors
$('.selector').click(function(e) {
    e.preventDefault();
    $('.selector').removeClass('bg-secondary text-white');
    $(this).addClass('bg-secondary text-white');
})
// *******************End Nav Bar*********************

// *******************CONTENT AREA********************
//hides WELCOME on home screen on click

$(document).ready( () => {


    $('body').click( (e) =>{
        $('.middleScreen').fadeOut();
        $('.middleScreenClick').hide();
        $('.home-content').fadeIn();
    })

})
// *******************END CONTENT*********************