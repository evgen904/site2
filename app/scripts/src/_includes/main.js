$(function(){
    $('.btn-new').on('click',function(event){
        event.preventDefault();
        var popupClick = $('[data-remodal-id=popupClick]').remodal();
            popupClick.open();
    });
});