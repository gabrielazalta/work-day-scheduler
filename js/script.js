//dispaly current day at the top of the document
var currentDate = moment().format("dddd, MMM Do YYYY, h:mm:ss a");
$("#currentDay").html(currentDate);

$(document).ready(function(){
    $(".saveBtn").on("click", function(){

        var task = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //when user click save, info is saved into localStorage
        localStorage.setItem(task, time);

        //keep information after user refrshes page
        var taskSaved = localStorage.getItem(task, time);
        $(this).val(taskSaved);
        
    })



//make past times grey, future green, present red


})






