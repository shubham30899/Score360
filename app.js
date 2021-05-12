const path = require('path')
const express = require('express')
const hbs = require('hbs')
const api= require('./public/js/api.js')
const port=process.env.PORT || 4000

const app = express()

const publicDirectoryPath = path.join(__dirname, './public')
const viewsPath = path.join(__dirname, './view')
const partialsPath = path.join(__dirname, './partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('',(req,res) => {
    res.render('home',{ 
        creator:'Jatin',
        loop:5
    })
})

app.get('/score',(req,res) => {
    api.currMatches((error, cricdata) => {
        if (error) {
            return res.send({ error })
        }
        res.send({
            cricdata
        })
    })
})

app.get('/matches',(req,res) => {
    res.render('matches',{ 
        creator:'Jatin',
        loop:5
    })
})

app.get('/matches/extra',(req,res) => {
    api.oldMatches((data) => {
        const buffer= JSON.stringify(data)
        const fdata= JSON.parse(buffer)
        api.newMatches((jdata) => {
            res.send({
                fdata,
                jdata
            })
        })
    })  
})

app.get('/scorecard',(req,res) => {
    res.render('scorecard',{ 
        creator:'Jatin',
        loop:5
    })
})

// var uid=1254079

app.get('/scorecard/extra/:uids',(req,res) => {
    uid = req.params.uids
    res.render('scorecards',{
        creator: 'Jatin'
    })  
})

app.get('/scorecard/extra',(req,res) => {
    api.matchSummary(uid,(sdata) => {
        res.send({
            sdata
        })  
    })      
})


app.get('/player',(req,res) => {
    res.render('player',{ 
        creator:'Jatin',
        loop:5
    })
})
app.get('/player/stats',(req,res)=>{
    if (!req.query.name) {
        return res.send({ 
            error: 'You must provide a name'
        })
    }
    api.playerId(req.query.name, (error, pId) => {
        if (error) {
            return res.send({ error })
        }
    api.playerInfo(pId,(error,pdata)=>{
        if (error) {
            return res.send({ error })
        }
        res.send({
              pdata
        })
    })
   })
})

// app.get('/help/*', (req, res) => {
//     res.render('404', {
//         title: '404',
//         name: 'Andrew Mead',
//         errorMessage: 'Help article not found.'
//     })
// })

// app.get('*', (req, res) => {
//     res.render('404', {
//         title: '404',
//         name: 'Andrew Mead',
//         errorMessage: 'Page not found.'
//     })
// })

app.listen(port, () => {
    console.log('Server is up on port.'+ port)
})