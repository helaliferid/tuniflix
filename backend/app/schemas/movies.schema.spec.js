const mongoose = require('mongoose');
const Mockgoose = require('mockgoose').Mockgoose;
const mockgoose = new Mockgoose(mongoose);
const MovieModel= require('./movies.schema');
 
const mongodb_uri='mongodb://localhost:27017/netfilxDb';
const  options = {
    useMongoClient: true,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
  };

 
mockgoose.prepareStorage().then(function() {
    mongoose.connect(mongodb_uri, options);	
});


describe('Movies Model Testing Suit', function(){
    it('Should succeed',function(){
        expect(true).toBe(true);
    });

});
