class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }

    set isCheckedOut(newIsCheckedOut) {
        this._isCheckedOut = newIsCheckedOut;
    }

    getAverageRating() {
        let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
        return ratingsSum / this.ratings.length;
    }
    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }
    addRating(rating) {
        this.ratings.push(rating);
    }
}


class Book extends Media {
    constructor(title, author, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}



class Movie extends Media {
    constructor(title, director, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }
}

class CD extends Media {
    constructor(title, artist, songs) {
        super(title);
        this._artist = artist;
        this._songs = songs;
    }
    get artist() {
        return this._artist;
    }
    get songs() {
        return this._songs;
    }
}



const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());


console.log();
console.log();
console.log();


const speed = new Movie('Speed', 'Jan de Bont', 116);

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());


console.log();
console.log();
console.log();


const hybridTheory = new CD('Hybrid Theory', 'Linkin Park', [
    'Papercut',
    'One Step Closer',
    'With you',
    'Point of Authority',
    'Crawling',
    'Runeaway',
    'By Myself',
    'In the End',
    'A Place for My Head',
    'Forgotten',
    'Cure for the Itch',
    'Pushing Me Away'
]);

hybridTheory.toggleCheckOutStatus();
console.log(hybridTheory.isCheckedOut);

hybridTheory.addRating(6);
hybridTheory.addRating(5);
hybridTheory.addRating(5);
console.log(hybridTheory.getAverageRating());
console.log(hybridTheory.songs[7]);