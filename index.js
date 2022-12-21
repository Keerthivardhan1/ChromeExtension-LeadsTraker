      
  const inputbtn=document.getElementById("save-btn");
  const inputele =document.getElementById("input");
  const ule=document.getElementById("ul-el");
  const delbtn=document.getElementById("delete-btn");
  const savetabbtn=document.getElementById("save-tab");
  let leadsfromlocalstorage= JSON.parse(localStorage.getItem("myleads"))

  
  let myleads =[]
  if(leadsfromlocalstorage){
  myleads=leadsfromlocalstorage;
  renderleads(myleads);
  }

    
    savetabbtn.addEventListener("click",function(){

      // grabing the url of current tab  using chrome.tab

      chrome.tabs.query({active: true,currentWindow:true},function(tabs){

        console.log(tabs)

      myleads.push(tabs[0].url)
      localStorage.setItem("myleads",JSON.stringify(myleads))
      renderleads(myleads)
      })

      })





    delbtn.addEventListener("dblclick",function(){
        localStorage.clear();
      myleads=[];
      renderleads(myleads);
    })

    inputbtn.addEventListener("click",function(){
      myleads.push(inputele.value)
      inputele.value="";        // clearing the input box after entering the input

      localStorage.setItem("myleads",JSON.stringify(myleads))




      renderleads(myleads);


        })
//---------+++++++  rendering the leads onthe screan -----------

function renderleads(leads){

var button=null;

  for (let  j = 0; j<leads.length;  j++){
        let li = document.createElement('li')
        li.classList.add("row")
        let a= document.createElement('a')
        a.href=leads[j];
        a.innerText = leads[j];
        li.appendChild(a);
        button= document.createElement('button')
        button.classList.add("deletelink")
        // button.className="deletelink";
        let i= document.createElement('img')
        i.src="/img/deleteimg.png"
        button.appendChild(i);
        li.appendChild(button);
        ule.appendChild(li);
      }
}
  
 