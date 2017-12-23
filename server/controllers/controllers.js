var mongoose = require('mongoose');
var User = mongoose.model('User');
var Bid = mongoose.model('Bid');

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
            var newbid = new Bid(req.body)
            console.log(req.session)
            newbid.bidder = req.session.user._id
            newbid.product = req.body.product
            console.log(newbid)
            newbid.save((err) => {
                if(err){
                    return res.status(401).json(err);
                }
                else{
                    console.log(`${newbid} has been saved`)
                    res.redirect('/dashboard')
                }
            })
        },

        // submitcreate2:function(req,res){
        //     var newbid = new Bid(req.body)
        //     console.log(req.session)
        //     newbid.bidder = req.session.user._id
        //     console.log(newbid)
        //     newbid.save((err) => {
        //         if(err){
        //             return res.status(401).json(err);
        //         }
        //         else{
        //             console.log(`${newbid} has been saved`)
        //             res.redirect('/dashboard')
        //         }
        //     })
        // },

        mybids:function(req,res){
            Bid.find().populate('bidder').exec((err, bids) => {
                if(err){
                    return res.status(401).json(err)
                }
                else{
                   res.json({bids:bids,id:req.session.user._id})
                }
            })
        },

        // delete: function(req, res) {
        //     Appointment.remove({_id: req.body.id}, function(err){
        //         if (err){
        //             console.log(err);
        //         }
        //     });
        // },
    

}


    
   