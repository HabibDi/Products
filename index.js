let stock = [
    {
        name: 'PS4',
        price: 350,
        img: "images/logoPS.jpg",
        liked: false,
    },

    {
        name: 'Xbox',
        price: 280,
        img: "images/logoXbox.png",
        liked: false,
    },

    {
        name: 'Switch',
        price: 300,
        img: "images/logoSwitch.png",
        liked: false,
    },

];

var produits = [];


class Produits {
    constructor(name, price, img, liked) {
        this.name = name
        this.price = price
        this.img = img
        this.liked = liked
        produits.push(this)
    }

    like(event) {

        if (this.liked === true) {
            this.liked = false;
            event.target.setAttribute('src', "images/heartIconClear.png");
            console.log(this.name + ' unliké')
        }

        else if (this.liked === false) {
            this.liked = true;
            event.target.setAttribute('src', "images/heartIconFull.png");
            console.log(this.name + ' liké')
        }
        console.log(this.liked)
    };
}

stock.forEach((item) => {
    new Produits(item.name, item.price, item.img, item.liked)
})


console.log(produits)

var prodContainer = document.getElementById('MesProduits')

function build() {

    produits.forEach((element) => {

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

        prodContainer.appendChild(newProduct);
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

        newLikeButton.setAttribute('class', 'likeButton');
        newLikeButton.setAttribute('src', "images/heartIconClear.png");

        newLikeButton.onclick = function () {
            element.like(event);
        }

        newBuyButton.setAttribute('class', "buyButton")

        newTitle.innerHTML = productName;
        newPrice.innerHTML = productPrice + '€';
        newBuyButton.innerHTML = "Acheter";

    });
}

var likeB = document.getElementsByClassName("likeButton");




build()
