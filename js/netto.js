//const SYSTEM = 'fakta';

class NettoPriceStrategy {
    getDescription() {
        return " Velkommen til Netto. Det koster 10kr for det første kvarter, derefter koster det 5kr vært kvater.";
    }

    calculatePrice(checkinTime, checkoutTime) {
        const time = ((checkoutTime - checkinTime) / 1000) - 5;
    if (time < 0) {
        return 10;
    } else {
        return 10 + (5 * (Math.floor(time/15) + 1));
    }
    }
}



document.addEventListener('DOMContentLoaded', () => {
    main(new ParkingLot(new NettoPriceStrategy()));
});