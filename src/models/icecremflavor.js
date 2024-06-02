"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IceCreamFlavor = /** @class */ (function () {
    function IceCreamFlavor() {
        this.name = '';
        this.price = 0;
        this.isPopular = false;
        this.description = undefined;
    }
    IceCreamFlavor.prototype.getTotalPrice = function (numberOfScoops) {
        var totalPrice = this.price * numberOfScoops;
        return totalPrice.toFixed(2);
    };
    IceCreamFlavor.prototype.printInfo = function () {
        if (this.isPopular) {
            console.log("Flavor ".concat(this.name, " is popular and costs ").concat(this.price.toFixed(2), " Euro."));
        }
        else {
            console.log("Flavor ".concat(this.name, " is not popular and costs ").concat(this.price.toFixed(2), " Euro."));
        }
    };
    return IceCreamFlavor;
}());
exports.default = IceCreamFlavor;
