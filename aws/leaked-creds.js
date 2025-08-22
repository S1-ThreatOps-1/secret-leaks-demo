const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const aws = require('aws-sdk');

// Configure AWS with your credentials
aws.config.update({
  accessKeyId: 'AKIA2T2SJH6M7ZGJORUW',
  secretAccessKey: '9VHAZEE807ZdcDjv4v9Bzbn3AxhoRhuLT2Z0WMuc',
  region: 'us-east-2'
});

const s3 = new aws.S3();
