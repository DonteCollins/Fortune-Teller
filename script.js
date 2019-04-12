$("p").hide();
$(".first").hide();
$("button").click(function(){
    var name = $(".i1").val();
    $(".name").text(name);
    
    var YoB = $(".i2").val();
    var year = parseInt(YoB) + 78;
    $(".year").text(year);
    
    var place = $(".i3").val();
    $(".place").text(place);
    
    $("p").fadeIn();
    
    var chance = Math.floor((Math.random() * 4) + 1);
    if (chance === 1){
        $(".first").fadeIn();
        $(".second").hide();
        $(".third").hide();
        $(".fourth").hide();
        } else if (chance === 2) {
            $(".first").hide();
        $(".second").fadeIn();
        $(".third").hide();
        $(".fourth").hide();
    } else if (chance === 3) {
        $(".first").hide();
        $(".second").hide();
        $(".third").fadeIn();
        $(".fourth").hide();
    } else if (chance === 4) {
        $(".first").hide();
        $(".second").hide();
        $(".third").hide();
        $(".fourth").fadeIn();
}
});