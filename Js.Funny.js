// Ve 1 hinh tron simple voi kich thuoc co dinh
// arc() để vẽ một hình tròn. cx và cy là các toạ độ của hình tròn. r là bán kính của hình tròn.

function Circle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
 }
 function createCircle() {
     let ctx = document.getElementById("myCanvas").getContext("2d");
     let circle = new Circle(500,500,80);
     ctx.beginPath();
     ctx.arc(circle.x, circle.y, circle.radius, 0, 2* Math.PI);
     ctx.fill();
 }
 createCircle();

// ve hinh tron voi ban kinh  ngau nhien.
// chúng ta sử dụng hàm Math.random() để sinh một bán kính ngẫu nhiên nằm trong khoảng từ 0-80.

function Circle(x, y , radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
}
function createCircle() {
    let ctx=document.getElementById("myCanvas").getContext("2d");
    let radius = Math.floor(Math.random()*80);
    let circle = new Circle(500,500,radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2*Math.PI);
    ctx.fill();
}
createCircle();


// Ve hinh tron voi mau ngau nhien
//chúng ta đã tạo 2 hàm mới để phục vụ việc sinh ra một màu ngẫu nhiên:
// Hàm getRandomHex() sẽ sinh ra một số ngẫu nhiên nằm trong khoảng 0-255.
// Hàm getRandomColor() sinh ra một màu ngẫu nhiên.


function Circle(x, y, radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
}
function getRandomHex() {
    return Math.floor(Math.random() * 255);
}
function getRandomColor(){
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
        return "rgb(" + red + "," + blue + "," + green + ")";
}
 function createCircle() {
     let ctx = document.getElementById("myCanvas").getContext("2d");
     let radius = Math.floor(Math.random() * 80);
     let color = getRandomColor();
     let circle= new Circle(500, 500, radius);
     ctx.beginPath();
     ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
     ctx.fillStyle = color;
     ctx.fill();
 }
 createCircle();

// Ve hinh tron voi vi tri random
//chúng ta vẫn đang cố định vị trí của hình tròn ở toạ độ 500, 500.
// Ở bước này, chúng ta sẽ sinh toạ độ của hình tròn ngẫu nhiên.
//chúng ta có sử dụng window.innerWidth và window.innerHeight là 2 thuộc tính trả về kích thước của cửa sổ trình duyệt.


function Circle(x, y, radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
}
function getRandomHex(){
    return Math.floor(Math.random()*255);
}

function getRandomColor(){
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green +")";
}

function createCircle(){
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let radius = Math.floor(Math.random() * 80);
    let color = getRandomColor();
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let circle= new Circle(x, y, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}
createCircle();


// Ve 2 hinh tronn
//Cách đơn giản để tạo 2 hình tròn đó là gọi phương thức createCircle() 2 lần liên tiếp nhau.

function Circle(x, y, radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
}
function getRandomHex(){
    return Math.floor(Math.random()*255);
}

function getRandomColor(){
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green +")";
}

function createCircle(){
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let radius = Math.floor(Math.random() * 80);
    let color = getRandomColor();
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let circle= new Circle(x, y, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}
createCircle();
createCircle();


// nhieu hinh tron

function Circle(x, y, radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
}

function getRandomHex(){
    return Math.floor(Math.random()*255);
}

function getRandomColor(){
    var red = getRandomHex();
    var green = getRandomHex();
    var blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green +")";
}

function createCircle(){
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let radius = Math.floor(Math.random() * 80);
    let color = getRandomColor();
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let circle= new Circle(x, y, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

function createMultipleCircle(){
    for(let i = 0; i < 30; i++){
        createCircle();
    }
}
createMultipleCircle();