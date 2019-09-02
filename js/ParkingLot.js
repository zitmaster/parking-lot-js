function openGate(gate) {
    gate.classList.add('open');
    setTimeout(() => gate.classList.remove('open'), 5000); 
}

class ParkingLot {
    checkedInCars = {};

    entranceGate = document.getElementById('entrance-gate');
    exitGate = document.getElementById('exit-gate');

    constructor(shopStrategy){
        this.shopStrategy = shopStrategy;
        this.calculatePrice = shopStrategy.calculatePrice;
        this.getDescription = shopStrategy.getDescription;
    }

    checkin(licensePlate) {
        if (this.checkedInCars[licensePlate] != undefined) {
            throw new Error(`${licensePlate} holder allerede på pladsen!`);
        } else {
            this.checkedInCars[licensePlate] = new Date();
            openGate(this.entranceGate);
        }
    }

    checkout(licensePlate) {
        const checkinTime = this.checkedInCars[licensePlate];
        if (checkinTime == undefined || checkinTime.constructor != Date) {
            throw new Error(`${licensePlate} holder ikke på pladsen!`);
        } else {
            const checkoutTime = new Date();

            let price = 0;
            /*if (SYSTEM == 'føtex') {
                // Det koster 15 kr pr pågebyndt kvarter (15s) hos føtex
                const time = (checkoutTime - checkinTime) / 1000;

                price = 15 * (Math.floor(time/15) + 1);
            } else if (SYSTEM == 'bilka') {
                // Det koster 10 kr pr pågebyndt kvarter (15s) hos bilka
                const time = (checkoutTime - checkinTime) / 1000;

                price = 10 * (Math.floor(time/15) + 1);
            } else if (SYSTEM == 'fakta') {
                // Det koster 20 kr pr pågebyndt kvarter (15s) hos fakta, men de første 5 minutter er gratis
                const time = ((checkoutTime - checkinTime) / 1000) - 5;

                if (time < 0) {
                    price = 0;
                } else {
                    price = 20 * (Math.floor(time/15) + 1);
                }
            }*/
            this.checkedInCars[licensePlate] = price;
            return this.checkedInCars[licensePlate];
        }
    }

    pay(licensePlate, amount) {
        if (typeof(this.checkedInCars[licensePlate]) != 'number') {
            throw new Error(`${licensePlate} er ikke ved at betale!`);
        } else {
            this.checkedInCars[licensePlate] -= amount;

            if (this.checkedInCars[licensePlate] <= 0) {
                const exchange = -this.checkedInCars[licensePlate];
                delete this.checkedInCars[licensePlate];

                openGate(this.exitGate);

                return exchange;
            }
        }
    }
}