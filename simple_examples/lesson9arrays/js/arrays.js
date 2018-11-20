let rooms = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
//!!!ОБХОД МАССИВА ДУМЯ ЦИКЛАМИ
for (let roomNum in rooms) {
    console.log(`Room ${roomNum}`);
    for (let userName of rooms[roomNum]) {
        console.log(`hello ${userName}!`);
    }
}
console.log(rooms[1][2]);

//ассоциативный массив
//єто обьект, так как он присваивается phoneесли не присваивается -это просто блок кода со своей областью видимости
let phone ={
    title: 'Iphone 8',price:234,color:'red',"test-property":2345,
    relatedProducts:[
        {   title:"чехол",
            price:123},
        {   title:"зарядка",
            price:123}
    ]
};
// add new prop
phone.memory='64gb';
phone['fake-memory']='128gb';
console.log(phone);
console.log(phone['title']);// use '' otherwise js will look var title
console.log(phone.color);
console.log(phone['test-property']);// do no work via dot . because of -

// по обьекту нельзя делать for of только for in
console.log('----------------------')
for(let prop in phone){
    console.log(prop);
}
console.log(Object.keys(phone));
console.log(Object.values(phone));

//CATALOG
const phones =[
    {
        title:'Iphone X',
        price:345,
        color:"black",
        accessories:[
            {title:'headphones',price:111}
        ]
    },
    {
        title:'Samsung Galaxy Note 9',
        price:456,
        color:"blue"
    },
    {
        title:'Samsung Galaxy s9',
        price:747,
        color:"yelow"
    }
];
console.log(phones);

// get all titles
for(let phone of phones){
    console.log(phone.title,phone.price);
}
let cities=[
    {name:"kharkiv",country:'ukraine'},
    {name:"kiev",country:'ukraine'},
    {name:"new-york",country:'usa'}
]
//found country
let countries={};
for(let city of cities){
    if(!countries.hasOwnProperty(city.country)){
    countries[city.country]=[city.name]
    }else{
        countries[city.country].push(city.name);

    }
}
console.log(countries);


for(let phone of phones){
    console.log(phone.title);
    if(phone.hasOwnProperty('accessories')){
        for(let acc of phone.accessories){
            console.log(acc.title);
        }
    }
}