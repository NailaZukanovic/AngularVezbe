// function log(message){
//   console.log(message);
// }
// let msg = '';
// for(vat i = 0;i < 10; i++)
// {
//   msg = 'Hello Tarik';
//   log(msg);
//   log(`${i}-ta poruka je ${msg}`);
// }
// let x:Number;
// let y:Number;
// let s:Boolean;
// x = 'pet';
// y = 3;
// interface Person{
//   firstName: String;
//   lastName: String;
// }
// interface point{
//   x:Number;
//   y:Number;
// }
// function draw(p:point)
// {
//   console.log(`Tacka ima koordinate ${p.x} i ${p.y}`);
// }
// let tacka: point = {
//   x: 5,
//   y: 3
// }
// draw(tacka);
// let message;
// message = 'Hello Tarik';
// var p = (<string>message).endsWith('Tarik'); //najbolje ovaj nacin
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("Tacka ima koordinate ".concat(this.x, " i ").concat(this.y));
    };
    return Point;
}());
var p = new Point(3, 7);
p.draw();
