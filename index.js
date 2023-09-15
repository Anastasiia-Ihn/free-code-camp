//------------------- task 1

// function findElement(arr, func) {
//     let num = [];
   
//     arr.map(el => {
    
//         if (func(el)) {
//             num.push(el)
//         }
//     });
//    return num[0];
// }

// console.log(findElement([1, 7, 3, 7], num => num % 2 === 0))

//------------------------task 2
// function booWho(bool) {

//     if ((bool === true) || (bool === false)) {
//         return true
//     }
//   return false;
// }

// console.log(booWho(false));

//------------------------task 3
// function titleCase(str) {
//     return str.toLowerCase().split(' ')
//         .map(word => word.replace(word[0], word[0].toUpperCase()))
//         .join(' ')
 
// }

// console.log(titleCase("I'm a little tea pot"));

//------------------------task 4
// function frankenSplice(arr1, arr2, n) {
//     let newArr1 = [...arr1];
//     let newArr2 = [...arr2];
//         newArr1.splice(0, 0, ...newArr2.slice(0, n))
//     newArr1.push(...newArr2.slice(n))
//     return newArr1
//     //  return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];

// }

// console.log(frankenSplice([1, 2, 3,4], [4, 5, 6], 2))
// console.log(frankenSplice([1, 2], ["a", "b"], 1));
// console.log(frankenSplice([1, 2, 3], [4, 5], 1));

// -----------------------------------task 5

// function bouncer(arr) {
//     let newArr=[];
//     arr.map(elem => {
//         console.log(!elem);
//         if (!elem) {
//             return
//         } newArr.push(elem)
//     });
//     return newArr;

// }

// console.log(bouncer([7, "ate", "", false, 9]))

//-----------------------task 6

// function getIndexToIns(arr, num) {

  //  //   return arr.filter(val => num > val).length;
    // return arr
    // .concat(num)
    // .sort((a, b) => a - b)
    // .indexOf(num);
// }
// getIndexToIns([40, 60], 50);

//------------------------task 7

// function mutation(arr) {

//     //  return arr[1]
//     // .toLowerCase()
//     // .split("")
//     // .every(function(letter) {
//     //   return arr[0].toLowerCase().indexOf(letter) !== -1;
//     // });


//     let str1 = arr[0].toLowerCase().split('')
//     let str2 = arr[1].toLowerCase().split('')

//     for (let i = 0; i < str2.length; i+=1) {
//         console.log(str2[i]);
//         console.log(str1.indexOf(str2[i]));
//         if (str1.indexOf(str2[i]) !== -1) {
//             return true
//         }return false
//     }
// }

// console.log(mutation(["hello", "ohey"]));

//-------------------------task 8

// function chunkArrayInGroups(arr, size) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i+=size) {
//             newArr.push(arr.slice(i, i + size));
    
//     }

//   return newArr;
// }

// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));






// const modalCloseBtnOrder = document.querySelector('.modal-close-btn-order');
// const backdropEl = document.querySelector('.backdrop');
// const formOrder = document.querySelector('.modal-form-order');
// // const OpenModalOrderNow = document.querySelector('.open-modal-order-now')


// // клік на btnClose
// modalCloseBtnOrder.addEventListener('click', onBtnClose);
// // клік на backdropEl
// backdropEl.addEventListener('click', onclickBackdrop);
// // клік на Escape
// document.addEventListener("keydown", onClickEscape);
// // клік на Send
// formOrder.addEventListener('submit', onClickSend);


// function onBtnClose() {
//   backdropEl.classList.toggle('is-hidden');
// modalCloseBtnOrder.removeEventListener('click', onBtnClose);
// }

// function onclickBackdrop() {
//   backdropEl.classList.toggle('is-hidden');
//   backdropEl.removeEventListener('click', onclickBackdrop);
// }

// function onClickEscape(e) {
//   if (e.code === "Escape") {
//  backdropEl.classList.toggle('is-hidden')

