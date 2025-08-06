const notescontainer = document.querySelector('.notes-container');   // select the single notes-container div
const notesbtn = document.querySelector('.btn');                     // select the single button with class 'btn'
let notes = document.querySelectorAll('.input-box');                //queryselectorall for selecting all the nodes


notesbtn.addEventListener('click', ()=>{
    let para = document.createElement('p'); // creating p and img tag
    let img = document.createElement('img')
    para.className = "input-box";           // setting class name of p as input-box
    img.className = "delete-icon";
    para.setAttribute('contenteditable','true');
    img.src = "images/delete.png";
    // Add a zero-width space to ensure cursor starts before the image
    para.innerHTML = "&#8203;"; // optional but helps with cursor
    para.appendChild(img);
    notescontainer.appendChild(para); //display in notes container
    updatedata();
});

notescontainer.addEventListener('click',function(e){
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updatedata(); // hoisting
    }
    else if (e.target.tagName === 'p'){
        notes = document.querySelectorAll(".input-box");
        // for all the notes using for each 
        notes.forEach(nt =>{    //when the key is up it will save the data in notes
            nt.onkeyup = function(){
                updatedata();
            }
        })

    }
})

    document.addEventListener("keydown", event =>{   //keydown
     if(event.key === "Enter"){                   // key
        document.execCommand("insertLinebreak"); // this will create insertlinebreak and prevent enterkey deafult feature by contenteditable
         event.preventDefault();
           updatedata();
        }

 })


//storage function in local system

function updatedata(){
    localStorage.setItem("savednotes", notescontainer.innerHTML);
}

function shownotes(){
    notescontainer.innerHTML = localStorage.getItem("savednotes"); //mydata stores data
}

shownotes();