/*
*DOM
*/
// var user = document.getElementById("user").value;
// console.log(user);

// DOM tới thẻ click  
// var click = document.getElementById("click");
// //Bấm vào click
// click.onclick = function (){
//     //DOM trở lại thẻ input để lấy value của nó
//     var user = document.getElementById("user").value
//     console.log(user);

//}
// var login = document.getElementById("login");
// login.onclick = function (){
//     var login = document.getElementById("user").value;
//     console.log(login);
// }

//DOM tới thẻ btn#tong
// var tong = document.getElementById("tong");
// tong.onclick = function () {
//     //Đầu vào lấy dữ liệu number1 và number2
//     var number1 = document.getElementById("number1").value;
//     var number2 = document.getElementById("number2").value;
//     // Xử lý 
//     //Ép kiểu 
//     number1 = parseInt(number1);
//     number2 = parseInt(number2);
//     var tong = number1 + number2;
    
//     //Đầu ra 
//     var retun = "Tổng là: " + tong;
//     var console = document.getElementById("console");
//     console.innerHTML = retun;

    
// }

// DOM từ tới thẻ #tong
// var click = document.getElementById("tong");
// click.onclick = function(){
//     // Đầu vào 
//     var number1 = document.getElementById("number1").value;
//     var number2 = document.getElementById("number2").value;

//     //Xử lý 
//     number1 = parseInt(number1);
//     number2 = parseInt(number2);
//     var tong = number1 + number2;

//     //Đầu ra
//     var retun = "Tổng là: " + tong;
//     var console = document.getElementById("console");
//     console.innerHTML = retun;
// }



//Bài 1 Tính tiền nhân viên
//B1 DOM qua thẻ #tong
var tong = document.getElementById("tong");
tong.onclick = function(){
    //Đầu vào lấy dữ liệu
    var day = document.getElementById("day").value;
    //Xử lý
    var tong = day * 100000;
    //Đầu ra
    var retun = "Tổng tiền lương là: " + tong;
    var output = document.getElementById("output");
    output.innerHTML = retun;

}

//Bài 2
// DOM qua thẻ #gttb
var gttb = document.getElementById("gttb");
gttb.onclick = function() {
    //Đầu vào lấy dữ liệu 5 số 
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var number3 = document.getElementById("number3").value;
    var number4 = document.getElementById("number4").value;
    var number5 = document.getElementById("number5").value;
    // Xử lý
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    number3 = parseInt(number3);
    number4 = parseInt(number4);
    number5 = parseInt(number5);
    var tong = number1 + number2 + number3 + number4 + number5;
    var gttb = tong / 5;
    console.log(gttb)
    // Đầu ra
    var retun = "Giá trị trung bình là: " + gttb;
    var output2 = document.getElementById("output2");
    output2.innerHTML = retun;
}

//Bài 3
// DOM tới thẻ #usa
var usa = document.getElementById("usa");
usa.onclick = function(){
    //Đầu vào lấy số tiền vnd
    var vnd = document.getElementById("vnd").value;
    //XỬ lý lấy vnd * 23.500
    vnd = parseFloat(vnd);
    var doitien = vnd * 23500;
    //Đầu ra
    var retun = "USD là: "+ doitien;
    var output3 = document.getElementById("output3");
    output3.innerHTML = retun
}

//Bài 4
//DOM tới thẻ #tinh
var tinh = document.getElementById("tinh");
tinh.onclick = function(){
    //Đầu vào lấy 2 chiều dài và rộng
    var dai = document.getElementById("dai").value;
    var rong = document.getElementById("rong").value;
    //Xử lý
    dai = parseInt(dai);
    rong = parseInt(rong);
    var dientich = dai * rong;
    var chuvi = (dai + rong) * 2;
    //Đầu ra
    var returndt = "Diện tích là: "+ dientich;
    var returrncv = "Chu vi là: "+ chuvi;
    var outputdt = document.getElementById("outputdt");
    outputdt.innerHTML = returndt;
    var outputcv = document.getElementById("outputcv");
    outputcv.innerHTML = returrncv;
}



// Bài 4 
//DOM tới thẻ #tong2so
var tong2so = document.getElementById("tong2so");
tong2so.onclick = function(){
    //Đầu vào lấy số vừa nhập
    var number = document.getElementById("number").value;
    //Xử lý
    number = parseInt(number);
    var dv = number % 10;
    var chuc = number / 10;
    var tong2so = dv + chuc;
    tong2so = parseInt(tong2so);    
    //Đầu ra
    var return5 = "Tổng là: "+ tong2so;
    var output5 = document.getElementById("output5");
    output5.innerHTML= return5;
}

