var path = require('path');
var controllers = require('../controllers/controllers')

module.exports = function(app) {

    app.post('/login',(req,res)=> {
        controllers.login(req,res) 
    })

    app.post('/endbid',(req,res)=> {
        controllers.mybids(req,res) 
    })

    app.post('/submitcreate',(req,res)=> {
        controllers.submitcreate(req,res) 
    })

    app.get('/mybids',(req,res)=>{
        controllers.mybids(req,res)
    })

    // app.post('/delete',(req,res)=>{
    //     controllers.delete(req,res)
    // })



    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve('./client/dist/index.html'));
    });

}