$(document).ready(function() {
    $('.navbar li a').click(function() {
        var idSelector = '#' + $(this).attr('data-href');
        $('.navbar li').removeClass('active');
        $(this).parent().addClass('active');
        $('section div').removeClass('active');
        $(idSelector).addClass('active');
    });
});