const mongoose = require('mongoose');
const fs = require('fs');
const AWS = require('aws-sdk');


export default class DB {
    
    public static s3: any;
    public static start() {
        //Connect to MongoDB
        const uri = process.env.ATLAS_URI;
        mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
        );
        const connection = mongoose.connection;
        connection.once('open', () => {
        console.log("MongoDB database connection established successfully");
        })
        connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
        //Connect to aws bucket
    
        DB.s3 = new AWS.S3({
            accessKeyId: process.env.AWS_ACCESS_KEY,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
        });
        console.log(DB.s3)
    }
}

