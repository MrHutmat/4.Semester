let secretMessage = [
    'Learning', 'is', 'not',
    'about', 'what', 'you',
    'get', 'easily', 'the',
    'first', 'time,', 'it',
    'is', 'about', 'what',
    'you', 'can', 'figure',
    'out.', '-2015,', 'Chris',
    'Pine,', 'Learn', 'JavaScript'
];

console.log(secretMessage);

console.log(secretMessage.length);


secretMessage.pop();

console.log(secretMessage.length);


secretMessage.push('to', 'Program');

secretMessage[secretMessage.indexOf('easily')] = 'right';

console.log(secretMessage);

secretMessage.shift();

secretMessage.unshift('Programing');

secretMessage.splice(secretMessage.indexOf('get'), 5, 'know');
console.log(secretMessage.join(' '));