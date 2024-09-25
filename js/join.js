$(function () {
    $('#checkAll').click(function () {
        var checked = $('#checkAll').is(':checked');

        if (checked) {
            $('.left_wrap input:checkbox').prop('checked', true);
        } else {
            $('.left_wrap input:checkbox').prop('checked', false);
        }
    });

    $('#check3').click(function () {
        var checked = $('#check3').is(':checked');

        if (checked) {
            $('.left_wrap ul input:checkbox').prop('checked', true);
        } else {
            $('.left_wrap ul input:checkbox').prop('checked', false);
        }
    });
});