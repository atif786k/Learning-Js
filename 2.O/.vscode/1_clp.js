// console.log("Hey , this is atif")

const numbers = [1, 2, 3, 4, 5, 6]
const double = (numbers) => {
    let result = []
    for (const printNum of numbers) {
        result.push(printNum ** 2)
    }
    console.log(result)
}
// double(numbers)


// Letter Counter :--
// for in loop se letter ka index show hote hai or
// for of loop se letter show hota hai

const para = 'atif'
const letterCount = (para) => {
    for (letter of para) {
        console.log(letter)
    }
}
// letterCount(para)


//String function :--
const ssent = 'hey , this is not looking good'
// console.log(ssent.length)

// Adding all the numbers in the array :--
const list = [1, 2, 3, 4, 5, 6]
const sumAll = (list) => {
    let sum = 0
    for (item of list) {
        sum += item
    }
    return sum
}
// console.log(sumAll(list))


// Finding the MAX number in an array :--
const number = [1, 210, 3, 4, 5, 6, 30, 100]
const findMax = (numbers) => {
    let initial = numbers[0]
    for (items of numbers) {
        if (items > initial) {
            initial = items
        }
    }
    return { initial }
}
// console.log(findMax(number))


// Finding the frequency of a letters in a phrase :--
const phrase = 'looking good'
const freq = (phrase) => {
    console.log(phrase)
    let frequency = {}
    for (letter of phrase) {
        if (letter in frequency) {
            frequency[letter] += 1
        } else {
            frequency[letter] = 1
        }
    }
    return frequency
}
// console.log(freq(phrase))


// Finding the frequency of a words in a phrase :--
const sent = 'lol this is good lol'
const freqWords = (sent) => {
    // console.log(sent)
    let array = sent.split(' ')
    let frequency = {}
    for (words of array) {
        if (words in frequency) {
            frequency[words] += 1
        } else {
            frequency[words] = 1
        }
    }
    return frequency
}
// console.log(freqWords(sent))


//  .then se resolve access hoga
//  .catch se reject access hoga

const random = () => {
    let brings = [true, false]
    let randomChoice = Math.floor(Math.random() * brings.length)
    return brings[randomChoice]
}

// let promise_00 = new Promise((resolve,reject) => {
//     let bringing = random()
//     bringing ? resolve("tip the waiter && paid for the FOOD") : reject("No tip && leave the bad review")
//     // Upper is the New Method of writing if else statement(resolve is if and reject is else)
// })

// const promise_00 = new Promise(resolve,reject)
// promise_00 = (resolve,reject) => {
//     let bringing=random()
//     bringing ? resolve("tip the waiter && paid for the FOOD") : reject("No tip && leave the bad review")

// }

const getFood = async () => {
    try {
        const food = await promise_00
        console.log(food)
    } catch (error) {
        console.log(error)
    }
}
// getFood()

// BANK  ACCOUNT  PROJECT :--
class Bank {
    constructor(balance) {
        this.balance = balance
    }
    Deposit(number) {
        this.balance += number
        console.log(this.balance)
        return this.balance
    }
    WithDraw(number) {
        if (this.balance == 0 || this.balance < number) {
            console.log("low")
        } else {
            this.balance -= number
            console.log(this.balance)
            return this.balance
        }
    }
}
let input = document.getElementById("input")
let bal_ance = document.getElementById("balances")
let p = document.getElementById("para")
let bank = new Bank(0)
console.log(bank.balance)
let store;
let contain;

function plus() {
    store = Number(input.value)
    contain = bank.Deposit(store)
    p.innerText = `$${store} 💸💸 has been Credited`
    bal_ance.innerHTML = `<h3><span>Balance : ${contain}</span></h3>`
    input.value = input.ariaPlaceholder
}

function minus() {
    store = Number(input.value)
    if (bank.balance == 0 || bank.balance < store) {
        bal_ance.innerHTML = `<h4>!...LOW  Balance : ${bank.balance}</h4>
                        <h4>You can't withDraw the Entered Amount</h4>`
    } else {
        contain = bank.WithDraw(store)
        p.innerText = `$${store}  has been Debited`
        bal_ance.innerHTML = `<h3><span>Balance : ${contain}</span></h3>`
        input.value = input.ariaPlaceholder

    }
}


