class BankAccount {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    };

    checkBalance() {
        console.log(`Account Balance for ${this.name} is RS ${this.balance}`);
    };

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Updated Balance after depositing RS ${amount} is RS ${this.balance}`);
        }
        else
            console.log("Invalid Amount");
    };

    withdrawl(amount) {
        if (amount > 0 && amount < this.balance) {
            this.balance -= amount;
            console.log(`Updated Balance after withdrawl of RS ${amount} is RS ${this.balance}`);
        }
        else if (amount > this.balance)
            console.log("Insuffiecient Balance for withdrawl");
        else if (amount < 0)
            console.log("Invalid Amount");
    };
};

let newAccount = new BankAccount("Harsh", 2000);
newAccount.checkBalance();  // OUTPUT: Account Balance for Harsh is RS 2000

newAccount.deposit(1500);   // OUTPUT: Updated Balance after depositing RS 1500 is RS 3500
newAccount.deposit(-50);    // OUTPUT: Invalid Amount

newAccount.withdrawl(1200); // OUTPUT: Updated Balance after withdrawl of RS 1200 is RS 2300
newAccount.withdrawl(4000); // OUTPUT: Insuffiecient Balance for withdrawl
newAccount.withdrawl(-100); // OUTPUT: Invalid Amount

newAccount.checkBalance();  // OUTPUT: Account Balance for Harsh is RS 2300