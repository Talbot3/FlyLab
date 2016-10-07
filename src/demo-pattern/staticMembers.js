/**
 * Created by goerver on 16-10-5.
 *
 * Private Static Members
 * Shared by all the objects created with the same constructor function
 * Not accessible outside the constructor
 *
 * Note: this code line is very import to use static method
 * just like this:
 *
 * return Gadget.isShiny.call(this);
 *
 */
var Gadget = function (price) {

    this.price = price;

};

// a static method

Gadget.isShiny = function () {

    // this always works

    var msg = "you bet";

    // Checking if the static method is called by instance.

    if (this instanceof Gadget) {

        // this only works if called non-statically

        msg += ", it costs $" + this.price + '!';

    }

    return msg;

};


// a normal method added to the prototype

Gadget.prototype.setPrice = function (price) {

    this.price = price;

};


// a normal method added to the prototype

Gadget.prototype.isShiny = function () {

    return Gadget.isShiny.call(this);

};

var a = new Gadget('499.99');
console.log(a.isShiny());