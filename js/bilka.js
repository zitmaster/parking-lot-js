document.addEventListener('DOMContentLoaded', () => {
    const parkingLot = new ParkingLot(function (from, to) {
        const time = (to - from) / 1000;
        return 10 * (Math.floor(time/15) + 1);
    });

    main(parkingLot);
});