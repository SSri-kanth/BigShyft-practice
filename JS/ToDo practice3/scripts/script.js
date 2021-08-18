function task(Name, Description, Group){
    this.Name = Name;
    this.Description = Description;
    this.Group = Group;
}

var group_list_el = document.getElementById("group_list");
var group_name_el = document.getElementById("add_group_name");
var add_group_el = document.getElementById("add_group");
var select_el = document.getElementById("group");
//var select_group_remove_el = document.getElementById("group_list_remove");
var task_display_el = document.getElementById("show");

var tasks = [];
var groups = ["Hgih Priority", "Normal", "Others"];


function update_groups(){
    for (let i = 0; i < groups.length; i++){
        let a = document.createElement("a");
        let group = document.createTextNode(groups[i]);
        a.appendChild(group);
        a.onclick = function(){ display_group(groups[i]);}
        group_list_el.appendChild(a);
    }
}
update_groups()

function update_dropdown(){
    for (let i = 0; i < groups.length; i++){
        let dropdown = document.createElement("option");
        dropdown.textContent = groups[i];
        dropdown.value = groups[i];
        select_el.appendChild(dropdown);
        //select_group_remove_el.appendChild(dropdown);        
    }
}
update_dropdown()


function add_group(){
    groups.push(group_name_el.value);
    add_group_el.reset();

    group_list_el.innerHTML="";
    update_groups();
    
    select_el.innerHTML="";
    //select_group_remove_el="";
    update_dropdown();
}

/*
function remove_group(){
    let select_group = select_group_remove_el;
    let group_name = select_group.value;
    let idx = groups.indexOf(group_name);
    groups.splice(idx, 1);

    group_list_el.innerHTML="";
    update_groups();
    
    select_el.innerHTML="";
    select_group_remove_el="";
    update_dropdown();

    console.log(groups);
}
*/

function see_all(){
    task_display_el.innerHTML="";
    for (let i = 0; i < tasks.length; i++){
        let task = tasks[i];
        let todo = document.createElement("p");
        for (let x in task){
            let todo_text = document.createTextNode(" " + x + ": " + task[x]);
            todo.appendChild(todo_text);
        }
        let remove_task_btn = document.createElement("button");
        remove_task_btn.innerHTML="Delete task!";
        remove_task_btn.onclick = function(){ delete_task(task);}
        remove_task_btn.className="buttons";
        todo.appendChild(remove_task_btn);
        task_display_el.appendChild(todo);
    }
}

function add_task(){
    let name = document.getElementById("todo_name").value;
    let description = document.getElementById("todo_description").value;
    let select_list = document.getElementById("group");
    let group_selected = select_list.value;

    let task_object = new task(name, description, group_selected);
    tasks.push(task_object);
    //see_all();

    document.getElementById("task_form").reset();
}

function delete_task(task){
    var flag = confirm("Are you sure you want to delete?");
    if (flag){
        tasks = tasks.filter(task_temp => task_temp != task);
    }
    see_all();
}

function display_group(group_selected){
    var text = "";

    for (var i = 0; i < tasks.length; i++){
        var task = tasks[i];
        if (task.Group == group_selected){
            for (var x in task){
                text += ( x + ": " + task[x] + "<br><br>");
            }
            text += "<br/>";
        }
    }
    task_display_el.innerHTML = text;
}

