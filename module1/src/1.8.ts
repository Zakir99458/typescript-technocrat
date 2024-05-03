// Destructuring: object
{

    const user = {
        id: 1234,
        name: {
            firstName : "Mohammad Zakir",
            middleName: "Zakir",
            lastName: "Hossain"
    
        },
        contactNo: 102034999999

    }

    const {contactNo, name:{middleName}} = user;

// Array destruting
    const myFriends = ["hello,", "gello","jello","sello", "moillo"];
    const [,,best, ...rest] = myFriends;
    console.log(best, rest);
}
