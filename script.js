    let marksheet =[]
    let editid=null
    let filter=[]
    let demodata= [
    {name:"Rahul", eng:78, mat:85, sci:82, cmp:91, guj:74},
    {name:"Priya", eng:92, mat:88, sci:95, cmp:97, guj:90},
    {name:"Amit", eng:65, mat:70, sci:68, cmp:75, guj:72},
    {name:"Neha", eng:89, mat:94, sci:90, cmp:96, guj:87},
    {name:"Karan", eng:45, mat:58, sci:62, cmp:55, guj:50},
    {name:"Riya", eng:98, mat:96, sci:94, cmp:99, guj:97},
    {name:"Arjun", eng:76, mat:81, sci:79, cmp:85, guj:73},
    {name:"Meera", eng:84, mat:80, sci:86, cmp:89, guj:88},
    {name:"Vivek", eng:69, mat:75, sci:71, cmp:78, guj:74},
    {name:"Sneha", eng:91, mat:93, sci:88, cmp:95, guj:92},
    {name:"Yash", eng:55, mat:61, sci:58, cmp:66, guj:60},
    {name:"Anjali", eng:87, mat:85, sci:91, cmp:93, guj:89},
    {name:"Harsh", eng:72, mat:68, sci:75, cmp:80, guj:70},
    {name:"Pooja", eng:96, mat:94, sci:98, cmp:97, guj:95},
    {name:"Manav", eng:39, mat:48, sci:44, cmp:52, guj:41},
    {name:"Kavya", eng:83, mat:79, sci:85, cmp:88, guj:84},
    {name:"Rohan", eng:62, mat:66, sci:70, cmp:72, guj:68},
    {name:"Isha", eng:90, mat:92, sci:94, cmp:91, guj:89},
    {name:"Dev", eng:35, mat:40, sci:38, cmp:45, guj:37},
    {name:"Nisha", eng:88, mat:86, sci:90, cmp:92, guj:87}
];

function submit(){
    let name=document.getElementById('s-name').value
    let eng=Number(document.getElementById('eng').value)
    let mat=Number(document.getElementById('mat').value)
    let sci=Number(document.getElementById('sci').value)
    let cmp=Number(document.getElementById('cmp').value)
    let guj=Number(document.getElementById('guj').value)
  
    

    let obj={name,eng,mat,sci,cmp,guj}

 if(!name || !eng || !mat || !sci || !cmp || !guj){

    document.getElementById('error').innerText='Enter Empty Field'
 }

 if (eng > 100 || eng < 0 || mat > 100 || mat<0 || sci > 100 || sci<0 || cmp > 100 || cmp<0 || guj > 100 || guj<0) {
    document.getElementById('error').innerText = "Marks must be between 0 and 100";
    return;
}
    

    if(name && eng && mat && sci && cmp && guj){
     if(editid!=null){
       marksheet[editid]=obj
       editid=null
     }

      else {
      marksheet.push(obj)
     
      }
       document.getElementById('error').innerHTML=''
       document.getElementById('eng-error').innerText=''
      document.getElementById('mat-error').innerText=''
         document.getElementById('name-error').innerText=''
         document.getElementById('sci-error').innerText=''
         document.getElementById('cmp-error').innerText=''
        document.getElementById('guj-error').innerText=''
        document.getElementById('s-name').value=''
    document.getElementById('eng').value=''
    document.getElementById('mat').value=''
    document.getElementById('sci').value=''
    document.getElementById('cmp').value=''
    document.getElementById('guj').value=''
         
         
        dataView(marksheet)
        
    }
    
}

