const mongoose = require('mongoose')

const url = `mongodb+srv://chat-apps:YrSrDWPH3tRxhStk@cluster0.kkqdore.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))