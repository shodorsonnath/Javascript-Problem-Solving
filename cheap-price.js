// This is simple javascript problem find cheapest price a phone 
const phones = [
    {name: 'Samsung', camera: 12, Storage: '32gb', price: 36000, color: 'silver'},
    {name: 'Walton', camera: 10, Storage: '32gb', price: 22000, color: 'silver'},
    {name: 'iphone', camera: 10, Storage: '32gb', price: 82000, color: 'silver'},
    {name: 'xiaomi', camera: 10, Storage: '32gb', price: 52000, color: 'silver'},
    {name: 'Oppo', camera: 10, Storage: '32gb', price: 20000, color: 'silver'},
];
function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i=0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);