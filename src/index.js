let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
let dozens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

module.exports = function toReadable(number) {
    let i = String(number);

    switch (i.length) {
        case 1:
            return numbers[+i];
        case 2:
            return two(i);
        case 3:
            return three(i);
    }
    return "Out of scope";
};

let two = (i) => {
    if(i.startsWith("0")) i = i[1];
    if (numbers[i]) return numbers[+i];
    if (i[1] == "0") return dozens[+i[0] - 2];
    return dozens[+i[0] - 2] + " " + numbers[i[1]];
};

let three = (i) => {
    if (i[1] == "0" && i[2] == "0") return numbers[+i[0]] + " hundred";
    return numbers[+i[0]] + " hundred " + two(i[1] + i[2]);
};
