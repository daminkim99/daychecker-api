const express = require('express')
const cors = require('cors')
const app = express()

const PORT = 8000

app.use(cors())

//middleware that'll deal with static templates 
app.use("/static", express.static('./static/'))
//apis
const days = {
    'monday': {
        'mood':'bad'
    },
    'tuesday': {
        'mood': 'better'
    },
    'wednesday': {
        'mood': 'okay'
    },
    'thursday': {
        'mood': 'almost there'
    },
    'friday': {
        'mood': 'TGIFFFFFF'
    },
    'saturday': {
        'mood': 'TGISSSSSS'
    },
    'sunday': {
        'mood': 'RGH monday not again'
    },
    'unknown': {
        'mood': 'must input a day'
    }

}

app.get('/', (req,res) => {
    res.sendFile( __dirname +'/index.html')
})

app.get('/api', (req, res) => {
    res.json(days)
})
//returns to the main.js with the corresponding value from the api request on main.js
app.get('/api/:day', (req, res) => {
    const day = req.params.day.toLowerCase()
    if (days[day]){
        res.json(days[day]['mood'])
    } else {
        res.json(days['unknown']['mood'])
    }
    
})

app.listen( process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
}) 