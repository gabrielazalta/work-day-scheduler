//dispaly current day at the top of the document
var currentDate = moment().format("dddd, MMM Do YYYY, h:mm:ss a");
$("#currentDay").html(currentDate);

$(document).ready(function(){
    $(".saveBtn").on("click", function(){
        
        var task = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //when user click save, info is saved into localStorage
        localStorage.setItem(time, task); 
    })
    
    //keep information after user refrshes page

    $("time-block").each(function (){
        //Retrieve time from the DOM
        $(this).get().attr("id");
        //Use that to retrieve the task from local storage
        //Update task in the DOM
        $(this).get().children(".description").val(localStorage.getItem(time));
    });


//make past times grey, future green, present red


})






