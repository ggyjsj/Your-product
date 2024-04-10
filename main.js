//document.write("hussein");
//let askemail = prompt()
//let email ="baa16601@gmail.com"
//console.log(askemail.toLocaleLowerCase().trim() == email);

//let salary = 10000;
//let size =50;
//console.log(salary>10000 ||size >40);

//let x = +prompt()
//console.log(Number.isInteger(x))
//let role=prompt('whate is your role');
//switch (role)
//{
//case 'admin':
//document.write('update')
//break;

//case 'modreator':
  //document.write('delete')
  //break;
  
//default:
//}

  //let cars = ['BMW','Mercedes','Honda']
  //let models=[2020,2021,2022]
//  let colors=['black','white','blue']
//  for (let i =0;i<cars.length;i++)
//  {
   // console.log(`car: ${cars[i]}`);
   // for(let x=0;x<models.length;x++)
   // {
  //    console.log(`model: ${models[x]}`)
   // }
  //  for(let y=0;y<colors.length;y++)
 ///    return result;
//} 

//function calc( ...num)
//{ let result =0;
//  for( let i=0;i<num.length;i++)
//  result +=num[i];
// console.log(result)
//}
//calc(1,8,7,9)

//let container = document.getElementById('container')

//container.innerText='hello world'
//container.style.color='#fa0'
//container.style.backgroundColor='#444'
//container.style.padding='10px'
//container.style.borderLeft='4px solid #fa0'

 //let container = document.createElement('div');
// let head = document.createElement('h1');
 //let img = document.createElement('img');
   
//let content = document.createTextNode('free palasten     فلسطين حره ') 
//head.appendChild(content);
//img.src='images.jpeg';
  
//container.appendChild(head);
//container.appendChild(img);
//document.body.appendChild(container);
//console.log(container);
//img.style.width='300px'
//container.style.background='white'

//container.style.color='black'
//container.style.padding='20px'
//container.style.textAlign='center'
//container.style.borderLeft='150px solid red'
//container.style.borderTop='200px solid black'
//container.style.borderBottom='200px solid green'



//let names =['red chose','black chose','green chose','white chose'];

//let sals1 =['150','125','225','250'];

//let container =document.createElement('div');
//document.body.appendChild(container);
//container.style.textAlign ='center';
//function element(names,sals1)
//{
  //let card = document.createElement('div');
//  let title = document.createElement('h2');
//  let sals = document.createElement('p');
 //  let img1 = document.createElement('img');
//   let img2 = document.createElement('img');
  // let img3 = document.createElement('img');
//   let img4 = document.createElement('img');
 
  
  //let head = document.createTextNode(names);
 // let elsals = document.createTextNode(sals1);
//  title.appendChild(head);
//  sals.appendChild(elsals);
//img1.src='Red.jpeg'; img2.src='Black.jpeg';  img3.src='Green.jpeg' ; img4.src='White.jpeg';

 // card.appendChild(title);
//  card.appendChild(sals);
//  card.appendChild(img1);
//  card.appendChild(img2);
//  card.appendChild(img3);
//  card.appendChild(img4);
//  document.createRange
//  container.appendChild(card);
 // card.style.width='200px'
//  img1.style.width='100%'
//   img2.style.width='100%'
   // img3.style.width='100%'
  //   img4.style.width='100%'
//  card.style.background='#444'
//  card.style.padding='10px'
//  card.style.margin='2px'
//  card.style.display='inline-block'
//  card.style.color='#fff'
  
// }

//for(let i =0 ;i<4 ;i++)
//{
//  element(names[i],sals1[i])
//}

//let btn=document.getElementById('btn')
//btn.addEventListener('click',function(){
//  btn.style.background='black'
//  btn.style.color='#fff'
//  let div=document.getElementById('div')
//let card =document.getElementById('card')
//let black=document.getElementById('black')
//let salary=document.getElementById('salary')
//let img=document.getElementById('img')
//let card2=document.getElementById('card2')
//let  red= document.getElementById('red')
//let salary2 = document.getElementById('salary2')
//let img2 = document.getElementById('img2')
//let card3=document.getElementById('card3')
//let green = document.getElementById('green')
//let salary3 = document.getElementById('salary3')
//let img3 = document.getElementById('img3')
//let card4=document.getElementById('card4')
//let white = document.getElementById('white')
//let salary4 = document.getElementById('salary4')
//let img4 = document.getElementById('img4')

//card.style.width = '200px'
// img.style.width='100%'
// card.style.background='#444'
// card.style.padding='10px'
// card.style.margin='2px'
 //card.style.display='inline-block'
// card.style.color='#fff'
 
 //card2.style.width = '200px'
// img2.style.width = '100%'
// card2.style.background = '#444'
// card2.style.padding = '10px'
// card2.style.margin = '2px'
// card2.style.display = 'inline-block'
// card2.style.color = '#fff'
 
 //card3.style.width = '200px'
 //img3.style.width = '100%'
// card3.style.background = '#444'
// card3.style.padding = '10px'
// card3.style.margin = '2px'
// card3.style.display = 'inline-block'
// card3.style.color = '#fff'
 
//card4.style.width = '200px'
//img4.style.width = '100%'
//card4.style.background = '#444'
//card4.style.padding = '10px'
//card4.style.margin = '2px'
//card4.style.display = 'inline-block'
//card4.style.color = '#fff'
// document.body.style.background='black'
//})
// تحويل الجنيه لدولار
//let dollar =document.getElementById('dollar')
//let pound =document.getElementById('pound')
//dollar.onkeyup=function ()
//{
//  pound.value=dollar.value*50
//}
//pound.onkeyup=function()
//{
//  dollar.value=pound.value/39
//}

