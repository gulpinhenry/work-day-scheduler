var curTime = parseInt(moment().format("HH"));
var lim = -1;

$(".description").each(function(index, element) {
    if(curTime-9<index) 
       $(element).attr("class", "future col-md-10");
    else if(curTime-9 == index)
    {
        $(element).attr("class", "present col-md-10");
        $(element).text("Current Hour");
    }  
    else
        $(element).attr("class", "past col-md-10");
});

function renderPage(){
    for (var i = 0; i < localStorage.length; i++){
        $("#"+localStorage.key(i)).children("textarea").val(localStorage.getItem(localStorage.key(i)));
    }
}
$("button").on("click", function(event){
    var btn = event.target;
    var localRow = $(btn).closest(".row");
    var text = localRow.children("textarea").val();
    localStorage.setItem(localRow.attr("id"), text);
});
renderPage();