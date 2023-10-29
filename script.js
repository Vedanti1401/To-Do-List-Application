let form=document.querySelector("form");
let text=document.getElementById("text");
let todoCon=document.querySelector(".todo-con")
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    addtodo();
})


function addtodo(elem) {
    let todoColl=document.createElement("div");
    let todotext=text.value;
  
    todoColl.innerHTML=`
    <div class="todo-li">
    <div class="check"><img src="./assets/icon-check.svg" alt=""></div>
    <p>${todotext}</p>
    <button class="close"><img src="./assets/icon-cross.svg" alt=""></button>
  </div>
  <div class="hr"></div>`;
    todoCon.appendChild(todoColl);
    
    
    let close=todoColl.querySelector(".close");
    close.addEventListener("click", ()=>{
        todoColl.remove();
        
    })
    let check=todoColl.querySelector(".check");
    check.addEventListener('click',()=>{
        check.classList.toggle("active-check")
        todoColl.childrean[0].children
    })
}

















