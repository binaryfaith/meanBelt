'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema

const bidsSchema = new mongoose.Schema({
	bid: {
		type:Number,
		},
	product: {
		type:String,
		},
    bidder: {
		type:Schema.Types.ObjectId, ref: 'User',
		required: true
    },
    
})
const Appointment = mongoose.model('Bid', bidsSchema)