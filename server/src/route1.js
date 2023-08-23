
module.exports = function(app) {
    app.get('/gcd/:x/:y', function(req, res) {
      const x = parseInt(req.params.x);
      const y = parseInt(req.params.y);
      const result = GCD(x, y);
      res.send('GCD of ' + x + ' and ' + y + ' is ' + result);
    });
  };
  
  function GCD(x, y) {
    while (y !== 0) {
      const temp = y;
      y = x % y;
      x = temp;
    }
    return x;
  }
  