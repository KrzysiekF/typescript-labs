type Bank = { money: number, deposit: (val: number) => void };
type Client = { name: string, bankAccount: Bank, hobbies: string[] };

let bankAccount: Bank = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};

let myself: Client = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);