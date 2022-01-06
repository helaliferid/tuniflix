const mongoose = require('mongoose');
const Mockgoose = require('mockgoose').Mockgoose;
const mockgoose = new Mockgoose(mongoose);
const MovieModel= require('./movies.schema');
 
const mongodb_uri='mongodb://localhost:27017/mydb';

 
mockgoose.prepareStorage().then(function() {
    mongoose.connect(mongodb_uri, options);	
});


describe('Movies Model Testing Suit', function(){
    it('Should succeed',function(){
        expect(true).toBe(true);
    });

});
