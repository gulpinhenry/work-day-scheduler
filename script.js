var curTime = parseInt(moment().format("HH")); //gets current time of the page to render schedule color
var time = moment().format("LL");

$("#currentDay").text(time);
/**
 * this loop renders each row based on the current time. If that hour has past, it will be marked gray
 * if it is the current hour it will be marked red, and labelled as current hour
 * if its in the future, then the row will be marked as green
 */
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

/**
 * this function renders the saved text from local storage if there are any
 * this is under the assumption that there is no local storage when the user first uses it
 */
function renderPage(){
    curTime = parseInt(moment().format("HH")); 
    for (var i = 0; i < localStorage.length; i++){
        $("#"+localStorage.key(i)).children("textarea").val(localStorage.getItem(localStorage.key(i)));
    }
}

/**
 * this is an event listener for when the user clicks the save button, and saves the text into the local storage
 */
$("button").on("click", function(event){
    var btn = event.target;
    var localRow = $(btn).closest(".row");
    var text = localRow.children("textarea").val();
    localStorage.setItem(localRow.attr("id"), text);
});
renderPage();