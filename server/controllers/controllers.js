var mongoose = require('mongoose');
var User = mongoose.model('User');
var Appointment = mongoose.model('Appointment');

module.exports = {
        login: function (req, res) {
            User.findOne({name: req.body.name}, (err, user) => {
                if(err){
                    return res.status(401).json(err)
                }
                else if(user){
                    req.session.user = user
                    res.redirect('/dashboard')
                }
                else{
                    var newuser = new User(req.body);
                    newuser.save((err) => {
                        if(err){
                            return res.status(401).json(err);
                        }
                        else{
                            console.log(`${newuser} has been saved`)
                            req.session.user = newuser;
                            res.redirect('/dashboard')
                        }
                    })
                }
            })
        },

        submitcreate:function(req,res){
            var newappointment = new Appointment(req.body)
            console.log(req.session)
            newappointment.author = req.session.user._id
            console.log(newappointment)
            newappointment.save((err) => {
                if(err){
                    return res.status(401).json(err);
                }
                else{
                    console.log(`${newappointment} has been saved`)
                    res.redirect('/dashboard')
                }
            })
        },

        myappointments:function(req,res){
            Appointment.find().populate('author').exec((err, appointments) => {
                if(err){
                    return res.status(401).json(err)
                }
                else{
                   res.json({appointments:appointments,id:req.session.user._id})
                }
            })
        },

        delete: function(req, res) {
            Appointment.remove({_id: req.body.id}, function(err){
                if (err){
                    console.log(err);
                }
            });
        },
    

}


    
   