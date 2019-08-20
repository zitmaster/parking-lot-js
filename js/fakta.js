document.addEventListener('DOMContentLoaded', () => {
    const parkingLot = new ParkingLot(function (from, to) {
        const time = ((to - from) / 1000) - 5;
        if (time < 0) {
            return 0;
        } else {
            return 20 * (Math.floor(time/15) + 1);
        }
    });

    main(parkingLot);
});