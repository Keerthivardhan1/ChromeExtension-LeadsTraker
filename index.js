 
        const inputbtn=document.getElementById("save-btn");
        const inputele =document.getElementById("input");
        const ule=document.getElementById("ul-el");
        const delbtn=document.getElementById("delete-btn");
        const savetabbtn=document.getElementById("save-tab");
        let leadsfromlocalstorage= JSON.parse(localStorage.getItem("myleads"))

        
        let myleads =[]

        // const tabs = [
        //   {url:"https://leetcode.com/keerthivardhan1/"}
        // ]


      //  console.log("priviouslly stored leads are " + leadsfromlocalstorage);

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
                  console.log("delete btn is clicked");
                  localStorage.clear();
                  myleads=[];
                  renderleads(myleads);
          })

          inputbtn.addEventListener("click",function(){
                  myleads.push(inputele.value)
                  inputele.value="";        // clearing the input box after entering the input

                 localStorage.setItem("myleads",JSON.stringify(myleads))




                  renderleads(myleads);

                //  console.log(localStorage.getItem("myleads"));

              })

 console.log(localStorage.getItem("myleads"))


 //---------+++++++  rendering the leads onthe screan -----------

   function renderleads(leads){

     let listitems="";

        for (let  i = 0; i<leads.length;  i++){

        // hear     23  and 26 are the same 

        //      listitems += "<li><a target='_blank' href=' "  +myleads[i]  +"'>" +myleads[i] +"<a/></li>" 

                   //**************adding all the leads to the listitem varible and later setting it to ther inner text odf the ul tab inthe html document  */

                 listitems += `<li>
                <a target='_blank' href='${leads[i]}'>
                     ${leads[i]} 
                <a/>
            </li>`

        }

        ule.innerHTML = listitems;


 }
  
// // template string

// const recipient = "keerthi"

// const email= "hay" + recipient + " ! how is it gooing "

// const email1= `hay  ${recipient} ! how is it gooing`    // -----> template string 


// console.log(email1)



// ------   STRING <--> ARRAY       ------


//    let a=`keerthi vardhan 

//  hear     a  is      string 

// a=JSON.parse(a);   --------> converting string in to array 

// a.push("www.google.com");

// a=JSON.stringify(a);  -----> converting aray in to string 

//   ----------------------------------


 // "" , 0 , null , undefined , NaN  ----> false