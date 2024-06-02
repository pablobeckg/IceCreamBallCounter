class IceCreamFlavor {
    name: string = '';
    price: number = 0;
    isPopular: boolean = false;
    description?: string = undefined;
    constructor () {
    }

    getTotalPrice(numberOfScoops: number) {
        const totalPrice = this.price * numberOfScoops;
        return totalPrice.toFixed(2);
    }
    printInfo() {
        if(this.isPopular) {
            console.log(`Flavor ${this.name} is popular and costs ${this.price.toFixed(2)} Euro.`)
        } else {
            console.log(`Flavor ${this.name} is not popular and costs ${this.price.toFixed(2)} Euro.`)
        }
    }
}

export default IceCreamFlavor;