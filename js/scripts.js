var romanNumerals = function(number) {

  var digits = number.split("");
  var spaces = digits.length;
  var results = "";
  var counter = 0;

  var romanCalculator = function(low,mid,high) {
    if (digits[0] == 9) {
      results = results + low + high;
    } else if (digits[0] >= 5) {
      results = results + mid;
      for(counter = digits[0] - 5; counter != 0; counter--) { results = results + low; }
    } else if (digits[0] == 4) {
      results = results + low + mid;
    } else {
      for(counter = digits[0]; counter != 0; counter--) { results = results + low; }
    };
    digits = digits.slice(1);
    spaces--;
  };

  if (spaces == 4) {
    romanCalculator("M","M","M");
  };

  if (spaces == 3) {
    romanCalculator("C","D","M");
  };

  if (spaces==2) {
    romanCalculator("X","L","C");
  };

  if(spaces == 1) {
    romanCalculator("I","V","X");
  };

  return results;

};


// Notes:
// ----------
// results = "D";
// counter = digits[0] - 5;
// while(counter != 0) {
//   results = results + "C";
//   counter--;
// }
