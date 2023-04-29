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

let kitchens = {
    category: 'Kitchen',
}

let devices = {
    category: 'Device',
}

let cosmetics = {
    category: 'cosmetic',
}

let newarr = [];

function getNewArr(arr, obj) {
    newarr = arr.map(
        elem => {
            let newObject = Object.create(obj)
            for (let key in elem) {


                newObject[key] = elem[key];

            }
            return newObject
        }
    )
    return newarr;
}

let arr = [
    getNewArr(kitchenProducts, kitchens),
    getNewArr(devicesProducts, devices),
    getNewArr(cosmeticsProducts, cosmetics),
]
console.log(arr);
let crarr = [];
arr.map(element => {
    element.map
        (obj => {
            crarr.push(
                `<div>
    <div>
    <img src='./img/${obj.type}.svg' alt='1'>
    </div>
    <div>
    <p>
    <span>${obj.type}</span>
    </p>
    <p>
     <span>${obj.price}</span>
    </p> 
    </div>
    </div>`
            )
        })
    document.write(`<div>${crarr.join('')}</div>`);
})