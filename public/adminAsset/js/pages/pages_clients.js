'use strict';
$(function() {
    $('#modals-slide').modal();
    // DataTable start
    $('#report-table tr').on('click', function() {
        $('#modals-slide').modal()
    });
    // DataTablse end
});
