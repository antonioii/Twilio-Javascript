const colors = ["red", "yellow", "blue"];

class Ducktypium {
  constructor(color) {
    if (!colors.includes(color)) {
      throw new TypeError("Colour must be red, yellow, or blue!");
    }
    
    this.calibrationSequence = [];
    this.color = color;

  };

  refract(newColor) {

    if (!colors.includes(newColor)) {
      throw new TypeError("Colour must be red, yellow, or blue!");
    } else if ((this.color == "red" && newColor == "blue") || (this.color == "blue" && newColor == "red")) {
      return "purple";
    } else if ((this.color == "red" && newColor == "yellow") || (this.color == "yellow" && newColor == "red")) {
      return "orange";
    } else if ((this.color == "yellow" && newColor == "blue") || (this.color == "blue" && newColor == "yellow")) {
      return "green";
    } else {
      return this.color;
    }

  };

  calibrate(arr) {
	let currentArray = [...arr];
	currentArray.sort();

    currentArray.forEach(number => {
      let multiply = number * 3;
      this.calibrationSequence.push(multiply);
    });
  }
}

/* TESTS:
try {
  const badColor = new Ducktypium('pink');
} catch(e) {
  console.log('Color must be red, yellow, or blue!');
}

const dt = new Ducktypium('red');

console.log(dt.color); // prints 'red'

console.log(dt.refract('blue')); // prints 'purple'
console.log(dt.refract('red')); // prints 'red'

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // prints [3, 9, 15]*/
