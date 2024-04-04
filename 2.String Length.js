function stringLength(str1, str2, str3) {
    let total = 0;
    total += str1.length;
    total += str2.length;
    total += str3.length;
    let avgSum = Math.floor(total / 3);

    console.log(`${total}\n${avgSum}`);
}
stringLength('chocolate', 'ice cream', 'cake');