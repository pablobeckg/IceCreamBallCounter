import addIceCreamFlavors from "./models/addIceCreamFlavors";
import IceCreamFlavor from "./models/icecremflavor";

const strawberry: IceCreamFlavor = new IceCreamFlavor();
strawberry.name = "Strawberry";
strawberry.price = 2;
strawberry.isPopular = true;
strawberry.description = "It is delicious";

console.log(strawberry);
console.log(strawberry.getTotalPrice(4));
strawberry.printInfo();

const chocolate: IceCreamFlavor = new IceCreamFlavor();
chocolate.name = "Chocolate";
chocolate.price = 3.9;
chocolate.isPopular = false;
chocolate.description = "It is super delicious";

console.log(chocolate);
console.log(chocolate.getTotalPrice(4));
chocolate.printInfo();

const banana: IceCreamFlavor = new IceCreamFlavor();
banana.name = "Banana";
banana.price = 3.2;
banana.isPopular = true;
banana.description = "It is super duper delicious";

console.log(banana);
console.log(banana.getTotalPrice(4));
banana.printInfo();

const mango: IceCreamFlavor = new IceCreamFlavor();
mango.name = "Mango";
mango.price = 5.3;
mango.isPopular = false;
mango.description = "It is super duper ultra delicious";

console.log(mango);
console.log(mango.getTotalPrice(4));
mango.printInfo();

const iceCreamFlavors = [strawberry, chocolate, banana, mango];

iceCreamFlavors.forEach((flavor) => {
  if (flavor.isPopular) {
    console.log(flavor.name);
  }
});

addIceCreamFlavors(iceCreamFlavors);
