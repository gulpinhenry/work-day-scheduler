var curTime = parseInt(moment().format("HH"));
var lim = -1;
$(".description").each(function(index, element) {
    if(curTime-9<index) 
       $(element).attr("class", "future col-md-10");
    else if(curTime-9 == index)
        $(element).attr("class", "present col-md-10");
    else
        $(element).attr("class", "past col-md-10");
});
