// Spread operator
//  Rest operator
// Destructuring

{


    // Spread operator
    const broost1: string[] = ["Mir", "Firoz", "Mizan"]
    const broost2: string[] = ["Hellow", "Ollo"]

    broost1.push(...broost2) // spread and then push


    const mentor1 = {
        switch: "Milko",
        router: "Pekka"
    }
    
    const mentor12 = {
        test1: "Mikael",
        test2: "Jukka"
    }
    
    const mentor ={
        ...mentor1,
        ...mentor12
    }

    // Rest operator
    const greetFriends = (...friends: string[]) =>{
        console.log(friends)
    }
    greetFriends("abul", "babul", "kabul")

    

}