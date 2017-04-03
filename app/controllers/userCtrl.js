function RATE(periods, payment, present, future, type, guess) {
  // Credits: rabugento

  // Initialize guess
  var guess = (typeof guess === 'undefined') ? 0.01 : guess;

  // Initialize future
  var future = (typeof future === 'undefined') ? 0 : future;

  // Initialize type
  var type = (typeof type === 'undefined') ? 0 : type;

  // Evaluate periods (TODO: replace with secure expression evaluator)
  periods = eval(periods);

  // Set maximum epsilon for end of iteration
  var epsMax = 1e-10;
  
  // Set maximum number of iterations
  var iterMax = 50;

  // Implement Newton's method
  var y, y0, y1, x0, x1 = 0, f = 0, i = 0;
  var rate = guess;
  if (Math.abs(rate) < epsMax) {
     y = present * (1 + nper * rate) + payment * (1 + rate * type) * nper + future;
  } else {
     f = Math.exp(nper * Math.log(1 + rate));
     y = present * f + payment * (1 / rate + type) * (f - 1) + future;
  }
  y0 = present + payment * nper + future;
  y1 = present * f + payment * (1 / rate + type) * (f - 1) + future;
  i = x0 = 0;
  x1 = rate;
  while ((Math.abs(y0 - y1) > epsMax) && (i < iterMax)) {
    rate = (y1 * x0 - y0 * x1) / (y1 - y0);
    x0 = x1;
    x1 = rate;
    if (Math.abs(rate) < epsMax) {
      y = present * (1 + nper * rate) + payment * (1 + rate * type) * nper + future;
    } else {
      f = Math.exp(nper * Math.log(1 + rate));
      y = present * f + payment * (1 / rate + type) * (f - 1) + future;
    }
    y0 = y1;
    y1 = y;
    ++i;
  }
  return rate;
}