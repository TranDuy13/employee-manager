const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Schedule = new Schema({
    TimeStart: {
        type: Date
    },
    TimeEnd: {
        type: Date
    },
    Monday:[
        {
            Date:{
                type: Date,
                required: true
            },
            C1:[{
                employee: [
                    { type: mongoose.SchemaTypes.ObjectId, ref: 'User',}]
                }
            ],
            C2:[{
                employee: [
                    { type: mongoose.SchemaTypes.ObjectId, ref: 'User',}]
                }
            ],
            C3:[{
                employee: [
                    { type: mongoose.SchemaTypes.ObjectId, ref: 'User',}]
                }
            ],
        },
     
    ],
    Tuesday:[
        {
            Date:{
                type: Date,
                required: true
            },
            C1:[{
                employee: [
                    { type: mongoose.SchemaTypes.ObjectId, ref: 'User',}]
                }
            ],
            C2:[{
                employee: [
                    { type: mongoose.SchemaTypes.ObjectId, ref: 'User',}]
                }
            ],
            C3:[{
                employee: [
                    { type: mongoose.SchemaTypes.ObjectId, ref: 'User',}]
                }
            ],
        },
     
    ],
    Wednesday:[
        {
            Date:{
                type: Date,
                required: true
            },
            C1:[{
                employee: [
                    { type: mongoose.SchemaTypes.ObjectId, ref: 'User',}]
                }
            ],
            C2:[{
                employee: [
                    { type: mongoose.SchemaTypes.ObjectId, ref: 'User',}]
                }
            ],
            C3:[{
                employee: [
                    { type: mongoose.SchemaTypes.ObjectId, ref: 'User',}]
                }
            ],
        },
     
    ],
    Thursday:[
        {
            Date:{
                type: Date,
                required: true
            },
            C1:[{
                employee: [
                    { type: mongoose.SchemaTypes.ObjectId, ref: 'User',}]
                }
            ],
            C2:[{
                employee: [
                    { type: mongoose.SchemaTypes.ObjectId, ref: 'User',}]
                }
            ],
            C3:[{
                employee: [
                    { type: mongoose.SchemaTypes.ObjectId, ref: 'User',}]
                }
            ],
        },
     
    ],
    Friday:[
        {
            Date:{
                type: Date,
                required: true
            },
            C1:[{
                employee: [
                    { type: mongoose.SchemaTypes.ObjectId, ref: 'User',}]
                }
            ],
            C2:[{
                employee: [
                    { type: mongoose.SchemaTypes.ObjectId, ref: 'User',}]
                }
            ],
            C3:[{
                employee: [
                    { type: mongoose.SchemaTypes.ObjectId, ref: 'User',}]
                }
            ],
        },
     
    ],
    Saturday:[
        {
            Date:{
                type: Date,
                required: true
            },
            C1:[{
                employee: [
                    { type: mongoose.SchemaTypes.ObjectId, ref: 'User',}]
                }
            ],
            C2:[{
                employee: [
                    { type: mongoose.SchemaTypes.ObjectId, ref: 'User',}]
                }
            ],
            C3:[{
                employee: [
                    { type: mongoose.SchemaTypes.ObjectId, ref: 'User',}]
                }
            ],
        },
     
    ],
    Sunday:[
        {
            Date:{
                type: Date,
                required: true
            },
            C1:[{
                employee: [
                    { type: mongoose.SchemaTypes.ObjectId, ref: 'User',}]
                }
            ],
            C2:[{
                employee: [
                    { type: mongoose.SchemaTypes.ObjectId, ref: 'User',}]
                }
            ],
            C3:[{
                employee: [
                    { type: mongoose.SchemaTypes.ObjectId, ref: 'User',}]
                }
            ],
        },
    ],

}, { timestamps: true })

Schedule.pre(/^find/, function (next) {
    this.populate({
        path: 'employee',
        select: '-password',
    });
    next();
});


module.exports = mongoose.model('Schedule', Schedule)