//     console.log("Closing window...");
//     document.removeEventListener("keydown", onClickEscape) } //  знімаємо слухача на Escape
 
// }

// function onClickSend(evt) {

//   evt.preventDefault();

//     const { user_name, user_phone, user_mail_modal, modal_comment  } = evt.target.elements;
 
//     // перевірка чи заповнені поля вводу
//     if (user_phone === "" || user_mail_modal.value === "" || user_name.value === '' || modal_comment.value ==='') {
//         alert('All fields must be filled')
//     }
//     else {
//       console.log({
//         'Name': user_name.value,
//         'Phone number': user_phone.value,
//         'Email': user_mail_modal.value,
//         'Comment': modal_comment.value
//       })
      
//       form.reset()   //очищаємо поле
//   }
//   formOrder.removeEventListener('submit', onClickSend);
   
// }



const modalCloseBtnOrder = document.querySelector('.modal-close-btn-order');
const backdropEl = document.querySelector('.backdrop');
const formOrder = document.querySelector('.modal-form-order');

const modalOrderNow = document.querySelector('.modal-order-now')


// клік на btnClose
modalCloseBtnOrder.addEventListener('click', onBtnClose);
// клік на backdropEl
backdropEl.addEventListener('click', onclickBackdrop);
// клік на Escape
document.addEventListener("keydown", onClickEscape);
// клік на Send
formOrder.addEventListener('submit', onClickSend);


function onBtnClose() {
  backdropEl.classList.add('is-hidden');
// modalCloseBtnOrder.removeEventListener('click', onBtnClose);
}

function onclickBackdrop(e) {
  
 if (e.target===backdropEl) {
   backdropEl.classList.toggle('is-hidden');
  backdropEl.removeEventListener('click', onclickBackdrop);
}

 
}

function onClickEscape(e) {
  if (e.code === "Escape") {
 backdropEl.classList.toggle('is-hidden')

    console.log("Closing window...");
    document.removeEventListener("keydown", onClickEscape) } //  знімаємо слухача на Escape
 
}

function onClickSend(evt) {

  evt.preventDefault();  

    const { user_name, user_phone, user_mail_modal, modal_comment  } = evt.target.elements;
 
    // перевірка чи заповнені поля вводу
    if (user_phone === "" || user_mail_modal.value === "" || user_name.value === '' || modal_comment.value ==='') {
        alert('All fields must be filled')
    }
    else {
      console.log({
        'Name': user_name.value,
        'Phone number': user_phone.value,
        'Email': user_mail_modal.value,
        'Comment': modal_comment.value
      })
      
      formOrder.reset()   //очищаємо поле
      formOrder.removeEventListener('submit', onClickSend);
         backdropEl.classList.toggle('is-hidden');

  }
  
   
}




const add = document.querySelector('.add')


function fetchBreeds() {
    const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api/recipes';
        
  return fetch(`${BASE_URL}`)
    .then((resp) => {
    if (!resp.ok) {console.log('Oops! Something went wrong! Try reloading the page!')}
    return resp.json();
    })
    .catch(() =>console.log('Oops! Something went wrong! Try reloading the page!'))
}

  fetchBreeds().then((data) => {console.log(data.results);
    const { _id, title, preview, description, rating } = data.results
    add.innerHTML = createMarkupElForFilter(data.results)
    console.log(add);
  }).catch(() => {
    console.log('err');
  })



function createMarkupElForFilter(arr) {
  
 return arr.map(({ _id, title, preview, description, rating }) => 
 
        `<div class="blok-recipes id="${_id}">
  <img class="img-blok-recipes" src="${preview}" alt="${title}" />
 <div class="context-blok-recipes"> <h3 class="title-blok-recipes">${title}</h3>
  <p class="text-blok-recipes">${description}</p>
  <div>
    <p class="text-number-blok-recipes">${rating}</p>
    <input type="checkbox" name="" id="" />
  </div>
  <button class="btn-blok-recipes-see" type="button">See recipe</button></div>
</div>`).join(''); 
   
  }

