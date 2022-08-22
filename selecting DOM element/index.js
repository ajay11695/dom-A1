// Change the title of the page to Hello AltCampus!
document.title="Hello AltCampus"
// Select the element using the children property:

// Select the h1 element and change the value to Learning DOM
document.body.children[0].innerText="Learning DOM"
// Select the first li element inside the ul with class topics and change the innerText to all about document
document.body.children[5].children[0].innerText="about document"
// Select the input element with name email
document.body.children[6].children[2]
// Log the number (using console.log) of children of all the li element inside the ul with class topics
console.log(document.querySelectorAll("li ").length)
// Select the first input using the type selector and store them in variable named emailInput
let emailInput=document.querySelector('input')
// Select the ul element using class selector and store in topics
let topics=document.querySelector(".topics")
// Select the first label element and store in label
let label=document.querySelector("label")
// Select the input of type checkbox with the id selector and store in inputCheckbox
let inputcheckbox=document.querySelector("#remember")
// Select the input of type password using Attribute selectors. (eg: input[type="text"]) and store in password
let password=document.querySelector(`input[type="password"]`)
// Select the input using the placeholder attribute selector with value password and store in attrPassword
let attrpassword=document.querySelector(`input[placeholder="password"]`)
// Select all the li element and store in allTopics
let allTopics=document.querySelectorAll("li")
// Select all the input element of any type and store in allInput
let allInput=document.querySelectorAll("input")
// Use forEach to console the innerText property of all the li element in allTopics variable.
allTopics.forEach(element=>{console.log(element.innerText)})
// Select all the elements with class list and store in variable listOfSelectedTopics
let listOfSelectedTopics=document.querySelectorAll(".list")
// Select the first li element inside the ul element using > (direct child) and store in firstLi
let firstLi=document.querySelector("ul>li")
// Select all the img element and log the number of element saying The total number of img element is ---
console.log(`The total number of img element is ${document.querySelectorAll("img").length}`)
// Select all the p element and store in allPElement
let allPElement=document.querySelectorAll("P")
// Select all the buttons and log the count of buttons.
console.log(`count of button is ${document.querySelectorAll("button").length}`)
// Select all the label element and log the count.
console.log(`count of label is ${document.querySelectorAll("label").length}`)
// Select all the elements with id of test
document.querySelectorAll("#test")
// Select the first element with id test using getElementById
document.getElementById("test")
// Select the parent element of the element stored in topics variable (#5) and log the element.
console.log(document.querySelector(".topics").parentElement)
// Select the next element sibling of the element stored in topics variable (#5) and log the element.
console.log(document.querySelector(".topics").nextElementSibling)
// Select the previous element sibling of the element stored in topics variable (#5) and change the innerText property to Learning About Walking the DOM.
console.log(document.querySelector(".topics").previousElementSibling)
// Select the first element child of the element stored in topics variable (#5) and change the innerText property of the element to This is the first child element.
console.log(document.querySelector(".topics").firstElementChild)
// Select the last element child of the element stored in topics variable (#5) and log the typeof the element.
console.log(typeof(document.querySelector(".topics").lastElementChild))
// Select the element with type fieldset and store in a variable named fieldsetElm.
let fieldsetElm=document.querySelector("fieldset")
// Select the parent element of the element stored in fieldsetElm variable (#5) and log the typeof the element.
console.log(typeof(fieldsetElm.parentElement))