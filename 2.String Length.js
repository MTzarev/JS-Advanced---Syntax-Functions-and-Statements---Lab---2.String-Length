function stringLength(str1, str2, str3) {
    let total = str1.length+str2.length+str3.length;
    
    let avgSum = Math.floor(total / 3);

    console.log(`${total}\n${avgSum}`);
}
stringLength('chocolate', 'ice cream', 'cake');
