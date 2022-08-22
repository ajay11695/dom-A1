/*
Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)
*/

// Your code goes here
function createInputElm1(label,type='text'){
let lab=document.createElement('label')
lab.innerText=label
let Input=document.createElement("input")
Input.type=type
lab.append(Input)

return lab
}

 
 // TEST
 console.log(createInputElm1('Your name')); //<label>Your name: <input type="text"></label>
 console.log(createInputElm1('Your age', 'number')); //<label>Your age: <input type="number"></label>
 
 // // 2. Do the same thing as above using string literal like `<h1>Hello</h1>`
 
 // Your code goes here
 function createInputElm2(label,type='text'){
    let html=`<label>${label}<input type='${type}'></input></label>`
    return html
    }
 
 
 // // TEST
 console.log(createInputElm2('Your name')); //<label>Your name: <input type="text"></label>
 console.log(createInputElm2('Your age', 'number')); //<label>Your age: <input type="number"></label>
 
 // 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
 // the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>
 // Your code goes here
function createList(array){
    let html=`<ul>
    ${array.map(ele=>`<li>${ele}</li>`).join(' ')}
    </ul>`

    return html
}
 
 // // TEST
 console.log(createList(['ALABAMA', 'ALASKA', 'HAWAII', 'KENTUCKY']));
 createList(['Afghanistan', 'Antarctica', 'Congo', 'Estonia']);
 
 // 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
 // the html for single todo will look like given below
 /* 
 <ul>
   <li>
     <p>Learn DOM</p>
     <input type="checkbox" checked name="" id="">
     <span>X</span>
   </li>
 </ul>
 */
 
 // Your code goes here
 function createTodoList(data=[]){
    let html=`<ul>
    ${data.map(todo=>`<li>
    <p>${todo.name}</p>
    <input type="checkbox" ${todo.isDone ? "checked" : ""} name="" id="">
    <span>X</span>
  </li>`).join(' ')}
    </ul>`

    return html
 }
 
 
 
 
  
 
 
 // TEST
 createTodoList([
   { name: 'Learn DOM', isDone: false },
   { name: 'Learn JS', isDone: true },
 ]);
  createTodoList([
   { name: 'Learn DOM', isDone: false },
   { name: 'Learn React', isDone: true },
   { name: 'Learn JS', isDone: true },
 ]);