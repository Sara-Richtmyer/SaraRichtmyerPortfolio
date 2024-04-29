console.log("hello");

if (jQuery) {
    console.log ("jquery loaded")
}
else {
    console.log ("no jquery")
}

$("a[data-artwork]").click(function(){
    let image = $(this).children("img").attr("src");
    $("#overlay-image").attr("src", image);
})