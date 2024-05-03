// Learning function
// Normal function
// Arrow function
const addArray = (num1: number, num2:number): number => num1 + num2

const userBalance = {
    name: "Zakir",
    balance: 0,
    addBalance(bal: number): string{
        return `My current balance is : ${this.balance+bal}`;

    }
}

const arr: number[] = [1,2,3]
const newArr: number[] = arr.map((element:number) => element * element)
