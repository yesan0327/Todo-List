//check off specific todos by clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

//click on A to delete the li
$("ul").on("click", "span", function (event) {
    event.stopPropagation();
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    })
});

$("input").keypress(function (event) {

    if (event.which === 13) {
        // console.log("!!");
        var TodoText = $("input[type='text']").val();
        $("input[type='text']").val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + TodoText + "</li>");
    }
});

$(".fa-plus").click(function () {
    $("input").fadeToggle();
});