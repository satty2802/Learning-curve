// const mysm = Symbol("mykey") ;
// const jsUser = {
//     name: "Satyam Dixit",
//     age:14,
//     [mysm]:"mykey1",
//     "email": "satyamdixit2003@gmail.com",
//     isLoggedIn: false ,
//     lastLoginDays: ["Monday","Tuesday"]
// }

// console.log(jsUser[mysm]);
// console.log(jsUser);

// jsUser.greeting = function() {
//     console.log(`hello js user ${this.name}`);
    
// }
// console.log(jsUser.greeting());

const user = {}
user.name="Satyam" 
user.email = "sfj"
//console.log(Object.entries(user));
const car = {
    name:"Tata",
    Rating:5 ,
    founder:"Jamshedji Tata",
    last_personality: "Ratan Tata"
}
const {last_personality :star} = car ;


const user1 = {
    name: "satyam",
    price:100
}

function handle(anyobject) {
    console.log(`username is ${anyobject.name} and the price is ${anyobject.price}`);
    
}
handle(
    {
        name:"sam",
        price:500
    }
)
