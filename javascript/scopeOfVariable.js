{
    let a=10;
}
console.log(a);
// will give error as let allows only within a block or function but declared values do not exist outside this block

{
    var b=10;
}
console.log(b);
//no error as var declares values for entire function

var b=10;
{
    var b=7;
}
console.log(b);
//will give 7 as output