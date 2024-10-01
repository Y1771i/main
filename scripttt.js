// function correctDate(date) {     
//     return date < 10 ? "0" + date : date; 
// }  

// function updateTimeElements(timeValue, day, hours, minutes) {
//     timeValue[0].innerHTML = correctDate(day);
//     timeValue[1].innerHTML = correctDate(hours);
//     timeValue[2].innerHTML = correctDate(minutes);
// }

// function sale() {     
//     let saleDate = new Date(2024, 10, 1);  // 1 ноября 2024
//     let currentDate = new Date();     
//     let dateDiff = saleDate - currentDate;

//     let day = Math.floor(dateDiff / (24 * 60 * 60 * 1000));     
//     let hours = Math.floor((dateDiff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));     
//     let minutes = Math.floor((dateDiff % (60 * 60 * 1000)) / (60 * 1000));      

//     if (dateDiff <= 0) {
//         day = hours = minutes = 0;
//     }

//     let timeValue = document.getElementsByClassName("date");
//     let timeValue2 = document.getElementsByClassName("date2");

//     updateTimeElements(timeValue, day, hours, minutes);
//     updateTimeElements(timeValue2, day, hours, minutes);
// }  

// sale();  
// setInterval(sale, 1000);



let wrapper = document.querySelector(".wrapper")
let popUp = document.querySelector(".wrapper .popUp")
let typ = document.querySelector(".wrapper .thankYouPage")
let btns = document.querySelectorAll("section button")

let formBtn = document.querySelector('.form button')
let username= document.getElementsByName("username") [0]
let userphone= document.getElementsByName("userphone") [0]

btns.forEach( btn=> {
      btn.addEventListener('click', showopopUp)
})

wrapper.addEventListener('click', hidepopUp)

function showopopUp () {
      wrapper.style.display = "flex"
      popUp.style.display = "flex"
      typ.style.display = "none"
}

function hidepopUp() {
      let elem = event.target

      if(elem == wrapper) {
            wrapper.style.display = "none"
      }
}


formBtn.addEventListener("click", sendForm)

function sendForm(){
      event.preventDefault()
      if(username.value.length > 1 ) {
            if(userphone.value .length == 13) {
                  showTYP()
            } else {
                  console.log('Неверный номер')
            }
      } else {
            console.log('Короткое имя')
      }
}

function showTYP() {
      popUp.style.display = "none"
      typ.style.display = "flex"
}