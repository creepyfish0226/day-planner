var hour = moment().format("H")
console.log(hour)
$("#currentDay").text(moment().format("MMM Do YYYY")   )
for (var i=9; i<18; i++){
    console.log("#"+i)
    if(hour >i){

        $("#"+i).addClass("past")
    }else if(parseInt(hour)===i){
        $("#"+i).addClass("present")
    }else{
        $("#"+i).addClass("future")
    }
    var local = localStorage.getItem(i)

    if(local !== null){
        $("#"+i).val(local)
    }
}

$(".saveBtn").on("click", function(){
    var clickedHour = $(this).val()
    var userText =$("#"+clickedHour).val()
    localStorage.setItem(clickedHour,userText)
})