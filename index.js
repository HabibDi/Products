let produits = [
    {
        name: 'PS4',
        price: 350,
        img: "images/logoPS.jpg",
        like: true
    },

    {
        name: 'Xbox',
        price: 280,
        img: "images/logoXbox.png",
        like: false
    },

    {
        name: 'Switch',
        price: 300,
        img: "images/logoSwitch.png",
        like: false

    }
];




// console.log(produits);

var myProducts = document.getElementById('MesProduits')


produits.forEach(element => {

    /* (let i = 0; i < produits.length; i++) */

    var newProduct = document.createElement('div');
    var newTitle = document.createElement('h4');
    var newImage = document.createElement('img');
    var newInteractLine = document.createElement('div');
    var newPrice = document.createElement('p');
    var newBuyButton = document.createElement('button');
    var newLikeButton = document.createElement('img');

    var productName = element.name;
    var productPic = element.img;
    var productPrice = element.price;
    var productLikedStatus = element.like;

    myProducts.appendChild(newProduct);
    newProduct.appendChild(newTitle);
    newProduct.appendChild(newImage);
    newProduct.appendChild(newInteractLine);
    newInteractLine.appendChild(newPrice);
    newInteractLine.appendChild(newBuyButton);
    newInteractLine.appendChild(newLikeButton);

    newProduct.setAttribute('class', 'produit');
    newProduct.setAttribute('id', productName);
    newImage.setAttribute('src', productPic);
    newInteractLine.setAttribute('class', 'interactLine');
    newLikeButton.setAttribute('src', 'images/heartIconClear.png');
    newLikeButton.setAttribute('class', 'likeButton')
    newBuyButton.setAttribute('class', "buyButton")

    newTitle.innerHTML = productName;
    newPrice.innerHTML = productPrice + '€';
    newBuyButton.innerHTML = "Acheter";
    document.addEventListener('click', addToBasket)

});

function addToBasket(event) {

    if (event.target.matches('buyButton')) {
        alert(event.target.productName + ' ajouté au panier')
    }

};


//---------------------------------------------------------
//             Work in progress down there
//---------------------------------------------------------


// function addToBasket(evt) {
//     alert(evt.currentTarget.productName + ' ajouté au panier');
//     console.log(productName);
// };

// function like() {

//     if (productLikedStatus === true) {
//         newLikeButton.removeAttribute('src');
//         newLikeButton.setAttribute('src', "images/heartIconClear.png");
//         productLikedStatus = false;
//         console.log('Produit unliké')
//     }

//     else if (productLikedStatus === false) {
//         newLikeButton.removeAttribute('src');
//         newLikeButton.setAttribute('src', "images/heartIconFull.png");
//         productLikedStatus = true;
//         console.log('Produit liké')
//     }

// };




// document.addEventListener('click', function (event) {

//     if (event.target.matches('.buyButton')) {
//         alert(event.target.productName + ' ajouté au panier');
//     }

// });

// function likeCheck(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].like === true) {
//             newLikeButton.setAttribute('src', 'images/heartIconFull.png');
//         } else {
//             newLikeButton.setAttribute('src', 'images/heartIconClear.png');

//         }
//     };
// };

// likeCheck(produits);



// select->div->boutons 0    select->div->img c