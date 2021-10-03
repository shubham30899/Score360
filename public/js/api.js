const request=require('request')
 
// console.log("Ruk Ja Nek Bsdk.....\n");

const oldMatches = (callback) => {
    mat=[ {'t1':'Tribago','t2':'Jamaica','w':'Tribago'},{'t1':'Perth','t2':'Gaba','w':'Gaba'} ];
    const aa=JSON.stringify(mat)
    const data=JSON.parse(aa)
    callback(data);
    // const url="https://cricapi.com/api/matches?apikey=oiAtQNKqBjdWdz9QNbjVKxBtr7C3";

    // request({url:url,json: true},(error,response)=>{
        
    //     if(error){
    //         console.log('Unable to connect to server at the moment!');
    //     }
    //     else {
    //         var t=[];
    //         const allMatches = response.body.matches;
    //         const compMatches = allMatches.filter((match) => {
    //             if (match.winner_team!=null) {
    //                 return match
    //             }
    //         });
    //         for (var i=0; i<compMatches.length; i++) {
    //             const j = Object.values(compMatches[i])
    //             // console.log("Match",i+1)
    //             // console.log(j[3],"Vs",j[4])
    //             // console.log("Winner is",j[7])
    //             t.push( [ j[3],j[4],j[7],j[0] ] )
    //             // console.log(t)
    //         }
    //         callback(t)
    //     }
    // });
};

const newMatches = (callback) => {
    mat=[{'t1':'Oval','t2':'Manchester','type':'T20','Date':'Tomorrow Evening 5:00 PM'},{'t1':'Brisbane','t2':'Melbourne','type':'100','Date':'Tomorrow Night 8:00 PM'},{'t1':'Perth','t2':'Gaba','type':'T20','Date':'Tomorrow Evening 6:30 PM'}];
    const aa=JSON.stringify(mat)
    const data=JSON.parse(aa)
    callback(data)
    // const url="https://cricapi.com/api/matches?apikey=oiAtQNKqBjdWdz9QNbjVKxBtr7C3";
    // request({url:url,json: true},(error,response)=>{

    //     if(error){
    //         console.log('Unable to connect to server at the moment!');
    //     }
    //     else {
    //         const d=new Date()
    //         const dd= d.getDate() + 1
    //         const allMatches = response.body.matches;
    //         const compMatches = allMatches.filter((match) => {
    //             const td= new Date(match.date)
    //             const tdd= td.getDate()
    //             if (match.matchStarted==false && tdd==dd) {
    //                 return match
    //             }
    //         });
    //         var t=[];
    //         for (var i=0; i<compMatches.length; i++) {
    //             const j = Object.values(compMatches[i])
    //             var dt= new Date(j[2])
    //             var adt= dt.getDate() + "/" + dt.getMonth() + "/" + dt.getUTCFullYear() 
    //             // console.log("Match",i+1)
    //             // console.log(j[3],"Vs",j[4])
    //             // console.log("Type:",j[5])
    //             // console.log(adt)
    //             t.push([ j[3],j[4],j[5],adt ])
    //         }
    //         callback(t)
    //         // console.log(compMatches)
    //     }
    // });
};
const currMatches = (callback) => {
    var today_mat=[ {'t1':'Mumbai 165/6','t2':'Banglore 23/1*'},{'t1':'Perth 67/7*','t2':'Melbourne'},{'t1':'CSK 175/9','t2':'Punjab 145/4*'},{'t1':'Rajathan 185/3','t2':'Hyderabad 15/4*'},{'t1':'Oval 135/2','t2':'Manchester 15/1*'},{'t1':'Peshawar 156/9*','t2':'Lahore'},{'t1':'CSK 175/9','t2':'Punjab 145/4*'},{'t1':'KKR 195/6','t2':'PKBS'},{'t1':'Delhi 125/9','t2':'Banglore 14/0*'} ];
    const aa=JSON.stringify(today_mat)
    const data=JSON.parse(aa)
    callback(undefined,data)
    // const url="https://cricapi.com/api/cricket?apikey=oiAtQNKqBjdWdz9QNbjVKxBtr7C3";
    // request({url:url,json: true},(error,response)=>{

    //     if(error){
    //         console.log('Unable to connect to server at the moment!');
    //     }
    //     else 
    //     {
    //         var today_mat=[];
    //         const arr= response.body.data
    //         for(var i=0; i<arr.length; i++){
    //             // console.log(i+1,".",arr[i].description)
    //              today_mat.push(arr[i].description);
    //         }
            
    //         const aa=JSON.stringify(today_mat)
    //         const data=JSON.parse(aa)
    
    //         callback(undefined,{
    //             data
    //         })
    //     }
    // });
}
// const matchSquad = (uid) => {
//     const url="https://cricapi.com/api/fantasySquad?apikey=oiAtQNKqBjdWdz9QNbjVKxBtr7C3&unique_id="+uid;
//     // const test= {
//     //     "unique_id" : uid,
//     //     "apikey" : "oiAtQNKqBjdWdz9QNbjVKxBtr7C3"
//     // }
//     request({url:url,json: true},(error,response)=>{

