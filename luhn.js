function check(number) {
  var reverseLuhnDigits = [];
  var luhnSum = 0;

  // Convert numbers to array and reverse
  var numArray = number.toString().split("");
  var reverseArray = numArray.reverse();

  // Calculate Luhn digits from the end of array to start
  // Multiple every second digit from the end by 2
  // If multiple is greater than 16, subtract 9
  for (var i=0; i < reverseArray.length; i++) {
    if (i % 2 != 0) {
      if (numArray[i] * 2 > 9) {
        var luhni = numArray[i] * 2 - 9;
      } else {
        var luhni = numArray[i] * 2;
      }
    } else {
      var luhni = numArray[i];
    }
    luhnSum += Number(luhni);
  }

  // Check to see if sum is multiple of 10
  if (luhnSum % 10 === 0) {
    return true;
  } else {
    return false;
  }
}
