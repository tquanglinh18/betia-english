$(function () {

    $("#menu-mobile__toggle").click(() => {
        $("#menu-mobile").toggleClass("menu-mobile--active");
        $("#menu-mobile__list").toggleClass("menu-mobile__list--active")
    })

    $("#menu-mobile .nav-link").click(() => {
        $("#menu-mobile").toggleClass("menu-mobile--active");
        $("#menu-mobile__list").toggleClass("menu-mobile__list--active")
    })

    function copyToClipboard(textSelect) {
        var idInputSel = "#" + textSelect
        var inputSelElm = $(idInputSel)
        inputSelElm.select();
        inputSelElm[0].setSelectionRange(0, 99999);

        navigator.clipboard.writeText(inputSelElm.val()).then(function () {
            alert("Copied to clipboard: " + inputSelElm.val());
        }).catch(function (err) {
            console.error('Error copying text: ', err);
        });
    }

    $('#btn-invite-number-copy').click(() => copyToClipboard("invite-number"));
    $('#btn-invite-link-copy').click(() => copyToClipboard("invite-link"));


    var dateRangePicker = new Litepicker({
        element: document.getElementById('month-range-sel'),
        singleMode: false, // False: Chọn khoảng thời gian, True: Chọn 1 ngày
        format: 'DD-MM-YYYY', // Định dạng ngày
        maxDate: new Date(),
        tooltipText: {
            one: 'night',
            other: 'nights'
        },
        tooltipNumber: (totalDays) => {
            return totalDays - 1;
        },
        onSelect: function (date) {
            alert('Ngày được chọn:', date.format('YYYY-MM-DD'));
        }
    })

    dateRangePicker.on('selected', (startDate, endDate) => {
        // if (endDate) {
        //     alert('Khoảng thời gian:', startDate.format('YYYY-MM-DD'), '->', endDate.format('YYYY-MM-DD'));
        // } else {
        //     alert('Ngày:', startDate.format('YYYY-MM-DD'));
        // }

        alert($("#month-range-sel").val());
    });
});


