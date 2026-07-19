    let marksheet =[]
    let editid=null

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
         
         
        dataView()
        
    }
    
}

function dataView(){

let print=''

            marksheet.map((i,index)=>{

                let total =sum(i)
                let percentage = ((total/500)*100).toFixed(2);
                let avg = (total/5)
                 let grd= grade(percentage)
                 let rsl= result(i)

                print += 
                 `<tr>
                    <td class="text-[#FFBE91] text-lg bg-white/10   text-center px-3 py-1 border-r-2 border-black">${i.name}</td>
                    <td class="text-[#FFBE91] text-lg bg-white/10   text-center px-3 py-1  border-r-2 border-black">${i.eng}</td>
                    <td class="text-[#FFBE91] text-lg bg-white/10   text-center px-3 py-1  border-r-2 border-black">${i.mat}</td>
                    <td class="text-[#FFBE91] text-lg bg-white/10   text-center px-3 py-1  border-r-2 border-black">${i.sci}</td>
                    <td class="text-[#FFBE91] text-lg bg-white/10   text-center px-3 py-1  border-r-2 border-black">${i.cmp}</td>
                    <td class="text-[#FFBE91] text-lg bg-white/10   text-center px-3 py-1  border-r-2 border-black">${i.guj}</td>
                    <td class="text-[#FFBE91] text-lg bg-white/10   text-center px-3 py-1  border-r-2 border-black">${sum(i)}</td>
                    <td class="text-[#FFBE91] text-lg bg-white/10   text-center px-3 py-1  border-r-2 border-black">${percentage}%</td>
                    <td class="text-[#FFBE91] text-lg bg-white/10   text-center px-3 py-1  border-r-2 border-black">${avg}</td>
                    <td class="text-[#FFBE91] text-lg bg-white/10   text-center px-3 py-1  border-r-2 border-black">${grade(percentage)}</td>
                    <td class="text-[#FFBE91] text-lg bg-white/10   text-center px-3 py-1  border-r-2 border-black">${result(i)}</td>
                    <td class="text-cyan-400 text-lg bg-white/10   text-center px-3 py-1  border-r-2 border-black"><button onclick=update(${index}) class="px-2  text-white bg-sky-800 rounded-md font-medium">Update</button></td>
                    <td class="text-red-500 text-lg bg-white/10   text-center px-3 py-1  border-r-2 border-black"><button onclick=dlt(${index}) class="px-2  text-white bg-red-500 rounded-md font-medium">Delete</button></td>
                   
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
    dataView()
}