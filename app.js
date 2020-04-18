document.addEventListener('DOMContentLoaded',()=>{
  //card options
  const cardArray=[
    {
      name:'fries',
      img:'images/fries.png'
    },
    {
      name:'fries',
      img:'images/fries.png'
    },
    {
      name:'blank',
      img:'images/blank.png'
    },
    {
      name:'blank',
      img:'images/blank.png'
    },
    {
      name:'cheeseburger',
      img:'images/cheeseburger.png'
    },
    {
      name:'cheeseburger',
      img:'images/cheeseburger.png'
    },
    {
      name:'hotdog',
      img:'images/hotdog.png'
    },
    {
      name:'hotdog',
      img:'images/hotdog.png'
    },
    {
      name:'ice-cream',
      img:'images/ice-cream.png'
    },
    {
      name:'ice-cream',
      img:'images/ice-cream.png'
    },
    {
      name:'milkshake',
      img:'images/milkshake.png'
    },
    {
      name:'milkshake',
      img:'images/milkshake.png'
    },
    {
      name:'pizza',
      img:'images/pizza.png'
    },
    {
      name:'pizza',
      img:'images/pizza.png'
    },
    {
      name:'white',
      img:'images/white.png'
    },
    {
      name:'white',
      img:'images/white.png'
    }
  ]
//sort images randomly
cardArray.sort(()=> 0.5-Math.random())

//select the the node
const grid=document.querySelector('.grid')
var cardChossen=[]
var cardChoosenId=[]
var cardsWon=[]
const resultDisplay=document.querySelector('#result')

//create-game board
function createBorad(){
  for (let i=0;i<cardArray.length;i++){
    var card=document.createElement('img')
    card.setAttribute('src','images/blank.png')
    card.setAttribute('data-id',i)
    card.addEventListener('click',flipCard)
    grid.appendChild(card)
  }
}

//check for match
function checkForMatch(){
  var cards=document.querySelectorAll('img')
  var optionOneId=cardChoosenId[0]
  var optionTwoId=cardChoosenId[1]

  if(cardChossen[0]===cardChossen[1]){
    alert('You found a match')
    cards[optionOneId].setAttribute('src','images/white.png')
    cards[optionTwoId].setAttribute('src','images/white.png')
    cardsWon.push(cardChossen)
  }else{
    cards[optionOneId].setAttribute('src','images/blank.png')
    cards[optionTwoId].setAttribute('src','images/blank.png')
    alert('Sorry Try Again')
  }
  cardChossen=[]
  cardChoosenId=[]
  resultDisplay.textContent=cardsWon.length
  if(cardsWon.length===cardArray.length/2){
    resultDisplay.textContent='Congaratulations you found them all!'
  }
}
//flip your card
function flipCard(){
  var cardId=this.getAttribute('data-id')
  cardChossen.push(cardArray[cardId].name)
  cardChoosenId.push(cardId)
  this.setAttribute('src',cardArray[cardId].img)
  if(cardChossen.length===2){
    setTimeout(checkForMatch,500)
  }
}

createBorad()

})