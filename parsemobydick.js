const fs = require('fs');
const password = (book) => {
    let step1 = fs.readFileSync(book, 'utf8').toString().replace(/([^\w\s])|([0-9_])|([\n\r])/gi, ' ').toLowerCase().split(' ');
    let step2 = [...new Set(step1)].sort(); 
    let pw = '';
    step2.splice(step2.indexOf(''), 1);
    for (i =0; i < 4; i++) {
        pw += `${step2[Math.floor(Math.random() * step2.length)]} `;
    }
    return `${book.replace('.txt', '')} has ${step2.length} unique words\nand from them your new password is: \n${pw.replace(/\s/gi, '')}\nwhich is made from: "${pw}"`;
}
console.log(password(process.argv[2]));