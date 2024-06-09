$().ready(() => {
    let dropdownButton = $('.dropdown-button')

    dropdownButton.click((e) => {
        let content;
        let arrow;
        let target = $(e.target)
        if(target.hasClass('dropdown-button')) {
            content = target.siblings()[0];
            arrow = target.children()[0];
        }
        else {
            content = target.parent().siblings()[0];
            arrow = target;
        }

        if($(arrow).hasClass('closed') ){
            $(arrow).removeClass('closed').addClass('open');
            $(arrow).html('&#9660');
        }
        else {
            $(arrow).removeClass('open').addClass('closed');
            $(arrow).html('&#9654')
        }
        
        target.hasClass('dropdown-button') ? content = target.siblings()[0] : content = target.parent().siblings()[0];

        $(content).slideToggle(200);
    })
})