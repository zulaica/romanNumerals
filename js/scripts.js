var romanNumerals = function(number) {
  // var symbols = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000};

  var digits = number.split("");
  var spaces = digits.length;
  var results = "";
  var counter = 0;

  if (spaces == 3) {

    if (digits[0] == 9) {
      results = "CM";
    } else if (digits[0] >= 5) {
      results = "D";
      for(counter = digits[0] - 5; counter != 0; counter--) { results = results + "C"; }
      // results = "D";
      // counter = digits[0] - 5;
      // while(counter != 0) {
      //   results = results + "C";
      //   counter--;
      // }
    } else if (digits[0] == 4) {
      results = "CD";
    } else {
      for(counter = digits[0]; counter != 0; counter--) { results = results + "C"; }
    }

  }




  return results;

};
