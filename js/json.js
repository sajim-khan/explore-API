const user = {id: 1, name: 'John', email: 'john@gmail.com'};
const stringified = JSON.stringify(user); 
// console.log(user);
// console.log(stringified);

const shop = {
    owner : 'Sajim',
    address : {
        street : ' a block , rood no 10,dhaka 1200',
        city : 'Dhaka',
        country : 'Bangladesh',
    },
    products : ['laptop', 'monitor', 'mobile', 'tablet', 'keyboard'],
    revenue : 21435,
    isOpen : false,
    isNew : false
}

const newShop = JSON.stringify(shop);
console.log(newShop);
const shopNew = JSON.parse(newShop)
console.log(shopNew);