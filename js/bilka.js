function calculateBilkaPrice(from, to) {
    const time = (to - from) / 1000;
    return 10 * (Math.floor(time/15) + 1);
}

document.addEventListener('DOMContentLoaded', () => {
    const parkingLot = new ParkingLot(calculateBilkaPrice);

    main(parkingLot);
});