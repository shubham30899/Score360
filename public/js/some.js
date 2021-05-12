var q5= document.querySelector('#su')
var q6= document.querySelector('#sz')

var k=''

fetch('http://localhost:4000/scorecard/extra').then((response) => {
    response.json().then((data)=> {
        k=''
        var ss= data.sdata
        for(var i=0; i<ss.length; i++) {
            k= k + "<p id='cm'>" + ss[i][0] + "</p>"
            k= k + "<p id='cm'>" + ss[i][1] + "</p>" 
            for (var j=2; j<ss[i].length; j++) {
                k= k + "<p id='cv'>" + ss[i][j] + "</p>"
            }
        }
        q6.innerHTML=k
    })
})

var z='<center> <span>LOADING </span> <div class="spinner-border text-danger"></div> </center>'
q5.innerHTML=z

fetch('http://localhost:4000/matches/extra').then((response) => {
    response.json().then((data)=> {
        z=''
        // console.log(data.fdata[0])
        var ss= data.fdata
        for(var i=0; i<ss.length; i++) {
            z= z + "<h5 id='cj'>Match " + (i+1) + "</h5> <p></p>"
            z= z + "<a href='/scorecard/extra/" + ss[i][3] + "' id='cv' class='nn'>" + ss[i][0] + " Vs " + ss[i][1] + "</a> <span class='badge rounded-pill bg-primary'><- Click for Details</span> <p></p>"
            z= z + "<a id='cv'> Winner is " + ss[i][2] + "</a> <p></p>"
            console.log(ss[i][3])
        }
        q5.innerHTML=z
    })
})