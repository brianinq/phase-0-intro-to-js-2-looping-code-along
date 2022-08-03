// Code your solutions in this file
function writeCards(names, name){
    const messages = []
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        let msg = `Thank you, ${element}, for the wonderful ${name} gift!`
        messages.push(msg)
    }
    return messages
}
function countDown(number){
    while(number >= 0){
        console.log(number);
        --number
    }
}