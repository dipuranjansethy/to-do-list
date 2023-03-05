window.addEventListener('load',()=>{

    const form=document.querySelector("#task-id")
    const input=document.querySelector("#new-input-task");
    console.log(input)
    
    
    const task_list=document.querySelector('.tasks');
    console.log(task_list)
    form.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    
    
    const work=input.value.trim();
    if (work=="") {
        alert("pls enter something")
        return;
    }
    console.log(work)
    
    input.value="";
    

    const task_el=document.createElement('div');
    task_el.classList.add('task');
    const content_el=document.createElement('div');
    content_el.classList.add('content');
    const input_el=document.createElement('input');
    input_el.classList.add("text");
    input_el.type="text";
    input_el.value=work;
    console.log(input_el.value)
    
    // input_el.setAttribute('readonly','readonly');
    content_el.appendChild(input_el);
    task_el.appendChild(content_el);


    const action_el=document.createElement('div');
    action_el.classList.add('actions');
    const edit_el=document.createElement('button');
    edit_el.classList.add('edit');
    edit_el.innerText='edit';
    action_el.appendChild(edit_el);
    

    const delete_el=document.createElement('button');
    delete_el.classList.add('delete');
    delete_el.innerText='delete';
    action_el.appendChild(delete_el);
    
    task_el.appendChild(action_el);
    task_list.appendChild(task_el);

    edit_el.addEventListener('click',()=>{

        if(edit_el.innerText=='EDIT'){
            edit_el.innerText="SAVE"
            input_el.removeAttribute('readonly')
            input_el.focus()
            input_el.style.color="var(--pink)";

        }
        else{
            edit_el.innerText='EDIT'
            input_el.setAttribute('readonly','readonly');
            input_el.style.color="var(--light)";
        }
    })
    delete_el.addEventListener('click',(e) => {
        task_list.removeChild(task_el)

    })

    


});

})
