let elForm = document.querySelector('.form')
let elInp = document.querySelector('.inp')
let elCardList = document.querySelector('.card__list')
const newArr = []
fetch('https://jsonplaceholder.typicode.com/posts')
.then((respon)=>respon.json())
.then((data)=> getData(data)== mapper(data))

function getData(data){
  elForm.addEventListener('submit', (evn)=>{
    evn.preventDefault()
    newArr.length = ''
    let inpVal = elInp.value;
    data.filter((a)=>{
      if(a.userId == inpVal){
        newArr.push(a);
      elCardList.innerHTML = ''
        newArr.forEach((iteam) => {
          let newLi = document.createElement('li')
          newLi.className = 'card_item'
          newLi.innerHTML = `
          <h3>UserID:${iteam.userId}</h3>
          <h4>Id:${iteam.id}</h4>
          <b>${iteam.title}</b> <br>
          <span>${iteam.body}</span>
          `
          elCardList.appendChild(newLi)
        })
      }
    })
    elInp.value = ''
  })    
}
function mapper(data) {
    elCardList.innerHTML = ''
    data.forEach((iteam) => {
      let newLi = document.createElement('li')
      newLi.className = 'card_item'
      newLi.innerHTML = `
      <h3>UserID:${iteam.userId}</h3>
      <h4>Id:${iteam.id}</h4>
      <b>${iteam.title}</b> <br>
      <span>${iteam.body}</span>
      `
      elCardList.appendChild(newLi)
    })
  }