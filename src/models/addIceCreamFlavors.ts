import IceCreamFlavor from "./icecremflavor";

const iceCreamContainer = document.getElementById('iceCream-Container');

function addIceCreamFlavors(flavorArray: IceCreamFlavor[] ) {
    flavorArray.forEach(flavor => {
        let scoops = 0;

        const flavorDiv = document.createElement('div');
        iceCreamContainer?.appendChild(flavorDiv)

        const popularStar = document.createElement('p');
        if(flavor.isPopular) {
            
            popularStar.textContent = '⭐️'
            flavorDiv?.appendChild(popularStar)
        } else {
            popularStar.textContent = '-'
            popularStar.style.color = 'white'
            flavorDiv?.appendChild(popularStar)
        }
        
        const flavorTitle = document.createElement('h2');
        flavorTitle.textContent = `${flavor.name}`
        flavorDiv.appendChild(flavorTitle);

        const flavorPrice = document.createElement('h3');
        flavorPrice.textContent = `Price: ${flavor.price.toFixed(2)} Euro`
        flavorDiv.appendChild(flavorPrice);

        const numberOfScoops = document.createElement('h3');
        flavorDiv.appendChild(numberOfScoops);
        numberOfScoops.textContent = `Scoops: ${scoops}`;

        const totalPriceOfIceCream = document.createElement('h3');
        totalPriceOfIceCream.textContent = `Total Price: ${flavor.getTotalPrice(0)} Euro`
        flavorDiv.appendChild(totalPriceOfIceCream);

        const plusOneScoopsButtons = document.createElement('button');
        plusOneScoopsButtons.textContent = '+1'
        flavorDiv.appendChild(plusOneScoopsButtons);

        plusOneScoopsButtons.addEventListener('click', () => {
            scoops++;
            numberOfScoops.textContent = `Scoops: ${scoops}`;
            totalPriceOfIceCream.textContent = `Total Price: ${flavor.getTotalPrice(scoops)} Euro`;
        });

    });
}

export default addIceCreamFlavors