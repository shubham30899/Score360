var q1= document.querySelector(".scrollmenu")
var q2= document.querySelector('#cu')
var q3= document.querySelector('#sa')
var q4= document.querySelector('#sb')

// x='<center> <span>LOADING </span> <div class="spinner-border text-danger"></div> </center>';
// // q1.innerHTML=x

// fetch('/score').then((response) => {
//      response.json().then((data)=>{
//         data.cricdata.data.reverse();
//         x=''
//         for(var i=0; i<data.cricdata.data.length;i++){
//             var s = data.cricdata.data[i].split("v");
//             x= x+ "<a href='#' id='vv'>" + s[0] + "<p>" + s[1] + "</p>" + "</a>"
//         }
//         q1.innerHTML=x;
//      }) 
// }) 

// console.log("Working!") 

// y='<center><span>CLICK BUTTON </span> <div class="spinner-grow text-info"></div> </center>';
// q2.innerHTML=y

// q3.addEventListener("click", () => {
//     y=''
//     y='<center> <span>LOADING </span> <div class="spinner-border text-danger"></div> </center>'
//     q2.innerHTML=y
//     fetch('/matches/extra').then((response) => {
//      response.json().then((data)=>{
//         // console.log(data.fdata[0])
//         var ss= data.fdata
//         y=''
//         for(var i=0; i<ss.length; i++) {
//             y= y + "<h5 id='cj'>Match " + (i+1) + "</h5> <p></p>"
//             y= y + "<a href='#' id='cv'>" + ss[i][0] + " Vs " + ss[i][1] + "</a> <p></p>"
//             y= y + "<a href='#' id='cv'> Winner is " + ss[i][2] + "</a> <p></p>"
//         }
//         q2.innerHTML=y
//      }) 
// }) 
// })

// q4.addEventListener("click", () => {
//     y=''
//     y='<center> <span>LOADING </span> <div class="spinner-border text-danger"></div> </center>'
//     q2.innerHTML=y
//     fetch('/matches/extra').then((response) => {
//      response.json().then((data)=>{
//         // console.log(data.fdata[0])
//         var st= data.jdata
//         y=''
//         for(var i=0; i<st.length; i++) {
//             y= y + "<h5 id='cj'>Match " + (i+1) + "</h5> <p></p>"
//             y= y + "<a href='#' id='cv'>" + st[i][0] + " Vs " + st[i][1] + "</a> <p></p>"
//             y= y + "<a href='#' id='cv'> Type: " + st[i][2] + "</a> <p></p>"
//             y= y + "<a href='#' id='cv'> Date: " + st[i][3] + "</a> <p></p>"
//         }
//         q2.innerHTML=y
//      }) 
// })  
// })

// console.log('Done');
x='<center> <span>LOADING </span> <div class="spinner-border text-danger"></div> </center>';
// q1.innerHTML=x

fetch('/score').then((response) => {
     response.json().then((data)=>{
        // data.cricdata.data.reverse();
        x=''
        for(var i=0; i<data.cricdata.length;i++){
            var s = data.cricdata[i];
            x= x+ "<a href='#' id='vv'>" + s.t1 + '<br> vs' + "<p>" + s.t2 + "</p>" + "</a>"
        }
        q1.innerHTML=x;
     }) 
}) 

console.log("Working!") 

y='<center><span>CLICK BUTTON </span> <div class="spinner-grow text-info"></div> </center>';
q2.innerHTML=y

q3.addEventListener("click", () => {
    y=''
    y='<center> <span>LOADING </span> <div class="spinner-border text-danger"></div> </center>'
    q2.innerHTML=y
    fetch('/matches/extra').then((response) => {
     response.json().then((data)=>{
        // console.log(data.fdata[0])
        var ss= data.fdata
        y=''
        for(var i=0; i<ss.length; i++) {
            y= y + "<h5 id='cj'>Match " + (i+1) + "</h5> <p></p>"
            y= y + "<a href='#' id='cv'>" + ss[i].t1 + " Vs " + ss[i].t2 + "</a> <p></p>"
            y= y + "<a href='#' id='cv'> Winner is " + ss[i].w + "</a> <p></p>"
        }
        q2.innerHTML=y
     }) 
}) 
})

q4.addEventListener("click", () => {
    y=''
    y='<center> <span>LOADING </span> <div class="spinner-border text-danger"></div> </center>'
    q2.innerHTML=y
    fetch('/matches/extra').then((response) => {
     response.json().then((data)=>{
        // console.log(data.fdata[0])
        var st= data.jdata
        y=''
        for(var i=0; i<st.length; i++) {
            y= y + "<h5 id='cj'>Match " + (i+1) + "</h5> <p></p>"
            y= y + "<a href='#' id='cv'>" + st[i].t1 + " Vs " + st[i].t2 + "</a> <p></p>"
            y= y + "<a href='#' id='cv'> Type: " + st[i].type + "</a> <p></p>"
            y= y + "<a href='#' id='cv'> Date: " + st[i].Date + "</a> <p></p>"
        }
        q2.innerHTML=y
     }) 
})  
})