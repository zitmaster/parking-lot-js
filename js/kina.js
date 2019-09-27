//const SYSTEM = 'bilka';

class KinaPriceStrategy {
    getDescription() {
        return " Velkommen til Kinas ambassade ";
    }

    calculatePrice(checkinTime, checkoutTime) {
        return 0;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    main(new ParkingLot(new KinaPriceStrategy()));
});