"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var iceCreamContainer = document.getElementById('iceCream-Container');
function addIceCreamFlavors(flavorArray) {
    flavorArray.forEach(function (flavor) {
        var scoops = 0;
        var flavorDiv = document.createElement('div');
        iceCreamContainer === null || iceCreamContainer === void 0 ? void 0 : iceCreamContainer.appendChild(flavorDiv);
        var popularStar = document.createElement('p');
        if (flavor.isPopular) {
            popularStar.textContent = '⭐️';
            flavorDiv === null || flavorDiv === void 0 ? void 0 : flavorDiv.appendChild(popularStar);
        }
        else {
            popularStar.textContent = '-';
            popularStar.style.color = 'white';
            flavorDiv === null || flavorDiv === void 0 ? void 0 : flavorDiv.appendChild(popularStar);
        }
        var flavorTitle = document.createElement('h2');
        flavorTitle.textContent = "".concat(flavor.name);
        flavorDiv.appendChild(flavorTitle);
        var flavorPrice = document.createElement('h3');
        flavorPrice.textContent = "Price: ".concat(flavor.price.toFixed(2), " Euro");
        flavorDiv.appendChild(flavorPrice);
        var numberOfScoops = document.createElement('h3');
        flavorDiv.appendChild(numberOfScoops);
        numberOfScoops.textContent = "Scoops: ".concat(scoops);
        var totalPriceOfIceCream = document.createElement('h3');
        totalPriceOfIceCream.textContent = "Total Price: ".concat(flavor.getTotalPrice(0), " Euro");
        flavorDiv.appendChild(totalPriceOfIceCream);
        var plusOneScoopsButtons = document.createElement('button');
        plusOneScoopsButtons.textContent = '+1';
        flavorDiv.appendChild(plusOneScoopsButtons);
        plusOneScoopsButtons.addEventListener('click', function () {
            scoops++;
            numberOfScoops.textContent = "Scoops: ".concat(scoops);
            totalPriceOfIceCream.textContent = "Total Price: ".concat(flavor.getTotalPrice(scoops), " Euro");
        });
    });
}
exports.default = addIceCreamFlavors;
