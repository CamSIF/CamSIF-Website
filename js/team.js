
$('.card').each(function() {
    var card = this;
    var info = $(this).find(".info");
    console.log(this,card, info);
    this.addEventListener("click", function() {
        info.toggleClass("reveal-card");
    });
})
