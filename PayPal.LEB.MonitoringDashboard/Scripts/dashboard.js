$(document).ready(function () {
    dashboard.Initiate();

});

var dashboard = {

    Initiate: function () {
        $('.grid-stack').gridstack({
            width: 12,
            alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            resizable: {
                handles: 'e, se, s, sw, w'
            }
        });
        var grid = $('.grid-stack').data('gridstack');

        $('.grid-stack').on('added', function (event, items) {

            debugger;

            $.ajax({
                url: $(items[0].el).data("controller") + "/" + $(items[0].el).data("action"),
                type: 'POST',
                data: "",
                beforeSend: function () {
                },
                success: function (result) {
                    debugger;
                    $(items[0].el).html(result);
                },
                error: function (xhr, ajaxOptions, thrownError) {
                }
            });
            for (var i = 0; i < items.length; i++) {
                console.log('item added');
                console.log(items[i]);
            }
        });

        grid.addWidget($('<div class="grid-stack-item" id="db_report_panel" data-action="getReportStatus" data-controller="Home"></div>'), 1, 0, 12, 5, false);
        //grid.addWidget($('<div><div class="grid-stack-item-content" /><div/>'), 0, 5, 3, 2, false);
    }
}