function dataView(data){

let print=''

            data.map((i,index)=>{

                let total =sum(i)
                let percentage = ((total/500)*100).toFixed(2);
                let avg = (total/5)
                 let grd= grade(percentage)
                 let rsl= result(i)

                print += 
                 `<tr class="${index % 2 == 0 ? 'bg-gray-800' : 'bg-gray-700'}">
                    <td class="text-[#FFBE91] text-lg bg-white/10   text-center px-3 py-1 border-r-2 border-black">${i.name}</td>
                    <td class="text-[#FFBE91] text-lg bg-white/10   text-center px-3 py-1  border-r-2 border-black">${i.eng}</td>
                    <td class="text-[#FFBE91] text-lg bg-white/10   text-center px-3 py-1  border-r-2 border-black">${i.mat}</td>
                    <td class="text-[#FFBE91] text-lg bg-white/10   text-center px-3 py-1  border-r-2 border-black">${i.sci}</td>
                    <td class="text-[#FFBE91] text-lg bg-white/10   text-center px-3 py-1  border-r-2 border-black">${i.cmp}</td>
                    <td class="text-[#FFBE91] text-lg bg-white/10   text-center px-3 py-1  border-r-2 border-black">${i.guj}</td>
                    <td class="text-[#FFBE91] text-lg bg-white/10   text-center px-3 py-1  border-r-2 border-black">${total}</td>
                    <td class="text-[#FFBE91] text-lg bg-white/10   text-center px-3 py-1  border-r-2 border-black">${percentage}%</td>
                    <td class="text-[#FFBE91] text-lg bg-white/10   text-center px-3 py-1  border-r-2 border-black">${avg}</td>
                    <td class="text-[#FFBE91] text-lg bg-white/10   text-center px-3 py-1  border-r-2 border-black">${grd}</td>
                    <td class="text-[#FFBE91] text-lg bg-white/10   text-center px-3 py-1  border-r-2 border-black">${rsl}</td>
                    <td class="text-cyan-400 text-lg bg-white/10   text-center px-3 py-1  border-r-2 border-black"><button onclick=update(${i.position ?? index}) class="px-2  text-white bg-sky-800 rounded-md font-medium flex gap-1 items-center"><i class="fa-regular fa-pen-to-square font-thin text-sm flex items-center"></i>Edit</button></td>
                    <td class="text-red-500 text-lg bg-white/10   text-center px-3 py-1  border-r-2 border-black"><button onclick=dlt(${i.position ?? index}) class="px-2  text-white bg-red-500 rounded-md font-medium flex gap-1 items-center"><i class="fa-regular fa-trash-can font-thin text-sm flex items-center"></i>Delete</button></td>
                   
                </tr>`
                
            })    
                document.getElementById('tabledata').innerHTML=print
         
}


function sum(i){
 return i.eng + i.mat + i.sci + i.cmp + i.guj

}

function grade(percentage){
    if (percentage >= 90){
         return 'A++';
    }
     if (percentage >= 80){
       return 'A+';
    }
     if (percentage >= 70){
       return 'A';
    }
      if (percentage >= 60){
       return 'B';
    }
      if (percentage >= 50){
       return 'C';
    }
      if (percentage >= 35){
       return 'D';
    }
      if (percentage < 35){
      return  'F';
    }
}

function percentage(i) {
    return ((sum(i) / 500) * 100).toFixed(2);
}

function result(i){
    if (i.eng<35 || i.mat<35 || i.sci<35 || i.cmp<35 || i.guj<35){
    return 'Fail';
    }
    else {
        return 'Pass';
    }
}

function update(index){
    editid=index
 let edit=marksheet[index]
    document.getElementById('s-name').value =edit.name
    document.getElementById('eng').value =edit.eng
    document.getElementById('mat').value =edit.mat
    document.getElementById('sci').value =edit.sci
    document.getElementById('cmp').value =edit.cmp
    document.getElementById('guj').value =edit.guj

}

function dlt(index){
    marksheet.splice(index,1)
    dataView(marksheet)
}


function fltr(){

let field= document.getElementById('search').value
console.log(field)
filter = marksheet.map((i,index)=>{
     return {
        ...i,
        position:marksheet.indexOf(i)
     }
}).filter(i =>
    i.name.toLowerCase().includes(field.toLowerCase()) ||
    grade(percentage(i)).toLowerCase().includes(field.toLowerCase()) ||
    result(i).toLowerCase().includes(field.toLowerCase())
)
dataView(filter)
document.getElementById('search').value=''
}


dataView(marksheet)



    function demo() {

    let randomIndex = Math.floor(Math.random() * demodata.length);

    let student = demodata[randomIndex];

    document.getElementById('s-name').value = student.name;
    document.getElementById('eng').value = student.eng;
    document.getElementById('mat').value = student.mat;
    document.getElementById('sci').value = student.sci;
    document.getElementById('cmp').value = student.cmp;
    document.getElementById('guj').value = student.guj;

}
