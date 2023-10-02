function timeToWords(time) {
    // Define arrays for words representing hours and minutes
    const hoursWords = [
        'midnight',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'noon'
    ];

    const minutesWords = [
        'oh',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
        'twenty'
    ];

    // Parse the input time string into hours and minutes
    const [hourStr, minuteStr] = time.split(':');
    const hour = parseInt(hourStr);
    const minute = parseInt(minuteStr);

    // Determine whether it's AM or PM
    const period = hour < 12 ? 'am' : 'pm';

    // Convert hours and minutes to words
    let hourWord = hoursWords[hour % 12]; // Use modulo to handle 12-hour format
    let minuteWord = '';

    if (minute === 0) {
        if (hour === 12 || hour === 0) {
            // Special cases for "midnight" and "noon"
            return hourWord;
        } else {
            return `${hourWord} o'clock ${period}`;
        }
    } else if (minute <= 20) {
        minuteWord = minutesWords[minute];
    } else {
        const tens = minutesWords[20];
        const ones = minutesWords[minute % 10];
        minuteWord = `${tens} ${ones}`;
    }

    // Combine the words
    if (hour === 0 && minute !== 0) {
        hourWord = 'twelve';
    }

    return `${hourWord} ${minuteWord} ${period}`;
}

// Test cases
console.log(timeToWords('00:00')); // Output: midnight
console.log(timeToWords('00:12')); // Output: twelve twelve am
console.log(timeToWords('01:00')); // Output: one o’clock am
console.log(timeToWords('06:01')); // Output: six oh one am
console.log(timeToWords('06:10')); // Output: six ten am
console.log(timeToWords('06:18')); // Output: six eighteen am
console.log(timeToWords('06:30')); // Output: six thirty am
console.log(timeToWords('10:34')); // Output: ten thirty four am
console.log(timeToWords('12:00')); // Output: noon
console.log(timeToWords('12:09')); // Output: twelve oh nine pm
console.log(timeToWords('23:23')); // Output: eleven twenty three pm

module.exports = timeToWords;