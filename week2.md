# Parking lot
## En øvelse i mønstre

---

## Recap

* <!-- .element: class="fragment" --> https://github.com/afk-eucnvs/parking-lot-js
* Priser <!-- .element: class="fragment" -->
  * Føtex: 15 DKK pr påbegyndt kvarter <!-- .element: class="fragment" -->
  * Bilka: 10 DKK pr påbegyndt kvarter <!-- .element: class="fragment" -->
  * Fakta: 5 min gratis, derefter 20 DKK pr påbegyndt kvarter <!-- .element: class="fragment" -->


---

## Første forsøg

fotex.js
```javascript
const SYSTEM = 'føtex;
```
<!-- .element: class="fragment" -->

bilka.js
```javascript
const SYSTEM = 'bilka;
```
<!-- .element: class="fragment" -->

fakta.js
```javascript 
const SYSTEM = 'fakta;
```
<!-- .element: class="fragment" -->

----

## Første forsøg

ParkingLot.js
```javascript
checkout(licensePlate) {
    /* ... */

    if (SYSTEM == 'føtex') {
        // beregn prisen for føtex
    } else if (SYSTEM == 'bilka') {
        // beregn prisen for bilka
    } else if (SYSTEM == 'fakta') {
        // beregn prisen for fakta
    }

    /* ... */
}
```

----

## Første forsøg
### Problemstillinger?

---

## Andet forsøg

ParkingLot.js
```javascript

constructor(pricePerQuater) {
    this.pricePerQuater = pricePerQuater;
}

/* ... */

checkout(licensePlate) {
    /* ... */
    const time = (checkoutTime - checkinTime) / 1000;
    price = this.pricePerQuator * (Math.floor(time/15) + 1);
    /* ... */
}

```
----

## Andet forsøg

fotex.js
```javascript
new ParkingLot(15);
```
<!-- .element: class="fragment" -->

bilka.js
```javascript
new ParkingLot(10);
```
<!-- .element: class="fragment" -->

fakta.js
```javascript 
new ParkingLot(???);
```
<!-- .element: class="fragment" -->

---
## Tredje forsøg

# Strategy Pattern <!-- .element: class="fragment" -->
### (functional version) <!-- .element: class="fragment" -->

----

## Tredje forsøg
ParkingLot.js
```javascript

// calculatePrice er en funktion der tager checkinTime og checkoutTime
// og returnerer prisen for den givne periode.
constructor(calculatePrice) {
    this.calculatePrice = calculatePrice;
}

/* ... */

checkout(licensePlate) {
    /* ... */
    price = this.calculatePrice(checkinTime, checkoutTime);
    /* ... */
}

```

----
## Tredje forsøg


fotex.js
```javascript
new ParkingLot(function (checkinTime, checkoutTime) {
    const time = (checkoutTime - checkinTime) / 1000;
    return 15 * (Math.floor(time/15) + 1);
});
```
<!-- .element: class="fragment" -->

bilka.js
```javascript
new ParkingLot(function (checkinTime, checkoutTime) {
    const time = (checkoutTime - checkinTime) / 1000;
    return 10 * (Math.floor(time/15) + 1);
});
```
<!-- .element: class="fragment" -->

----
## Tredje forsøg

fakta.js
```javascript 
new ParkingLot(function (checkinTime, checkoutTime) {
    const time = ((checkoutTime - checkinTime) / 1000) - 5;

    if (time < 0) {
        price = 0;
    } else {
        price = 20 * (Math.floor(time/15) + 1);
    }
});
```
<!-- .element: class="fragment" -->


---
## Dagens programmeringsopgave

* <!-- .element: class="fragment" --> Fork koden fra https://github.com/afk-eucnvs/parking-lot-js
  * fork påny <!-- .element: class="fragment" --> 
  * eller prøv git fetch upstream <!-- .element: class="fragment" --> 
* Omskriv til Strategy Pattern <!-- .element: class="fragment" --> 
* Hint: se slides på Lectio <!-- .element: class="fragment" --> 

