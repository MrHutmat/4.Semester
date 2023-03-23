const menu = {
    _meal: '',
    _price: 0,
    set meal(mealToCheck) {
        if (typeof mealToCheck === 'string') {
            this._meal = mealToCheck;
        };
    },
    set price(priceToCheck) {
        if (typeof priceToCheck === 'number') {
            this._price = priceToCheck;
        };
    },
    get todaysSpecial() {
        if (this._meal && this._price && typeof this._meal === 'string' && typeof this._price === 'number') {
            return `${this._meal} - $${this._price}`;            
        } else {
            return 'Meal or price was not set correctly!';
        };
    }
}


menu.meal = 'pizza';
menu.price = 100;

// menu._meal = 10;
// menu._price = 'asdas';

console.log(menu);
console.log(menu.todaysSpecial);