document.addEventListener('DOMContentLoaded', () => {
    const parkingLot = new ParkingLot(function (from, to) {
        const time = (to - from) / 1000;
        return 15 * (Math.floor(time/15) + 1);
    });

    main(parkingLot);
});