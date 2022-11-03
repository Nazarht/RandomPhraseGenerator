// Arrays that hold first section words
const fsArr = ['Your ex', 'His Father', 'My uncle', 'Your mom', 'The person next to you', 'This guy i know from a friday party', 'Your dog', 'Your girlfriends father', 'His favorite birthday gift'];
const fsFirstWord = ['Fat', 'Ugly', 'Elegant', 'Wild', 'Creepy', 'Clean' , 'Dead' , 'Cute', 'Dreamy', 'Dazzling', 'Stuninng', 'Dangerous', 'Bright', 'Awful' , 'Brawe', 'Bloody', 'Clever', 'Evil', 'Glamourous', 'Embarressed', 'Fancy', 'Notorious','Lovely', 'Bizzare', 'Scintillating','Dumb', 'Stolen'];
const fsSecoundWord = ['horse in coat', 'bodybuilder', 'bikini model', 'taco', 'cockroach', 'sriracha', 'unicorn', 'monk', 'left shoe','tinky-winky','Brintney Spears','pornhub founder','Obama', 'bra from garbage', 'zuccini noodle', 'grannys strings', 'dog owner from Korea', 'Hentai character', 'poop', 'slime', 'kidiney'];

// First section functions for word generation
function fs1WordGenerator() {
    const randomNumber = Math.floor(Math.random() * fsFirstWord.length);
    return fsFirstWord[randomNumber];
}

function fs2WordGenerator() {
    const randomNumber = Math.floor(Math.random() * fsSecoundWord.length);
    return fsSecoundWord[randomNumber];
}

function fsWordGenerator() {
    const space = ' '
    return [fs1WordGenerator(),space,fs2WordGenerator()]
}

// Function that generates first section phrase
function firstSection() {
    const choice = Math.floor(Math.random() * 2 + 1)
    if (choice === 1) {
        const randomNumber = Math.floor(Math.random() * fsArr.length);
        return fsArr[randomNumber]
    } else if (choice === 2) {
        return fsWordGenerator().join('');
    }
}
// Array that hold secound section words 
const ssArr = ['will create', 'will make','is going to make','is going to produce','will spawn','is going to summon','will generate','is going to manufacture','will billd from a scratch','might form','may cause the appearanc of']
// Functions that will work with secound section
function secoundSection() {
    const randomNumber = Math.floor(Math.random() * ssArr.length);
    return ssArr[randomNumber]
}
// Arrays for third section
const tsFirstWord = ['migty','magic','giant','tiny','thrilling','magic','light','true','logical','geeky','random','kinky','lovely'];
const tsSecoundWord = ['apple','sword','soundtrack','film','word','vegetable','sorcery','spell','book','tree','planet','sneakers'];

// functions for thitd section 
function ts1WordGenerator() {
    const randomNumber = Math.floor(Math.random() * tsFirstWord.length);
    return tsFirstWord[randomNumber];
}

function ts2WordGenerator() {
    const randomNumber = Math.floor(Math.random() * tsSecoundWord.length);
    return tsSecoundWord[randomNumber];
}

function thirdSection () {
    const space = ' ';
    return [ts1WordGenerator(), space, ts2WordGenerator()].join('')
}

// The Generator Itself!

function randomPhraseGenerator() {
    return ''.concat(firstSection(), ' ' , secoundSection() , ' ' , thirdSection())
}

console.log(randomPhraseGenerator())