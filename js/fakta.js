//const SYSTEM = 'fakta';

class FaktaPriceStrategy {
    getDescription() {
        return " Velkommen til Fakta. Det er gratis de første 5 minutter, derefter koster der 20kr pr. kvarter.";
    }

    calculatePrice(checkinTime, checkoutTime) {
        const time = ((checkoutTime - checkinTime) / 1000) - 5;
    if (time < 0) {
        price = 0;
    } else {
        price = 20 * (Math.floor(time/15) + 1);
    }
    }
}



document.addEventListener('DOMContentLoaded', () => {
    main(new ParkingLot(new FaktaPriceStrategy()));
});