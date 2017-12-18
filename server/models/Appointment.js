'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema

const appointmentsSchema = new mongoose.Schema({
	complaint: {
		type:String,
		required: [true, "Please enter a complaint."]
    },
    date: {
		type:String,
		required: [true, "Please enter a time"]
    },
    time: {
		type:String,
		required: [true, "Please enter a time"]
    },
    author: {
		type:Schema.Types.ObjectId, ref: 'User',
		required: true
    },
    
	// This site only requires a name, so here we
	// have our user schema which only requires a name
})
const Appointment = mongoose.model('Appointment', appointmentsSchema)