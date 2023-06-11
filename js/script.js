const drop_btn = document.querySelector(".drop-btn");
const menu_wrapper = document.querySelector(".wrapper");
//const btn_dubrovnik = document.querySelector(".dubrovnik");

const gradovi = document.querySelectorAll(".grad");

const cities = document.querySelectorAll(".city");

drop_btn.onclick = (()=>{
    menu_wrapper.classList.toggle("show");
    drop_btn.textContent = "Odaberi grad";
    let newEl = document.createElement("span");
    newEl.classList.add("fas");
    newEl.classList.add("fa-caret-down");
    drop_btn.appendChild(newEl);
});

//btn_dubrovnik.onclick = (()=>{
  //  drop_btn.textContent = "Dubrovnik";
    //menu_wrapper.classList.toggle("show");
    //let newEl = document.createElement("span");
    //newEl.classList.add("fas");
    //newEl.classList.add("fa-caret-down");
    //drop_btn.appendChild(newEl);
//});



for(let i = 0; i < gradovi.length; i++){
    gradovi[i].onclick = (()=>{
        drop_btn.textContent = gradovi[i].textContent;
        menu_wrapper.classList.toggle("show");
        let newEl = document.createElement("span");
        newEl.classList.add("fas");
        newEl.classList.add("fa-caret-down");
        drop_btn.appendChild(newEl);
        cities[i] = gradovi[i];
        for(let j=0; j<=cities.length; j++){
            if(i==j){
                cities[j].classList.toggle("show");
            }
            else{
                cities[j].classList.remove("show");
            }
        }
    });
}