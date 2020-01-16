AOS.init();
/*NAVIGATION BAR*/
var click = false;
$(document).on('click', '.hamburger--3dx', function () {
    click = !click;
    if(click) {
        $(this).addClass('is-active');
        $("#dropDown").hide().animate({
            height: 'toggle'
        });
    }else {
        $(this).removeClass('is-active');
        $("#dropDown").show().animate({
            height: 'toggle'
        });
    }
});

/*RELOAD BROWSER AFTER WINDOW RESIZE*/
$(window).bind('resize', function()
{
    if (window.RT) clearTimeout(window.RT);
    window.RT = setTimeout(function()
    {
        this.location.reload(false);
    }, 100);
});