
module.exports = function(app) {
    app.post('/increment', function(req, res) {
      incrementX(req.body.x, function(result) {
        res.json({ result: result });
      });
    });
  };
  
  function incrementX(x, callback) {
    x++;
    callback(x);
  }
  