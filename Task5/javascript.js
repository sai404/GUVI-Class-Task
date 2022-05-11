
  let breakLine=document.createElement('br');
  let breakLine1=document.createElement('br');
  let breakLine2=document.createElement('br');
  let Element1=document.createElement('input');
  Element1.setAttribute('id','input1');
  Element1.setAttribute('type','text');
  let Element2=document.createElement('input');
  Element2.setAttribute('id','input2');
  Element2.setAttribute('type','text');
  let Element3=document.createElement('input');
  Element3.setAttribute('id','input3');
  Element3.setAttribute('type','text')
  let button1=document.createElement('button');
  var tag=document.createElement('p')
  button1.setAttribute('id','ReadBtn1');
  button1.textContent='Print To Console';
  document.body.appendChild(Element1);
  document.body.appendChild(breakLine);
  document.body.appendChild(Element2);
  document.body.appendChild(breakLine1);
  document.body.appendChild(Element3);
  document.body.appendChild(breakLine2);
  document.body.appendChild(button1);
  document.body.appendChild(tag);
  button1.addEventListener("click",()=>{
    if(!input1.value || !input2.value || !input3.value){
      tag.innerText=`Please dont leave anything empty`;
    }else{
      let stri="This is from input box 1"+input1.value+"\nThis is from input box 2"+input2.value+"\nThis is from input box 3"+input3.value;
      tag.innerText=stri;
    }

  })
