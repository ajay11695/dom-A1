// creating elements
let divHtml=document.querySelector('div');


// inserting Data in created elements

got.houses.forEach(house=>{
     house.people.forEach(ele=>{
        let div=document.createElement("div")
        let img=document.createElement("img")
        let h2=document.createElement("h2")
        let h3=document.createElement("h3")
        let a=document.createElement("a")
        img.src=ele.image
        img.style.width='100px'
        img.style.height='100px'
        img.style.borderRadius='50%'
        img.style.border='3px solid green'
        // img.style.padding='0 1rem'
        h2.innerText=ele.name
        h2.style.fontSize='1.5rem'
        h2.style.padding='1rem 1rem'
        let divimg=document.createElement('div')
        divimg.append(img,h2)
        divimg.style.display='flex'
        divimg.style.justifyContent='flex-start'
        divimg.style.paddingLeft='1rem'
        divimg.style.paddingTop='1rem'
        h3.innerText=ele.description
        h3.style.textAlign='center'
        h3.style.margin='1rem'
        h3.style.fontSize='16px'
        a.href=ele.wikiLink
        a.innerText='Learn More!'
        a.style.color='white'
        a.style.width='90%'
        a.style.textAlign='center'
        a.style.backgroundColor='#96b7f4'
        a.style.borderRadius='.3rem'
        a.style.padding='1rem'
        a.style.marginLeft='1.2rem'
        a.style.marginBottom='1.2rem'
        a.style.textDecoration='none'
      
        div.append(divimg,h3,a)
        div.style.display='flex'
        // div.style.justifyContent='center'
        div.style.flexDirection='column'
        // div.style.alignItems='center'
        div.style.background='white'
        div.style.width='32%'
        div.style.margin='.5rem'
        
        divHtml.append(div)
     })
})


