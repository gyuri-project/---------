$(function () {
    $('.tabcontent > div').hide();
    $('.tabnav > li> a').click(function () {
        $('.tabcontent > div').hide().filter(this.hash).fadeIn();
        $('.tabnav > li> a').removeClass('active');
        $(this).addClass('active');
        return false;
    }).filter(':eq(0)').click();

    $('.search_box form').hide();
    $('#search_phone .tab_in_nav a').click(function () {
        $('.search_box form').hide().filter(this.hash).fadeIn();
        $('#search_phone .tab_in_nav a').removeClass('active2');
        $(this).addClass('active2');
        return false;
    }).filter(':eq(0)').click();

    $('#search_email .tab_in_nav a').click(function () {
        $('.search_box form').hide().filter(this.hash).fadeIn();
        $('#search_email .tab_in_nav a').removeClass('active2');
        $(this).addClass('active2');
        return false;
    }).filter(':eq(0)').click();
});