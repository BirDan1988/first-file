let result=[]
let editid=null
let filter=[]


const demodata = [
    { name: "Aarav Patel", eng: 85, mat: 90, sci: 88, img: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Diya Shah", eng: 78, mat: 82, sci: 80, img: "https://randomuser.me/api/portraits/women/2.jpg" },
    { name: "Vivaan Mehta", eng: 92, mat: 95, sci: 91, img: "https://randomuser.me/api/portraits/men/3.jpg" },
    { name: "Anaya Joshi", eng: 88, mat: 79, sci: 85, img: "https://randomuser.me/api/portraits/women/4.jpg" },
    { name: "Krish Patel", eng: 75, mat: 81, sci: 77, img: "https://randomuser.me/api/portraits/men/5.jpg" },
    { name: "Riya Desai", eng: 90, mat: 93, sci: 94, img: "https://randomuser.me/api/portraits/women/6.jpg" },
    { name: "Aditya Kumar", eng: 70, mat: 68, sci: 72, img: "https://randomuser.me/api/portraits/men/7.jpg" },
    { name: "Kiara Shah", eng: 95, mat: 96, sci: 98, img: "https://randomuser.me/api/portraits/women/8.jpg" },
    { name: "Yash Verma", eng: 82, mat: 85, sci: 80, img: "https://randomuser.me/api/portraits/men/9.jpg" },
    { name: "Meera Singh", eng: 87, mat: 89, sci: 90, img: "https://randomuser.me/api/portraits/women/10.jpg" },
    { name: "Arjun Nair", eng: 73, mat: 78, sci: 75, img: "https://randomuser.me/api/portraits/men/11.jpg" },
    { name: "Ishita Gupta", eng: 91, mat: 92, sci: 89, img: "https://randomuser.me/api/portraits/women/12.jpg" },
    { name: "Kabir Sharma", eng: 84, mat: 87, sci: 83, img: "https://randomuser.me/api/portraits/men/13.jpg" },
    { name: "Sara Khan", eng: 89, mat: 90, sci: 92, img: "https://randomuser.me/api/portraits/women/14.jpg" },
    { name: "Dhruv Rana", eng: 77, mat: 74, sci: 79, img: "https://randomuser.me/api/portraits/men/15.jpg" },
    { name: "Aisha Ali", eng: 93, mat: 94, sci: 96, img: "https://randomuser.me/api/portraits/women/16.jpg" },
    { name: "Rohan Das", eng: 69, mat: 72, sci: 70, img: "https://randomuser.me/api/portraits/men/17.jpg" },
    { name: "Nidhi Jain", eng: 86, mat: 88, sci: 84, img: "https://randomuser.me/api/portraits/women/18.jpg" },
    { name: "Parth Modi", eng: 81, mat: 83, sci: 82, img: "https://randomuser.me/api/portraits/men/19.jpg" },
    { name: "Sneha Kapoor", eng: 94, mat: 97, sci: 95, img: "https://randomuser.me/api/portraits/women/20.jpg" }
];

function submit(){
    let names=document.getElementById('s-name').value
    let eng=Number(document.getElementById('eng').value) 
    let mat= Number(document.getElementById('mat').value)
    let sci= Number(document.getElementById('sci').value)
    let img= document.getElementById('img').value
    let obj ={names,eng,mat,sci,img}



if(!names || !eng || !mat || !sci || !img){
    document.getElementById('error').innerText='* Enter all input field'
}



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
    document.getElementById('error').innerText=''
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
                    <img class="w-full h-70" src="${i.img}">
                </div>
                <div class="content bg-[#0E171A] px-3 py-4">
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
                          <button onclick=update(${i.position ?? index})  class="text-white bg-blue-500 px-3 py-1 rounded-md">Edit</button><button onclick=dlt(${i.position ?? index}) class="text-white bg-red-500 px-3 py-1 rounded-md">Delete</button>
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

function all(){
    dataview(result)
}


dataview(result)

function demo() {

    let randomIndex = Math.floor(Math.random() * demodata.length);

    let student = demodata[randomIndex];

    document.getElementById('s-name').value = student.name;
    document.getElementById('eng').value = student.eng;
    document.getElementById('mat').value = student.mat;
    document.getElementById('sci').value = student.sci;
    document.getElementById('img').value = student.img;
    

}
