//dispaly current day at the top of the document
var currentDate = moment().format("dddd, MMM Do YYYY, h:mm:ss a");
$("#currentDay").html(currentDate);

$(document).ready(function(){
    $(".saveBtn").on("click", function(){

        var task = $(this).val(".description");
        var time = $(this).val("#hour")

        //when user click save, info is saved into localStorage
        localStorage.setItem(task, time);
    })
})
//make past times grey, future green, present red