let title=document.getElementById('title');
let price=document.getElementById('price');
let taxes=document.getElementById('taxes');
let ads=document.getElementById('ads');
let discount=document.getElementById('discount');
let total=document.getElementById('total');
let count=document.getElementById('count');
let category=document.getElementById('category');
let submit=document.getElementById('submit');
let mood='create'
let tmp;
//حساب سعر المنتج شامل الضرايب والاعلانات
function gettotal(){
if(price.value !=''){
  let result=(+price.value + +taxes.value + +ads.value)-+discount.value
  total.innerHTML=result;
  total.style.background='#040'
}else{
  total.innerHTML=''
  total.style.background='#a00d02'
}
}
//الحصول ع البيانات من المستخدم
let datapro;
if (localStorage.product !=null){
  datapro = JSON.parse(localStorage.product)
} else {
  datapro=[]
}

submit.onclick=function(){
  let newdata={
    title:title.value.toLocaleLowerCase(),
    price:price.value,
    taxes:taxes.value,
    ads:ads.value,
    discount:discount.value,
    total:total.innerHTML,
    count:count.value,
    category:category.value.toLocaleLowerCase(),
  }
  if(title.value!=''&&price.value!=''&&category.value!=''&&count.value<200){
  if(mood==='create'){
  if (newdata.count>1) {
    for (let i = 0; i <newdata.count; i++) {
      datapro.push(newdata);
    }
  } else {
    datapro.push(newdata);
  }
  }else{
    datapro[tmp]=newdata
    mood ='create'
    submit.innerHTML='create'
    count.style.display='block'
    
  }
  cleardata()
}

  console.log(datapro);
  localStorage.setItem('product',JSON.stringify(datapro));
  showData()
  
    
  }

//حذف البيانات بعد اضافه منتج
function cleardata(){
  title.value=''
     price.value=''
    taxes.value=''
    ads.value=''
    discount.value=''
    total.innerHTML=''
    count.value=''
    category.value=''
}
//عرض البيانات
function showData(){ 
  gettotal()
  let table=''
  for (let i = 0; i < datapro.length; i++) {
    table +=`
     <tr>
       <td>${i+1}</td>
       <td>${datapro[i].title}</td>        
       <td>${datapro[i].price}</td>
       <td>${datapro[i].taxes}</td>
       <td>${datapro[i].ads}</td>
       <td>${datapro[i].discount}</td>
       <td>${datapro[i].total}</td>
       <td>${datapro[i].category}</td>
       <td><button onclick="updateData(${i})" id="update">update</button></td>
         <td><button onclick="deletedata(${i})" id="delete">delete</button></td>
       </tr>
    `
  }
  
  
  document.getElementById('tbody').innerHTML=table
  let btndelete=document.getElementById('deleteAll')
   if (datapro.length>0) {
  btndelete.innerHTML=`<button onclick="deleteall()">deleteAll(${datapro.length})</button>`
  } else {
    btndelete.innerHTML='';
  }
}
showData()
//حخذف منتج
function deletedata(i){
  datapro.splice(i,1)
  localStorage.product=JSON.stringify(datapro)
  showData()
}
//اظهار زرار الخذف لجمع النتجات
function deleteall(){
  localStorage.clear()
datapro.splice(0);
  showData()
  
} 
function updateData(i) {
  title.value=datapro[i].title
  price.value=datapro[i].price
  taxes.value=datapro[i].taxes
  ads.value=datapro[i].ads
  discount.value=datapro[i].discount
  category.value=datapro[i].category
  gettotal()
count.style.display='none'
submit.innerHTML='Update'
mood='Update'
tmp=i;
scroll({
  top:0,
  behavior:"smooth",
})
}

let searchMood='Title'
function getsearchMood(id)

{
  let search =document.getElementById('search')
  if(id=='searchtitle'){
    
 
  } else {
    searchMood='Category';
   
  }
search.focus();
search.value='';
showData()

   search.placeholder='searchBy'+searchMood;
}
function searchData(value){
  let table='';
  for(let i=0;i<datapro.length;i++){
  if(searchMood=='Title'){
    
      if (datapro[i].title.includes(value.toLowerCase())) {
        table += `
                         <tr>
                           <td>${i+1}</td>
                           <td>${datapro[i].title}</td>        
                           <td>${datapro[i].price}</td>
                           <td>${datapro[i].taxes}</td>
                           <td>${datapro[i].ads}</td>
                           <td>${datapro[i].discount}</td>
                           <td>${datapro[i].total}</td>
                           <td>${datapro[i].category}</td>
                           <td><button onclick="updateData(${i})" id="update">update</button></td>
                             <td><button onclick="deletedata(${i})" id="delete">delete</button></td>
                           </tr>
                        `
      }
    
  
    
  }else {
    
      if (datapro[i].category.includes(value.toLowerCase())) {
    
        table += `
                         <tr>
                           <td>${i+1}</td>
                           <td>${datapro[i].title}</td>        
                           <td>${datapro[i].price}</td>
                           <td>${datapro[i].taxes}</td>
                           <td>${datapro[i].ads}</td>
                           <td>${datapro[i].discount}</td>
                           <td>${datapro[i].total}</td>
                           <td>${datapro[i].category}</td>
                           <td><button onclick="updateData(${i})" id="update">update</button></td>
                             <td><button onclick="deletedata(${i})" id="delete">delete</button></td>
                           </tr>
                        `
  }
    
    }
}
document.getElementById('tbody').innerHTML=table;
} 