//         if(error){
//             console.log('Unable to connect to server at the moment!');
//         }
//         else {
//             const arr= response.body.squad[0]
//             console.log("Team",arr.name,"Squad")
//             for(var i=0; i<arr.players.length; i++){
//                 console.log(i+1,".",arr.players[i].name)
//             }
//             // console.log("\n")

//             const ar= response.body.squad[1]
//             console.log("Team",ar.name,"Squad")
//             for(var i=0; i<arr.players.length; i++){
//                 console.log(i+1,".",ar.players[i].name)    
//             }
//             // console.log(response.body.squad[0].players[0])
//         }
//     });
// }
   
const matchSummary = (uid, callback) => {
    var u= uid;
    if(u=='1') {
    var t=[];
    var t1=[];
    var t2=[];
    var t3=[];
    var t4=[];
    // t1.push("Batting Innings 1:")
    // t1.push("Batsman Runs Balls Fours Sixes StrikeRate Dismissal")
    t1=["Batting Innings 1:","Batsman Runs Balls Fours Sixes StrikeRate Dismissal","Kala 7 9 1 0 77.28 b Evans","Chakabva(wk) 8 6 0 1 133.33 b Mark","Craig Ervine(c) 30 36 2 0 83.33 b Leask","Madhvere 0 0 0 0 0 run out","Sean Williams 60 52 5 1 115.38 not out","Shumbha 1 5 0 0 20 b Main","Ryan Burl 13 12 2 0 108.33 not out"," "]
    // t2.push("Bowling Innings 1:")
    // t2.push("Bowler Overs Runs Wickets Economy")
    t2=["Bowling Innings 1:","Bowler Overs Runs Wickets Economy","Shariff 4 21 0 5.2","Evans 4 28 1 7","Mark Watt 3 23 1 7.7","Gavin 3 17 1 5.7","Leask 4 23 1 5.8","MacLeod 1 4 0 4","Berring 1 9 0 9"," "]
    // t3.push("Batting Innings 2:")
    // t3.push("Batsman Runs Balls Fours Sixes StrikeRate Dismissal")
    t3=["Batting Innings 2:","Batsman Runs Balls Fours Sixes StrikeRate Dismissal","Munsey 9 6 0 1 150 b Chatara","Coetzer(c) 2 4 0 0 50 b Nagarov","O Hairs 0 1 0 0 0 b Nagarov","Berrington 42 43 2 2 97.67 b Sean","MacLeod 0 3 0 0 0 b Chatara","Cross(wk) 42 35 3 1 120 b Jongwe","Leask 25 21 2 1 119.05 b Masa","Sharif 2 4 0 0 50 not out","Main 0 0 0 0 0 not out"," "]
    // t4.push("Bowling Innings 2:")
    // t4.push("Bowler Overs Runs Wickets Economy")
    t4=["Bowling Innings 2:","Bowler Overs Runs Wickets Economy","Tendal 4 28 2 7","Nagarov 4 13 0 3.2","Luke 4 23 0 5.8","Masa 4 19 2 5.2","Sean 3 23 1 7.7","Burl 1 19 0 19"," "]
    t.push(t1,t2,t3,t4);
    callback(t);
    }
    else {
        var t=[];
        var t1=[];
        var t2=[];
        var t3=[];
        var t4=[];
        // t1.push("Batting Innings 1:")
        // t1.push("Batsman Runs Balls Fours Sixes StrikeRate Dismissal")
        t1=["Batting Innings 1:","Batsman Runs Balls Fours Sixes StrikeRate Dismissal","Jack 7 9 1 0 77.28 b Evans","Chris 8 6 0 1 133.33 b Mark","Watson(c) 30 36 2 0 83.33 b Leask","Malan 0 0 0 0 0 run out","K Williams 60 52 5 1 115.38 not out","Shahin 1 5 0 0 20 b Main","Rashid 13 12 2 0 108.33 not out"," "]
        // t2.push("Bowling Innings 1:")
        // t2.push("Bowler Overs Runs Wickets Economy")
        t2=["Bowling Innings 1:","Bowler Overs Runs Wickets Economy","Sam 4 21 0 5.2","Eilian 4 28 1 7","Marko 3 23 1 7.7","Gerrad 3 17 1 5.7","Lyon 4 23 1 5.8","Manis 1 4 0 4","Berry 1 9 0 9"," "]
        // t3.push("Batting Innings 2:")
        // t3.push("Batsman Runs Balls Fours Sixes StrikeRate Dismissal")
        t3=["Batting Innings 2:","Batsman Runs Balls Fours Sixes StrikeRate Dismissal","Morgan 9 6 0 1 150 b Chatara","Smith(c) 2 4 0 0 50 b Nagarov","Gerrad 0 1 0 0 0 b Nagarov","Berrington 42 43 2 2 97.67 b Sean","Sam 0 3 0 0 0 b Chatara","Cook(wk) 42 35 3 1 120 b Jongwe","Lyon 25 21 2 1 119.05 b Masa","Berry 2 4 0 0 50 not out","Manis 0 0 0 0 0 not out"," "]
        // t4.push("Bowling Innings 2:")
        // t4.push("Bowler Overs Runs Wickets Economy")
        t4=["Bowling Innings 2:","Bowler Overs Runs Wickets Economy","Chris 4 28 2 7","Nagarov 4 13 0 3.2","Williams 4 23 0 5.8","Malan 4 19 2 5.2","Shahin 3 23 1 7.7","Rashid 1 19 0 19"," "]
        t.push(t1,t2,t3,t4);
        callback(t);
    }
    // const url="https://cricapi.com/api/fantasySummary?apikey=oiAtQNKqBjdWdz9QNbjVKxBtr7C3&unique_id="+uid;
    // // const test= {
    // //     "unique_id" : uid,
    // //     "apikey" : "oiAtQNKqBjdWdz9QNbjVKxBtr7C3"
    // // }
    // request({url:url,json: true},(error,response)=>{

    //     if(error){
    //         console.log('Unable to connect to server at the moment!');
    //     }
    //     else {
    //         var t=[];
    //         var t1=[];
    //         var t2=[];
    //         var t3=[];
    //         var t4=[];

    //         t1.push("Batting Innings 1:")
    //         t1.push("Batsman Runs Balls Fours Sixes StrikeRate Dismissal")
    //         const jj = response.body.data.batting[0]
    //         for(var i=0; i<jj.scores.length; i++){
    //             const arr= Object.values(jj.scores[i])
    //             if(jj.scores[i].dismissal!='not out'){
    //                 t1.push(arr[9] + "  "+ arr[7] + "  " + arr[6] + "  " + arr[4] + "  "+ arr[3]+ "  "+  arr[2] + "  "+  arr[8] )}
    //                 else{
    //                     t1.push(arr[8]+ "  "+  arr[6]+ "  "+  arr[5]+ "  "+  arr[3]+ "  "+  arr[2]+ "  "+  arr[1] + "  "+  arr[7] )
    //                 }
    //         }
    //         t1.push(" ")

    //         t2.push("Bowling Innings 1:")
    //         t2.push("Bowler Overs Runs Wickets Economy")
    //         const jj1 = response.body.data.bowling[0]
    //         for(var i=0; i<jj1.scores.length; i++){
    //             const arr= Object.values(jj1.scores[i])
    //             t2.push(arr[10]+ "  "+  arr[9]+ "  "+  arr[7]+ "  "+  arr[6]+ "  "+  arr[5])
    //         }
    //         t2.push("")
            
    //         t3.push("Batting Innings 2:")
    //         t3.push("Batsman Runs Balls Fours Sixes StrikeRate Dismissal ")
    //         const jj2 = response.body.data.batting[1]
    //         for(var i=0; i<jj2.scores.length; i++){
    //             const arr= Object.values(jj2.scores[i])
    //             if(jj2.scores[i].dismissal!='not out'){
    //                 t3.push(arr[9]+ "  "+  arr[7]+ "  "+  arr[6]+ "  "+  arr[4]+ "  "+  arr[3]+ "  "+  arr[2] + "  "+  arr[8] )}
    //             else{
    //                 t3.push(arr[8]+ "  "+  arr[6]+ "  "+  arr[5]+ "  "+  arr[3]+ "  "+  arr[2]+ "  "+  arr[1] + "  "+  arr[7] )
    //             }
    //         }
    //         t3.push("")

    //         t4.push("Bowling Innings 2:")
    //         t4.push("Bowler Overs Runs Wickets Economy")
    //         const jj3 = response.body.data.bowling[0]
    //         for(var i=0; i<jj3.scores.length; i++){
    //             const arr= Object.values(jj3.scores[i])
    //             t4.push(arr[10]+ "  "+  arr[9]+ "  "+  arr[7]+ "  "+  arr[6]+ "  "+  arr[5])
    //         }
    //         t.push(t1,t2,t3,t4)
    //         callback(t);
    //         // console.log(response.body.data.batting[0].scores[0])
    //     }
    // });
}
   
