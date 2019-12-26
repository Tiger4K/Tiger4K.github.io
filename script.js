$(".btn").click(
    function countdate() {
        // EndDate.getDay轉換為中文的星期X;
        var EndDate = new Date();
        var weekday = new Array(7);
        weekday[0] = "星期天";
        weekday[1] = "星期一";
        weekday[2] = "星期二";
        weekday[3] = "星期三";
        weekday[4] = "星期四";
        weekday[5] = "星期五";
        weekday[6] = "星期六";

        var holiday = ["2020/1/1", "2020/1/4", "2020/1/5", "2020/1/11", "2020/1/12", "2020/1/18", "2020/1/19", "2020/1/23", "2020/1/24", "2020/1/25", "2020/1/26", "2020/1/27", "2020/1/28", "2020/1/29", "2020/2/1", "2020/2/2", "2020/2/8", "2020/2/9", "2020/2/16", "2020/2/22", "2020/2/23", "2020/2/28", "2020/2/29", "2020/3/1", "2020/3/7", "2020/3/8", "2020/3/14", "2020/3/15", "2020/3/21", "2020/3/22", "2020/3/28", "2020/3/29", "2020/4/2", "2020/4/3", "2020/4/4", "2020/4/5", "2020/4/11", "2020/4/12", "2020/4/18", "2020/4/19", "2020/4/25", "2020/4/26", "2020/5/2", "2020/5/3", "2020/5/9", "2020/5/10", "2020/5/16", "2020/5/17", "2020/5/23", "2020/5/24", "2020/5/30", "2020/5/31", "2020/6/6", "2020/6/7", "2020/6/13", "2020/6/14", "2020/6/21", "2020/6/25", "2020/6/26", "2020/6/27", "2020/6/28", "2020/7/4", "2020/7/5", "2020/7/11", "2020/7/12", "2020/7/18", "2020/7/19", "2020/7/25", "2020/7/26", "2020/8/1", "2020/8/2", "2020/8/8", "2020/8/9", "2020/8/15", "2020/8/16", "2020/8/22", "2020/8/23", "2020/8/29", "2020/8/30", "2020/9/5", "2020/9/6", "2020/9/12", "2020/9/13", "2020/9/19", "2020/9/20", "2020/9/26", "2020/9/27", "2020/10/1", "2020/10/2", "2020/10/3", "2020/10/4", "2020/10/9", "2020/10/10", "2020/10/11", "2020/10/17", "2020/10/18", "2020/10/24", "2020/10/25", "2020/10/31", "2020/11/1", "2020/11/7", "2020/11/8", "2020/11/14", "2020/11/15", "2020/11/21", "2020/11/22", "2020/11/28", "2020/11/29", "2020/12/5", "2020/12/6", "2020/12/12", "2020/12/13", "2020/12/19", "2020/12/20", "2020/12/26", "2020/12/27"]
        x = holiday.length;

        var StartDate = new Date(document.getElementById("user_date").value);
        StartDate = new Date(StartDate);

        var CountDate = StartDate.setDate(StartDate.getDate());
        CountDate = new Date(CountDate);
      
        var oneday = CountDate.setDate(CountDate.getDate() - 1);
        oneday = new Date(oneday);
        var a = $.inArray(oneday.toLocaleDateString(), holiday);
      
        var twoday = CountDate.setDate(CountDate.getDate() - 1);
        twoday = new Date(twoday);
        var b = $.inArray(twoday.toLocaleDateString(), holiday);
      
        var threeday = CountDate.setDate(CountDate.getDate() - 1);
        threeday = new Date(threeday);
        var c = $.inArray(threeday.toLocaleDateString(), holiday);
      
        var d = $.inArray(StartDate.toLocaleDateString(), holiday);

        //StartDay = d是假日，d的前一天也是假日=連休的第二天(星期日)
        if (d != -1 && a != -1) { 
            for (var i = x; i >= 0; i--) {
                if (StartDate.toLocaleDateString() === holiday[i]) {
                    x--;
                    var Sunday = StartDate.setDate(StartDate.getDate() - 1);
                    Sunday = new Date(Sunday);                    
                }
            }
            var EndDate = Sunday.setDate(Sunday.getDate() - 3);
            EndDate = new Date(EndDate);
            $(".day").text("請於" + EndDate.toLocaleDateString() + weekday[EndDate.getDay()] + "23:59" + "前進行投保作業，謝謝。");
          // console.log(StartDate.toLocaleDateString()+ "Sunday");
        }

      // 1/4 特殊間隔，c=holiday[0]
      else if (d != -1 && c == 0) { 
            for (var i = x; i >= 0; i--) {
                if (StartDate.toLocaleDateString() === holiday[i]) {
                    x--;
                    var spday = StartDate.setDate(StartDate.getDate() - 1);
                    spday = new Date(spday);                    
                }
            }
            var EndDate = spday.setDate(spday.getDate() - 4);
            EndDate = new Date(EndDate);
            $(".day").text("請於" + EndDate.toLocaleDateString() + weekday[EndDate.getDay()] + "23:59" + "前進行投保作業，謝謝。");
          // console.log(StartDate.toLocaleDateString() + "1/4");  
        }
      
      // 2/1 特殊間隔，c=holiday[13]
      else if (d != -1 && c == 13) {
            for (var i = x; i >= 0; i--) {
                if (StartDate.toLocaleDateString() === holiday[i]) {
                    x--;
                    var spday = StartDate.setDate(StartDate.getDate() - 1);
                    spday = new Date(spday);                    
                }
            }
            var EndDate = spday.setDate(spday.getDate() - 10);
            EndDate = new Date(EndDate);
            $(".day").text("請於" + EndDate.toLocaleDateString() + weekday[EndDate.getDay()] + "23:59" + "前進行投保作業，謝謝。");
          // console.log(StartDate.toLocaleDateString() + "2/1");
          
        }
      
      //星期一
      else if (a != -1 && a < x) {
            for (var i = x; i >= 0; i--) {
                if (oneday.toLocaleDateString() === holiday[i]) {
                    x--;
                    var oneday = oneday.setDate(oneday.getDate() - 1);
                    oneday = new Date(oneday);
                }
            }
            var EndDate = oneday.setDate(oneday.getDate() - 2);
            EndDate = new Date(EndDate);
            $(".day").text("請於" + EndDate.toLocaleDateString() + weekday[EndDate.getDay()] + $("#time").find("option:selected").val() + "時前進行投保作業，謝謝。");
          // console.log(StartDate.toLocaleDateString()+ "Monday");
          
        }
      
        //星期二
        else if (b != -1 && b < x) {
            for (var i = x; i >= 0; i--) {
                if (twoday.toLocaleDateString() === holiday[i]) {
                    x--;
                    var twoday = twoday.setDate(twoday.getDate() - 1);
                    twoday = new Date(twoday);
                }
            }
            var EndDate = twoday.setDate(twoday.getDate() - 1);
            EndDate = new Date(EndDate);
            $(".day").text("請於" + EndDate.toLocaleDateString() + weekday[EndDate.getDay()] + $("#time").find("option:selected").val() + "時前進行投保作業，謝謝。");
          // console.log(StartDate.toLocaleDateString()+ "Tuesday");

        }
        
        //星期三
        else if (c != -1 && c < x) {
            for (var i = x; i >= 0; i--) {
                if (threeday.toLocaleDateString() === holiday[i]) {
                    x--;
                    var threeday = threeday.setDate(threeday.getDate() - 1);
                    threeday = new Date(threeday);                    
                }
            }
            var EndDate = threeday.setDate(threeday.getDate());
            EndDate = new Date(EndDate);
            $(".day").text("請於" + EndDate.toLocaleDateString() + weekday[EndDate.getDay()] + $("#time").find("option:selected").val() + "時前進行投保作業，謝謝。");
          // console.log(StartDate.toLocaleDateString()+ "Wednesday");

        }
        
        //星期六
        else if (d != -1 && d < x) {
            for (var i = x; i >= 0; i--) {
                if (StartDate.toLocaleDateString() === holiday[i]) {
                    x--;
                    var Saturday = StartDate.setDate(StartDate.getDate() - 1);
                    Saturday = new Date(Saturday);                    
                }
            }
            var EndDate = Saturday.setDate(Saturday.getDate() - 3);
            EndDate = new Date(EndDate);
            $(".day").text("請於" + EndDate.toLocaleDateString() + weekday[EndDate.getDay()] + "23:59" + "前進行投保作業，謝謝。");
          // console.log(StartDate.toLocaleDateString()+ "Saturday" + "D");
        }
        else if ( StartDate == "Invalid Date" ){
          $(".day").text("請選擇日期");
        }
        else {
        var EndDate = StartDate.setDate(StartDate.getDate() - 3);
        EndDate = new Date(EndDate);
        $(".day").text("請於" + EndDate.toLocaleDateString() + weekday[EndDate.getDay()] + $("#time").find("option:selected").val() + "時前進行投保作業，謝謝。");
        // console.log(StartDate.toLocaleDateString()+ "E");

        }
    }
);

// ---------------------------------------
$(function () {
    //for迴圈新增Option
    for (var i = 0; i < 24; i++) {
        if (i < 10) {
            $("#time").append($("<option value='0" + i + "'>0" + i + "</option>"));
        } else {
            $("#time").append($("<option value='" + i + "'>" + i + "</option>"));
        }
    }
});