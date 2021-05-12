var pname=document.querySelector('input')
const pForm = document.querySelector('.button') 
var q1= document.querySelector("#cu")
var q2= document.querySelector("#grd2")

x='<center><span>CLICK BUTTON </span> <div class="spinner-grow text-info"></div> </center>';
q1.innerHTML=x
pForm.addEventListener('click', (e) => {    
     e.preventDefault() 
 
    const player_name = pname.value 
    x=''
    x='<center> <span>LOADING </span> <div class="spinner-border text-danger"></div> </center>'
    q1.innerHTML=x
 
    fetch('/stats?name=' + player_name).then((response) => {        
         response.json().then((data) => {  
        var j=data.pdata[0]
        var k=data.pdata[1]
        x=''
        x=x+"<div class='container' id='grd2'><h4 id='lk'>BATTING</h4><div class='row'><div class='col' id='g3'><div class='flip-card'><div class='flip-card-inner'><div class='flip-card-front'><h1 id='pp' >TESTS</h1></div><div class='flip-card-back'><b><p>Matches:"+j[0][0]+"</p><p>Runs:"+j[0][1]+"</p><p>Averge:"+j[0][2]+"</p><p>50s:"+j[0][3]+"</p><p>100s:"+j[0][4]+"</p></b></div></div></div></div><div class='col' id='g3'><div class='flip-card'><div class='flip-card-inner'><div class='flip-card-front'><h1 id='pp' >ODIs</h1></div><div class='flip-card-back'><b><p>Matches:"+j[1][0]+"</p><p>Runs:"+j[1][1]+"</p><p>Averge:"+j[1][2]+"</p><p>50s:"+j[1][3]+"</p><p>100s:"+j[1][4]+"</p></b></div></div></div></div><div class='col' id='g3'><div class='flip-card'><div class='flip-card-inner'><div class='flip-card-front'><h1 id='pp' >T20Is</h1></div><div class='flip-card-back'><b><p>Matches:"+j[2][0]+"</p><p>Runs:"+j[2][1]+"</p><p>Averge:"+j[2][2]+"</p><p>50s:"+j[2][3]+"</p><p>100s:"+j[2][4]+"</p></b></div></div></div></div></div></div>"
        x=x+"<div class='container' id='grd2'><h4 id='lk'>BOWLING</h4><div class='row'><div class='col' id='g3'><div class='flip-card'><div class='flip-card-inner'><div class='flip-card-front'><h1 id='pp' >TESTS</h1></div><div class='flip-card-back'><b><p>Matches:"+k[0][0]+"</p><p>Wickets:"+k[0][1]+"</p><p>Strike Rate:"+k[0][2]+"</p><p>Economy:"+k[0][3]+"</p><p>5w:"+k[0][4]+"</p></b></div></div></div></div><div class='col' id='g3'><div class='flip-card'><div class='flip-card-inner'><div class='flip-card-front'><h1 id='pp' >ODIs</h1></div><div class='flip-card-back'><b><p>Matches:"+k[1][0]+"</p><p>Wickets:"+k[1][1]+"</p><p>Strike Rate:"+k[1][2]+"</p><p>Economy:"+k[1][3]+"</p><p>5w:"+k[1][4]+"</p></b></div></div></div></div><div class='col' id='g3'><div class='flip-card'><div class='flip-card-inner'><div class='flip-card-front'><h1 id='pp' >T20Is</h1></div><div class='flip-card-back'><b><p>Matches:"+k[2][0]+"</p><p>Wickets:"+k[2][1]+"</p><p>Strike Rate:"+k[2][2]+"</p><p>Economy:"+k[2][3]+"</p><p>5w:"+k[2][4]+"</p></b></div></div></div></div></div></div>"
        q1.innerHTML=x
             
              
                    
            })     
         }) 
    }) 