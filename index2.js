const saveinputbtn=document.getElementById("save-btn");
const inputele =document.getElementById("input");
const ule=document.getElementById("ul-el");
const delallbtn=document.getElementById("delete-btn");
const savetabbtn=document.getElementById("save-tab");
let leadsfromlocalstorage= JSON.parse(localStorage.getItem("myleads"))

let myLeads = [];

if(leadsfromlocalstorage){
myLeads=leadsfromlocalstorage;
for(let i=0;i<myLeads.length;i++){
    showLead(myLeads[i])
}
}

saveinputbtn.addEventListener("click" , ()=>{
    console.log("save input button ");
    // saveinputbtn();
    const lead =  inputele.value;
    myLeads.push(inputele.value)
      inputele.value="";                           // clearing the input box after entering the input
      localStorage.setItem("myleads",JSON.stringify(myLeads))
      showLead(lead);
})

savetabbtn.addEventListener("click" , ()=>{

    console.log("save tab button is clicked");
    chrome.tabs.query({active: true,currentWindow:true},function(tabs){
      myLeads.push(tabs[0].url)
      localStorage.setItem("myleads",JSON.stringify(myLeads))
      showLead(tabs[0].url)
      })
    
})

delallbtn.addEventListener("click" , ()=>{
    console.log("del btn is clicked");
    deleteAllLeads();
})

let deleteThisLead1= null;
function showLead(LeadName){
    // const befourFirst =  ule.firstChild()
    let li = document.createElement('li')
    li.classList.add("row")
    let a= document.createElement('a')
    a.href=LeadName;
    a.innerText = LeadName;
    li.appendChild(a);
    button= document.createElement('button')
    button.classList.add("deleteThisLead")
    // console.log(button);
    let i= document.createElement('img')
    i.src="/img/deleteimg.png"
    button.appendChild(i);
    li.appendChild(button);
    //--
    ule.appendChild(li);
  let  deleteThisLead1 =  document.querySelector(".deleteThisLead");

    // while (ule.hasChildNodes()){
    //     console.log(ule.firstChild); 
    // }

    // console.log( "----****** " , ule)

    deleteThisLead1.addEventListener("click" , ()=>{
        console.log(">>>>>>------",deleteThisLead1);
        console.log("-- parent ",button.parentNode);
        ule.removeChild(button.parentNode)
        deleteLead(button.parentNode)
        
    })
    

}

// if(deleteThisLead1 != null ){
   
       
// }



// function deleteLead(parent){
//     ule.removeChild(parent);
// }

function deleteAllLeads(){
    while (ule.hasChildNodes()){
    ule.firstChild.remove()
    }
    myLeads = []
    localStorage.clear();
}
