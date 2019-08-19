function openGate(gate) {
    gate.classList.add('open');
    setTimeout(() => gate.classList.remove('open'), 5000); 
}

class ParkingLot {
    checkedInCars = {};


    entranceGate = document.getElementById('entrance-gate');
    exitGate = document.getElementById('exit-gate');

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
            const time = Math.round((new Date() - checkinTime) / 1000);
            this.checkedInCars[licensePlate] = 15 * (Math.floor(time / 15) + 1);
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