let kitchenProducts = [
    {
        type: 'grater',
        price: 10
    },
    {
        type: 'pastry-bag',
        price: 25
    },
    {
        type: 'scale',
        price: 5
    },
    {
        type: 'whisk',
        price: 15
    }
];

let devicesProducts = [
    {
        type: 'desktop',
        price: [100, 1000]
    },
    {
        type: 'laptop',
        price: [50, 1500]
    },
    {
        type: 'smartphone',
        price: [80, 2000]
    },
    {
        type: 'tablet',
        price: [20, 1300]
    }
];

let cosmeticsProducts = [
    {
        type: 'blush',
        price: 100
    },
    {
        type: 'eyeshadow',
        price: 50
    },
    {
        type: 'lipstick',
        price: 80
    },
    {
        type: 'nail-polish',
        price: 200
    },
    {
        type: 'perfume',
        price: 300,
    }
];

let Kitchen = { category: 'kitchen' };
let devices = { category: 'device' };
let cosmetics = { category: 'cosmetic' };

let modearr = [];
function getarr(arr, obj) {
    modearr = arr.map(elem => {
        let newObject = Object.create(obj);
        for (const key in elem) {
            newObject[key] = elem[key];
            newObject.megazin = 'rozetka';
            newObject.country = 'China';
        }
        return newObject;
    })
    return modearr
}

let newarr = [
    getarr(kitchenProducts, Kitchen),
    getarr(devicesProducts, devices),
    getarr(cosmeticsProducts, cosmetics)
];

let randerarr = [];
newarr.map(newar => {
    let arrobj = [];
    newar.map(elem => {
        arrobj.push(`<div class="imgdiv">
        <div><img class="niceimg" src='./img/${elem.type}.svg' alt="X"></div>
        <div><p>Name: <span class= "weight">${elem.type}</span></p>
       <p >Price: <span class= "weight">$${(!Number.isInteger(elem.price)) ? elem.price.join('-') : elem.price}</span></p></div>
    </div>`)
    })
    randerarr.push(`<div><p class= "weight">Category: ${newar[1].category} </p><div class='maindiv'>${arrobj.join('')}</div></div><hr style =" border: 1px dashed rgb(155, 155, 155); width: 1000px;">`)
})

document.write(`<div class="centerdiv">${randerarr.join(' ')}</div>`);
