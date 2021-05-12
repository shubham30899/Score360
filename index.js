const request=require('request')

console.log("Ruk Ja Nek Bsdk.....\n");








// const url="https://cricapi.com/api/cricketScore/";
// const test={
//     "unique_id": "1254063",
//      "apikey": "oiAtQNKqBjdWdz9QNbjVKxBtr7C3"
// };

// request({url:url,json: test},(error,response)=>{

//     if(error){
//         console.log('Unable to connect to location services!');
//     }
//     else{
//     // callback(undefined,response.body.current.weather_descriptions[0] + ' It is currently ' + response.body.current.temperature + ' degress out. There is a ' + response.body.current.precip + '% chance of rain.')
//     // console.log(response.body.stat);
//     if(response.body.matchStarted){
//         const gg='team-1';
//         // console.log(response.body)
//         // console.log(response.score)
//         console.log("match completed")
//         // console.log(response.body.team-1 ,"vs",response.body.team-2);
//         console.log(response.body.score)
//     }
//     else{
//         console.log("scorecard not available");
//     }
// }
// });












// const oldMatches = () => {
//     const url="https://cricapi.com/api/matches?apikey=oiAtQNKqBjdWdz9QNbjVKxBtr7C3";
//     request({url:url,json: true},(error,response)=>{

//         if(error){
//             console.log('Unable to connect to server at the moment!');
//         }
//         else {
//             const allMatches = response.body.matches;
//             // console.log(allMatches)
//             const compMatches = allMatches.filter((match) => {
//                 if (match.winner_team!=null) {
//                     return match
//                 }
//             });
//             for (var i=0; i<compMatches.length; i++) {
//                 const j = Object.values(compMatches[i])
//                 console.log("Match",i+1)
//                 console.log(j[3],"Vs",j[4])
//                 console.log("Winner is",j[7])
//                 console.log(j[0])
//             }
//         }
//     });
// };

//  oldMatches();








// const newMatches = () => {
//     const url="https://cricapi.com/api/matches?apikey=oiAtQNKqBjdWdz9QNbjVKxBtr7C3";
//     request({url:url,json: true},(error,response)=>{

//         if(error){
//             console.log('Unable to connect to server at the moment!');
//         }
//         else {
//             const d=new Date()
//             const dd= d.getDate() + 1
//             const allMatches = response.body.matches;
//             const compMatches = allMatches.filter((match) => {
//                 const td= new Date(match.date)
//                 const tdd= td.getDate()
//                 if (match.matchStarted==false && tdd==dd) {
//                     return match
//                 }
//             });
//             for (var i=0; i<compMatches.length; i++) {
//                 const j = Object.values(compMatches[i])
//                 console.log("Match",i+1)
//                 console.log(j[3],"Vs",j[4])
//                 console.log("Type:",j[5])
//                 console.log(Date(j[2]))
//             }
//             // console.log(compMatches)
//         }
//     });
// };

// newMatches();





const currMatches = (callback) => {
    const url="https://cricapi.com/api/cricket?apikey=oiAtQNKqBjdWdz9QNbjVKxBtr7C3";
    request({url:url,json: true},(error,response)=>{

        if(error){
            // 
            callback('Unable to connect to location services!', undefined)
        }
        else{
            var today_mat=[];
            const arr= response.body.data
            for(var i=0; i<arr.length; i++){
                console.log(i+1,".",arr[i].description)
                 today_mat.push(arr[i].description,arr[i].unique_id);
            }
            for(var i=0; i<today_mat.length; i++){
                console.log(today_mat[i])
            }
            const aa=JSON.stringify(today_mat)
            console.log(aa)
            const aa1=JSON.parse(aa)
            console.log(aa1)
            console.log(typeof(today_mat[0]))
            ll=today_mat.length
            
        }
    });
}
   

currMatches();







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
   

// matchSquad("1034809")




const matchSummary = (uid) => {
    const url="https://cricapi.com/api/fantasySummary?apikey=oiAtQNKqBjdWdz9QNbjVKxBtr7C3&unique_id="+uid;
    // const test= {
    //     "unique_id" : uid,
    //     "apikey" : "oiAtQNKqBjdWdz9QNbjVKxBtr7C3"
    // }
    request({url:url,json: true},(error,response)=>{

        if(error){
            console.log('Unable to connect to server at the moment!');
        }
        else {
            console.log("Batting Innings 1:")
            console.log("Batsman Runs Balls Fours Sixes StrikeRate Dismissal ")
            const jj = response.body.data.batting[0]
            for(var i=0; i<jj.scores.length; i++){
                const arr= Object.values(jj.scores[i])
                if(jj.scores[i].dismissal!='not out'){
                    console.log(arr[9], arr[7], arr[6], arr[4], arr[3], arr[2] , arr[8] )}
                    else{
                        console.log(arr[8], arr[6], arr[5], arr[3], arr[2], arr[1] , arr[7] )
                    }
            }
            console.log()

            console.log("Bowling Innings 1:")
            console.log("Bowler Overs Runs Wickets Economy")
            const jj1 = response.body.data.bowling[0]
            for(var i=0; i<jj1.scores.length; i++){
                const arr= Object.values(jj1.scores[i])
                    console.log(arr[10], arr[9], arr[7], arr[6], arr[5])
            }
            console.log()
            
            console.log("Batting Team 2:")
            console.log("Batsman Runs Balls Fours Sixes StrikeRate Dismissal ")
            const jj2 = response.body.data.batting[1]
            for(var i=0; i<jj2.scores.length; i++){
                const arr= Object.values(jj2.scores[i])
                if(jj2.scores[i].dismissal!='not out'){
                console.log(arr[9], arr[7], arr[6], arr[4], arr[3], arr[2] , arr[8] )}
                else{
                    console.log(arr[8], arr[6], arr[5], arr[3], arr[2], arr[1] , arr[7] )
                }
            }
            console.log()

            console.log("Bowling Innings 2:")
            console.log("Bowler Overs Runs Wickets Economy")
            const jj3 = response.body.data.bowling[0]
            for(var i=0; i<jj3.scores.length; i++){
                const arr= Object.values(jj3.scores[i])
                    console.log(arr[10], arr[9], arr[7], arr[6], arr[5])
            }
            // console.log(response.body.data.batting[0].scores[0])
        }
    });
}
   

matchSummary("1254079")


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
            
//             console.log(arr.data.batting.tests)
//             // console.log(arr.data.batting.ODIs)
//             // console.log(arr.data.batting.T20Is)
            
//             const jtests = JSON.stringify(arr.data.batting.tests)
//             console.log(jtests)
//             const data= JSON.parse(jtests)
//             console.log(data)
//             console.log(data.Runs, data.BF)
            
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
   

//playerId("Mahendra Singh Dhoni");