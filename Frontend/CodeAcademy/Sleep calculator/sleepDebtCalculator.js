const getSleepHours = day => {
    
    switch (day) {
        case 'monday':
            return 8;
        case 'tuesday':
            return 5;
        case 'wednesday':
            return 9;
        case 'thursday':
            return 10;
        case 'friday':
            return 6;
        case 'saturday':
            return 4;
        case 'sunday':
            return 12;
        default:
            return "Not sure what day that is";

    }
};

const days = [
    "monday", "tuesday", "wednesday", 
  "thursday", "friday", "saturday", "sunday"
];


const getActualSleepHours = () => {
    let sumOfSleep = 0;
    const mapOfHours = days.map(x => getSleepHours(x));
    mapOfHours.forEach(value => {
        sumOfSleep += value
    });

    return sumOfSleep
};


const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
};

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        return 'Nicely done, its perfect!';

    } else if (actualSleepHours>idealSleepHours) {
        return 'You are getting to much sleep! You sleept for ' + (actualSleepHours - idealSleepHours)
        + ' hours ekstra! You should get ' 
        + idealSleepHours + ' hours not ' + actualSleepHours + ' hours';
    
    } else {
        return 'You should sleep more! You need ' + (idealSleepHours - actualSleepHours) + ' hours of sleep more! you should get '
        + idealSleepHours + ' hours not ' + actualSleepHours + ' hours';
        
    }
};  



console.log(calculateSleepDebt())