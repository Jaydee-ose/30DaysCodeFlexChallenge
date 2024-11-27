let bodyAll = document.body;

let bucketList = document.getElementById("bucket-list");


let header = document.getElementById("header");

let indexIdx = 0;

let items = ["New phone", "Bone straight", "Birkins handbag", "Spa", "Vacation", "Picnic", "Mon$$$$$yyy"];

bodyAll.style.height="100vh";
bodyAll.style.display="flex";
bodyAll.style.alignItems="center";
bodyAll.style.justifyContent="center";

header.innerHTML = "December Bucket List";
    
bucketList.style.display="flex";
bucketList.style.flexDirection="column";
bucketList.style.alignItems="center";
bucketList.style.justifyContent="center";
bucketList.style.backgroundColor="black";
bucketList.style.color="white";
bucketList.style.padding="1.5rem";

bucketList.style.borderRadius="2rem";

let nextBtn =document.createElement("button");
nextBtn.innerHTML = "View";
nextBtn.style.borderRadius="8px"

nextBtn.addEventListener("mouseover", function(){
    nextBtn.style.backgroundColor="lightblue";
})

nextBtn.addEventListener("mouseout", function(){
    nextBtn.style.backgroundColor="white";
})

bucketList.appendChild(nextBtn);


nextBtn.addEventListener("click", function (){
    nextBtn.innerHTML = "Next";

    
        
    for (let i = indexIdx; i< items.length; i++){
        
        let itemHolder = document.createElement("div");
        itemHolder.style.display="flex";
        itemHolder.style.flexDirection="row";
        itemHolder.style.alignItems="center";
        itemHolder.style.justifyContent="space-between";
        itemHolder.style.gap="7rem";

        let checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.addEventListener("mouseenter", function(){
            checkBox.style.cursor = "pointer";            
        })


        let item = document.createElement("p");
        item.innerText = items[i];
        

        let time= new Date().toLocaleString();
        let timestamp = document.createElement("p");
        timestamp.innerHTML = `<small><p> ${time}</p></small>`;
        timestamp.style.fontSize = ".8rem";
        timestamp.style.color = "gold";


        let deleteButton = document.createElement("button");
        deleteButton.innerText = "x";
        deleteButton.style.backgroundColor="black";
        deleteButton.style.color="white";
        deleteButton.style.borderColor="transparent";
        deleteButton.style.fontSize="1rem";  

        
        deleteButton.addEventListener("mouseenter", function(){
            deleteButton.style.color="red";
            }
        )

        
        deleteButton.addEventListener("mouseleave", function(){
            deleteButton.style.color="white";
            }
        )



        deleteButton.addEventListener("click", function(){
            deleteButton.style.color="red";
            let confirmDelete = confirm("Delete item?");
            if (confirmDelete){
                bucketList.removeChild(itemHolder);
            }

        })
        
    
        let itemHolderLi = [checkBox, item, timestamp, deleteButton];

        for (let i = 0; i<itemHolderLi.length; i++){
            itemHolder.append(itemHolderLi[i]);    
            bucketList.appendChild(itemHolder);
        }
        indexIdx++;

        break;
    }
})