// const playerInfo = (pId) => {
//     const url="https://cricapi.com/api/playerStats?apikey=oiAtQNKqBjdWdz9QNbjVKxBtr7C3&pid="+pId;

//     request({url:url,json: true},(error,response)=>{

//         if(error){
//             console.log('Unable to connect to server at the moment!');
//         }
//         else {
//             const arr= response.body
//             console.log(arr.fullName)
//             console.log(arr.profile)
//             console.log(arr.imageURL)
//             console.log(arr.battingStyle)
//             console.log(arr.bowlingStyle)
//             console.log(arr.currentAge)
//             console.log(arr.majorTeams)
//             console.log(arr.born)
//             console.log(arr.country)
//             console.log(arr.playingRole)
            
//             // console.log(arr.data.batting.tests)
//             // console.log(arr.data.batting.ODIs)
//             // console.log(arr.data.batting.T20Is)
            
//             const jtests = JSON.stringify(arr.data.batting.tests)
//             console.log(jtests)
//             const data= JSON.parse(jtests)
//             console.log(data.Runs, data.BF, data[0])
            
//             console.log()
//             // console.log(arr.data.bowling.tests)
//             // console.log(arr.data.bowling.ODIs)
//             // console.log(arr.data.bowling.T20Is)

//         }
//     });
// }
   
