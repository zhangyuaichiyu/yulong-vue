var flag = $(".main").attr("flag");
$(".menu li").each(function() {
  var type = $(this).attr("type");
  if (flag == type) {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  }
})