var request = require('request');

it("should not  return null", function(done) {
    request("https://kxt4vjniid.execute-api.us-east-1.amazonaws.com/prod/adminfetch", function(error, response, body){
      //console.log(response);
      expect(body).not.toBe(null);
      done();
    });
  });

it("should return a valid value", function(done) {
    request.post("https://kxt4vjniid.execute-api.us-east-1.amazonaws.com/prod/getprefassigned",{json: {roll:'CB.EN.U4CSE17101'}}, function(error, response, body){
      //console.log(response);
	  //console.log(body)
      expect(body).not.toBe(null);
      done();
    });
  });
  //---------------------------------------------------------------
  it("correct password should not be null", function(done) {
    request.post("https://kxt4vjniid.execute-api.us-east-1.amazonaws.com/prod/verify",{json: {roll:'CB.EN.U4CSE17101',pass:'password'}}, function(error, response, body){
      //console.log(response);
	  //console.log(body)
      expect(body['name']).not.toBe(' ');
      done();
    });
  });
  it("invalid password should return empty", function(done) {
    request.post("https://kxt4vjniid.execute-api.us-east-1.amazonaws.com/prod/verify",{json: {roll:'CB.EN.U4CSE17101',pass:'password1'}}, function(error, response, body){
      //console.log(response);
	  //console.log(body)
      expect(body['name']).toBe('');
      done();
    });
  });
  it("Working of server", function(done) {
    request.get("https://kxt4vjniid.execute-api.us-east-1.amazonaws.com/prod/", function(error, response, body){
      //console.log(response);
	  //console.log(body)
      expect(body).not.toBe(null);
      done();
    });
  });