const express = require('express');
const app = express();
const PORT = 3002;
app.use(express.static('static'));
const cocktails = [
    { name: 'GIN FIZZ', price: 1520, contains: ['gin', 'sugar', 'lemon juice', 'soda'], isAlcoholic: true },
    { name: 'BLOODY MARY', price: 1650, contains: ['vodka', 'tomato juice', 'spices'], isAlcoholic: true },
    { name: 'SEX ON THE BEACH', price: 1850, contains: ['vodka', 'peach schnapps', 'orange juice', 'cranberry juice'], isAlcoholic: true },
    { name: 'CUBA LIBRE', price: 1850, contains: ['rum', 'cola', 'lime juice'], isAlcoholic: true },
    { name: 'MOJITO', price: 1850, contains: ['rum', 'sugar', 'lime juice', 'soda water'], isAlcoholic: true },
    { name: 'LONG ISLAND ICE TEA', price: 2450, contains: ['vodka', 'rum', 'gin', 'tequila', 'triple sec', 'cola'], isAlcoholic: true },
    { name: 'VIRGIN MOJITO', price: 990, contains: ['sugar', 'lime juice', 'soda water'], isAlcoholic: false },
    { name: 'SAFE SEX ON THE BEACH', price: 990, contains: ['peach schnapps', 'orange juice', 'cranberry juice'], isAlcoholic: false },
];
const alcoholList = ['gin', 'vodka', 'rum', 'tequila'];

app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

app.get('/', (req, res) => {
    let cocktailsToDisplay = []
    for (let i = 0; i < cocktails.length; i++) {
        for (let j = 0; j < cocktails[i].contains.length; j++) {
            if (req.query.alcohol === cocktails[i].contains[j]) {
                cocktailsToDisplay.push(cocktails[i]);
            }
        }
    }
    if (cocktailsToDisplay[0] === undefined) {
        res.render('home', {title:"Cocktails on offer" ,cocktails: cocktails, alcoholList: alcoholList });
    } else {
        res.render('home', {title:`Cocktails with ${req.query.alcohol}` , cocktails: cocktailsToDisplay, alcoholList: alcoholList });
    }
});



