const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const aws = require('aws-sdk');

// Configure AWS SDK with your credentials
aws.config.update({
  accessKeyId: 'AKIA2T2SJH6MXQGBHRPP',
  secretAccessKey: 'icycDMWCD167itTgprHhOrRiCr9buJ1H8o4OHbmU',
  region: 'us-east-2'});

const s3 = new aws.S3();
