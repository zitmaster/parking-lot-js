function calculateFotexPrice(from, to) {
    const time = (to - from) / 1000;
    return 15 * (Math.floor(time/15) + 1);
}

document.addEventListener('DOMContentLoaded', () => {
    const parkingLot = new ParkingLot(calculateFotexPrice);

    main(parkingLot);
});