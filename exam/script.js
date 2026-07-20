let result=[]
let editid=null
let filter=[]

function submit(){
    let names=document.getElementById('s-name').value
    let eng=Number(document.getElementById('eng').value) 
    let mat= Number(document.getElementById('mat').value)
    let sci= Number(document.getElementById('sci').value)
    let img= document.getElementById('img').value
    let obj ={names,eng,mat,sci,img}

    if (names && eng && mat && sci && img){

      if (editid!=null){
        result[editid]=obj
        editid=null
      }
      else {
     result.push(obj)
     console.log(result)

      }  
    document.getElementById('s-name').value =''
    document.getElementById('eng').value = ''
    document.getElementById('mat').value = ''
    document.getElementById('sci').value = ''
    document.getElementById('img').value = ''
       dataview(result)
    }
    console.log(result)
    
}



function dataview(data){
    let print =''
    
    data.map((i,index)=>{
          let total = sum(i)  
          let perc = ((total/300)*100).toFixed(2)   
          let minimum = min(i) 
          let maximum = max(i) 
          
         print+=`<div class="profile border border-black rounded-xl overflow-hidden">
                <div class="image ">
                    <img class="w-100 h-70" src="${i.img}">
                </div>
                <div class="content bg-gray-700 px-3 py-4">
                    <h3 class=" text-center text-[#36ADA3] text-xl font-bold mb-3">${i.names}</h3>
                    <div class="marks flex  ">
                          <lable class="mb-3 w-[120px] text-yellow-500 font-medium">English:- </lable><span class="w-[150px] text-[#FFE2E2]" > ${i.eng}</span>
                    </div>
                    <div class="marks flex  ">
                          <lable class="mb-3 w-[120px] text-yellow-500 font-medium">Maths:- </lable><span class="w-[150px] text-[#FFE2E2]" >${i.mat}</span>
                    </div>
                    <div class="marks flex  ">
                          <lable class="mb-3 w-[120px] text-yellow-500 font-medium">Science:- </lable><span class="w-[150px] text-[#FFE2E2]" >${i.sci}</span>
                    </div>
                    <div class="marks flex  ">
                          <lable class="mb-3 w-[120px] text-yellow-500 font-medium">Total:- </lable><span class="w-[150px] text-[#FFE2E2]" >${total}</span>
                    </div>
                    <div class="marks flex  ">
                          <lable class="mb-3 w-[120px] text-yellow-500 font-medium">Percentage:- </lable><span class="w-[150px] text-[#FFE2E2]" >${perc} %</span>
                          </div>
                          <div class="marks flex  ">
                          <lable class="mb-3 w-[120px] text-yellow-500 font-medium">Min Marks:- </lable><span class="w-[150px] text-[#FFE2E2]" >${minimum}</span>
                    </div>
                    <div class="marks flex  ">
                          <lable class="mb-3 w-[120px] text-yellow-500 font-medium">Max Marks:- </lable><span class="w-[150px] text-[#FFE2E2]" >${maximum}</span>
                    </div>
                       <div class="marks flex gap-6 justify-center mt-3">
                          <button onclick="update(${i.position ?? index})"  class="text-white bg-blue-500 px-3 py-1 rounded-md">Edit</button><button onclick="dlt(${i.position ?? index})" class="text-white bg-red-500 px-3 py-1 rounded-md">Delete</button>
                    </div>
                    
                    
                </div>
              </div>`

    })
    document.getElementById('card').innerHTML=print

    
}


function sum(i){
 return  i.eng + i.mat + i.sci
}

function min(i){
   if(i.eng< i.mat && i.sci){
    return i.eng;
   }

   if(i.mat<i.sci){
    return i.mat;
   }

   else {
    return i.sci
   }

}

function max(i){
   if(i.eng> i.mat && i.sci){
    return i.eng;
   }

   if(i.mat>i.sci){
    return i.mat;
   }

   else {
    return i.sci
   }

}


function dlt(index){

    result.splice(index,1)
    dataview(result)

}

function update(index){
    
    editid=index
    let edit =result[index];

    document.getElementById('s-name').value =edit.names
    document.getElementById('eng').value = edit.eng
    document.getElementById('mat').value = edit.mat
    document.getElementById('sci').value = edit.sci
    document.getElementById('img').value = edit.img

}



function search(){
    let field = document.getElementById('search').value

    filter=result.map((i,index)=>{
         return{
            ...i,
            position:result.indexOf(i)
         }

    }).filter(i=>i.names.toLowerCase().includes(field.toLowerCase()))

    dataview(filter)
    document.getElementById('search').value=''

}



dataview(result)