const products = [
    { 
        id: 0, name: 'Candied Haws', price: 6 },
    { id: 1, name: 'Glutinous Rice Cake with Brown Sugar', price: 10 },
    { id: 3, name: 'Green Rice Cake', price: 12 },
    { id: 4, name: 'Snowflake Crisp', price: 14 },
    { id: 5, name: 'Egg Yolk Pastry', price: 8 },
    { id: 6, name: 'Guiling Jelly', price: 5 }
];

const product = [
    {
        id:0,
        image: 'p0.jpg',
        title: 'Candied Haws',
        price: 6,
    },
    {
        id:1,
        image: 'p1.webp',
        title: 'Glutinous Rice Cake with Brown Sugar',
        price: 10,
    },
    {
        id:2,
        image: 'p2.jpg',
        title: 'Green Rice Cake',
        price: 12,
    },
    {
        id:3,
        image: 'p3.jpg',
        title: 'Snowflake Crisp',
        price: 14,
    },
    {
        id:4,
        image: 'p4.jpg',
        title: 'Egg Yolk Pastry',
        price: 8,
    },
    {
        id:5,
        image: 'p5.jpg',
        title: 'Guiling Jelly',
        price: 5,
    },
    {
        id:6,
        image: 'p6.jpg',
        title: 'Snow Pear Tremella Soup',
        price: 16,
    },
    {
        id:7,
        image: 'p7.avif',
        title: 'Red Bean Paste',
        price: 12,
    },
    {
        id:8,
        image: 'p8.jpg',
        title: 'Walnut Crisp',
        price: 11.2,
    },
    {
        id:9,
        image: 'p9.jpg',
        title: 'Sesame Paste',
        price: 7.8,
    },
    {
        id:10,
        image: 'p10.jpg',
        title: 'Double-Layer Steamed Milk Custard',
        price: 4.8,
    },
    {
        id:11,
        image: 'p11.jpg',
        title: 'Sachima',
        price: 13.5,
    },
    {
        id:12,
        image: 'p12.webp',
        title: 'Rose Pastry',
        price: 5.8,
    },
    {
        id:13,
        image: 'p13.jpg',
        title: 'Osmanthus Cake',
        price: 6.7,
    },
    {
        id:14,
        image:'p14.png',
        title:'Moon Cake',
        price: 12,
    },
    {
        id:15,
        image:'photos15.jpg',
        title:'Treasure Taufufa',
        price: 8,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image ,title ,price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+(j++) +")'></i></div>"
            );
        }).join('');
    }
}