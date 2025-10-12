// title.innerText := shows the content which is visible in teh document



// title.textContent := shows all the content which is hidden dur to any reason example: display none to a specific PAARAGRAPH


// title.innerHTML := shows any scripts or html values inside the document/heading
 
























const parent = document.querySelector('.parent')
    // console.log(parent);
    // console.log(parent.children);
    // console.log(parent.children[1].innerHTML);

    // for (let i = 0; i < parent.children.length; i++) {
    //      console.log(parent.children[i].innerHTML);
        
    // }
    parent.children[1].style.color = "orange"
    // console.log(parent.firstElementChild);
    // console.log(parent.lastElementChild);

    const dayOne = document.querySelector('.day')
    // console.log(dayOne);
    // console.log(dayOne.parentElement);
    // console.log(dayOne.nextElementSibling);

    console.log("NODES: ", parent.childNodes);