var request = require('request');

it("should return as Game Theory", function(done) {
  request("http://localhost:3090/hello", function(error, response, body){
    //console.log(response);
    expect(body).toEqual("Game Theory");
    done();
  });
});

it("should not  return null", function(done) {
    request("http://localhost:3090/adminfetch", function(error, response, body){
      //console.log(response);
      expect(body).not.toBe(null);
      done();
    });
  });