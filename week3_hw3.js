class Governor {
  static name = "Roy Cooper";
  static state = "NC";
  static age = 65;
  static party = "Democratic"

}

console.log(Governor.name);


/* ************************************************* */


class Person{
  constructor(name, age, gender){
      this.name = name;
      this.age = age;
      this.gender = gender; 
  }

  generalGreeting(){
    console.log(`Hello! My name is ${this.name}, I am ${this.age} years old.`)
  }
}

class PostalWorker extends Person {
  constructor(name, age, gender, shift, city, wage){
    super(name, age, gender)
    this.position = "postal worker";
    this.shift = shift;
    this.city = city;
    this.wage = wage;
  }

  greeting() {
    console.log(`Hello! My name is ${this.name}. I am a ${this.position}, working ${this.shift} shifts in ${this.city}.`)
  }

  weekPayCheck(hours){
    return this.wage*hours;
  }


}

let garry = new PostalWorker("Garry", 55, "male", "4/10", "Raleigh", 30);
let sam = new PostalWorker("Sam", 43, "male", "5/8", "Cary", 30);
console.log(garry);

garry.greeting();

console.log(garry.weekPayCheck(40));

class Chef extends Person {
  constructor(name, age, gender, city, restaurant, wage, cusine){
    super(name, age, gender)
    this.position = "chef";
    this.city = city;
    this.restaurant = restaurant;
    this.wage = wage;
    this.cusine = [cusine];
  }

  greeting() {
    console.log(`Hello! My name is ${this.name}. I am a ${this.position}, working at ${this.restaurant} restaurant in ${this.city}.`)
  }

  weekPayCheck(hours){
    return this.wage*hours;
  }

  getWage() {
    return this.wage;
  }

  addCusines(cusine){
    this.cusine.push(cusine);
  }
}

let alex = new Chef("Alex", 33, "male", "Cary", "Herons", 30, "mexican");
let mary = new Chef("Alex", 43, "female", "Cary", "Bonefish Grill", 35, "american");

alex.greeting();
alex.generalGreeting();
console.log(mary)
mary.addCusines("asian");

console.log(mary)



/* ************************************************* */



class BankAccount {
  constructor(ownerName, balance, acctNum){
    this.ownerName = ownerName;
    this.balance = balance;
    this.acctNum = acctNum;
  }
  deposit(amount){
    this.balance = this.balance + amount;
    console.log(`Hello ${this.ownerName}. Your new ballance is ${this.balance}`)
  } 

  withdraw(amount){
    this.balance = this.balance - amount;
    console.log(`Hello ${this.ownerName}. Your new ballance is ${this.balance}`)

    // if (this.balance - amount < 0) {
    //   console.log(`You current ballance is too low to withdraw ${amount}. Your current balance is ${this.balance}`)
    // } else {
    //   this.balance = this.balance - amount;
    //   console.log(`Your new ballance is ${this.balance}`)
    // }
  }
}

const summer = new BankAccount('Summer', 1500, 123454321);
daria.deposit(250);
daria.withdraw(1000);


class CheckingAccount extends BankAccount {
  
  constructor(ownerName, balance, acctNum){
    super(ownerName, balance, acctNum)
    this.overdraftEnabled = balance < 0 ? true: false;
  }

  withdraw(amount){
    this.balance = this.balance - amount;
    if (this.balance - amount < 0){
      console.log(`Hello ${this.ownerName}. Your balance was too low, your account is overdrafted and will be fined $50.  Your new ballance is ${this.balance - 50}`)
      this.balance = this.balance - 50;
      this.overdraftEnabled = true
    }
  }
}

const sarah = new CheckingAccount('Sarah', 3000, 123453421);
console.log(sarah)
sarah.withdraw(3500);
console.log(sarah)


class SavingsAccount extends BankAccount {

  withdraw(amount){
    if (this.balance - amount < 0){
      console.log(`Hello ${this.ownerName}. You current ballance is too low to withdraw ${amount}. Your current balance is ${this.balance}`)
    }
  }
}

const kate = new SavingsAccount('Kate', 3000, 145453421);
kate.withdraw(4000);