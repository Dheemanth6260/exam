var path = require('path'),    
rootPath = path.normalize(__dirname + '/..'),    
env = process.env.NODE_ENV || 'development';//the configuration will use either the development or production configuration based on the NODE_ENV environment variable//
 
var config = {  
development: {    
            root: rootPath,    
            app: {name: 'exam'},    
            port: 5000,  
            db: 'mongodb://127.0.0.1/exam-dev' 
 },  
 
  };
 
module.exports = config[env];//exports the confg determined by the env variable//
 
