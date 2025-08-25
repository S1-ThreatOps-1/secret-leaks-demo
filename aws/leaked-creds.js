const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const aws = require('aws-sdk');

// Configure AWS with your credentials
aws.config.update({
  accessKeyId: 'AKIA2T2SJH6MV3ND4TO3',
  secretAccessKey: 'j96/MTLCzQHBt+nO0S/fGmAX/JUBWT0XuZLMFKxf',
  region: 'us-east-2'
});

const s3 = new aws.S3();
