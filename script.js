$(".btn").click(
  function countdate() {
    var date=new Date(document.getElementById("user_date").value);
    date=date.setDate(date.getDate()-3);
    date=new Date(date);
    // alert(dateTime.toLocaleDateString());
    // $(".alert").text("你們這些白癡要在以下顯示日期前投保！不要問東問西！");
    $(".day").text("請在" + date.toLocaleDateString() + "   " + $("#time").find("option:selected").val() + "時前進行投保作業，謝謝。");
    // $(".time").text($("#time").find("option:selected").val());
  }
);
// ---------------------------------------
$(function(){ 
  //陣列新增Option
  var array = [ "one", "two", "three", "four", "five" ];
  for( i in array){
    $("#sel2").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
  }
  //利用each遍歷array中的值並將每個值新增到Select中
  $.each(array, function(i, val) {
    $("#sel3").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
  });
  //for迴圈新增Option
  for(var i=0;i<24;i++){
    if(i<10){
      $("#time").append($("<option value='0" + i + "'>0" + i + "</option>"));
    }else{
      $("#time").append($("<option value='" + i + "'>" + i + "</option>")); 
    }    
  }
});


// function countdate() {
// var dateTime=new Date(document.getElementById("user_date").value);
// dateTime=dateTime.setDate(dateTime.getDate()+3);
//  dateTime=new Date(dateTime);
// alert(dateTime.toLocaleDateString());
// console.log(dateTime.toLocaleDateString());
// document.writeln(dateTime.toString());
// };

// function countdate1() {
//   var mydate = new Date(document.getElementById("user_date").value);
//   // mydate=mydate.setDate(dateTime.getDate()+3);
//   // mydate=new mydate(dateTime);
//   document.writeln(mydate.toLocaleDateString());
// };