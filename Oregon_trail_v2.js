(function () {
    /*
    * Interfaces
    */
    /*
    * Classes
    */
    //  adding my function to get random number here to call later
    function getRandomIntInclusive(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    //The traveler class that implements the ITraveler interface
    //This is currently in violation of its contract with the interface. 
    //Create the code required to satisfy the contract with the interface
    var Traveler = (function () {
        function Traveler(food, name, isHealthy) {
            this.food = food;
            this.name = name;
            this.isHealthy = isHealthy;
        }
        Traveler.prototype.hunt = function () {
            var success = ((getRandomIntInclusive(0, 1)) * 100);
            this.food = this.food + success;
            return this.food;
        };
        ;
        Traveler.prototype.eat = function () {
            if (this.food >= 20) {
                this.food = this.food - 20;
            }
            else {
                this.isHealthy = false;
            }
            return this.isHealthy;
        };
        ;
        return Traveler;
    }());
    //The wagon class that implements the IWagon interface
    //This is currently in violation of its contract with the interface.
    //Create the code required to satisfy the contract with the interface 
    var Wagon = (function () {
        function Wagon(capacity) {
            this.passengerArray = [];
            this.capacity = capacity;
        }
        Wagon.prototype.addPassenger = function (traveler) {
            if (this.passengerArray.length < this.capacity) {
                this.passengerArray.push(traveler);
                return "Passenger added";
            }
            else {
                return "Sorry, not added.";
            }
        };
        ;
        Wagon.prototype.isQuarantined = function () {
            for (var i = 0; i < this.passengerArray.length; i++) {
                if (this.passengerArray[i].isHealthy) {
                    return true;
                }
                else {
                    return false;
                }
            }
        };
        ;
        Wagon.prototype.getFood = function () {
            var totalFood = 0;
            for (var i = 0; i < this.passengerArray.length; i++) {
                totalFood = totalFood + this.passengerArray[i].food;
            }
            return totalFood;
        };
        return Wagon;
    }());
    ;
    var traveler1 = new Traveler(getRandomIntInclusive(0, 50), "Katy", true);
    var traveler2 = new Traveler(getRandomIntInclusive(0, 50), "Drew", true);
    var traveler3 = new Traveler(getRandomIntInclusive(0, 50), "Kristin", true);
    var traveler4 = new Traveler(getRandomIntInclusive(0, 50), "Rob", true);
    var traveler5 = new Traveler(getRandomIntInclusive(0, 50), "Ann", true);
    var mywagon = new Wagon(4);
    console.log(traveler1.name + " started with " + traveler1.food + " food, so she ate: " + traveler1.eat() + ". Her remaining food amount is: " + traveler1.food);
    console.log(traveler2.name + " started with " + traveler2.food + " food, so he ate: " + traveler2.eat() + ". His remaining food amount is: " + traveler2.food);
    console.log(traveler3.name + " started with " + traveler3.food + " food, so she ate: " + traveler3.eat() + ". Her remaining food amount is: " + traveler3.food);
    console.log(traveler4.name + " started with " + traveler4.food + " food, then he attempted to hunt so now he has: " + traveler4.hunt());
    console.log(traveler5.name + " started with " + traveler5.food + " food, then she attempted to hunt so now she has: " + traveler5.hunt());
    var mytravelerArray = [traveler1, traveler2, traveler3, traveler4, traveler5];
    for (var i = 0; i < mytravelerArray.length; i++) {
        var randomNumber = (getRandomIntInclusive(2, 100));
        if (randomNumber % 2 == 0) {
            mywagon.addPassenger(mytravelerArray[i]);
            console.log(mytravelerArray[i].name + " was added to the wagon");
        }
        else {
            console.log(mytravelerArray[i].name + " was NOT added to the wagon");
        }
    }
    ;
    // mywagon.isQuarantined();
    console.log("Everyone is healthy: " + mywagon.isQuarantined());
    // mywagon.getFood();
    console.log("The total amount of food on the wagon is " + mywagon.getFood());
    /*
    * Play the game

    * Create 5 healthy travelers object with a random amount of food between 0 and 100 (inclusive)
    *
    * Create wagon with an empty passenger list and a capacity of 4.
    *
    * Make 3 of 5 the travelers eat by calling their eat methods
    *
    * Make the remaining 2 travelers hunt
    *
    * Create an array of your travelers, loop over the array of travelers and give each traveler a 50% chance
    * of attempting to be being added to the wagon using the wagons addPassenger method.
    *
    * Run the isQuarantined method for the wagon
    *
    * Run the getFood method for the wagon
    *
    * the return values of all the methods should be displayed in the console using console.log()
    * the console.log statements should not live inside any methods on the objects
    *
    */
})();