// const playerId = (name) => {
//     const url="https://cricapi.com/api/playerFinder?apikey=oiAtQNKqBjdWdz9QNbjVKxBtr7C3&name="+name;
//     request({url:url,json: true},(error,response)=>{

//         if(error){
//             console.log('Unable to connect to server at the moment!');
//         }
//         else {
//             const arr= response.body.data
//                 const pId= arr[0].pid
//                 playerInfo(pId)
//         }
//     });
// }

// module.exports = {
//     oldMatches,
//     currMatches,
//     newMatches,
//     matchSquad,
//     matchSummary,
//     playerInfo,
//     playerId
// }

// const playerInfo = (pId,callback) => {
//     const url="https://cricapi.com/api/playerStats?apikey=oiAtQNKqBjdWdz9QNbjVKxBtr7C3&pid="+pId;

//     request({url:url,json: true},(error,response)=>{

//         if(error){
//             callback('Unable to connect to server at the moment!',undefined)
//         }
//         else {
//             const arr= response.body
//             t1=[]
//             t2=[]
//             t3=[]
//             t4=[]
//             t=[]
//             t5=[]
//             t6=[]
//             t7=[]
//             t8=[]
//             var j=Object.values(arr.data.batting.tests)
//             t2.push(j[13],j[10],j[8],j[0],j[1]);
//             var j=Object.values(arr.data.batting.ODIs)
//             t3.push(j[13],j[10],j[8],j[0],j[1]);
//             var j=Object.values(arr.data.batting.T20Is)
//             t4.push(j[13],j[10],j[8],j[0],j[1]);
//             t1.push(t2)
//             t1.push(t3)
//             t1.push(t4)
//             var j=Object.values(arr.data.bowling.tests)
//             t6.push(j[12],j[8],j[3],j[4],j[1]);
//             var j=Object.values(arr.data.bowling.ODIs)
//             t7.push(j[12],j[8],j[3],j[4],j[1]);
//             var j=Object.values(arr.data.bowling.T20Is)
//             t8.push(j[12],j[8],j[3],j[4],j[1]);
//             t5.push(t6)
//             t5.push(t7)
//             t5.push(t8)
//             t.push(t1,t5)

//             const tt=JSON.stringify(t);
//             const pdata=JSON.parse(tt);
//             callback(undefined,pdata)
            
        
//         }
//     });
// }
   
const playerId = (name,callback) => {
    const url="https://cricapi.com/api/playerFinder?apikey=oiAtQNKqBjdWdz9QNbjVKxBtr7C3&name="+name;
    request({url:url,json: true},(error,response)=>{

        if(error){

            callback('Unable to connect to server at the moment!',undefined)
        }
        else {
            const arr= response.body.data
                const pId= arr[0].pid
                callback(undefined,pId)
              
        }
    });
}
   

// playerId("Sachin Tendulkar");
module.exports = {
    oldMatches,
    currMatches,
    newMatches,
    // matchSquad,
    matchSummary
    // playerInfo,
    // playerId
}