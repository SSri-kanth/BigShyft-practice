var modal_group = document.getElementById("add_group_modal");
var btn_group = document.getElementById("add_group");
btn_group.onclick = function(){
    modal_group.style.display = "block";
}

var span1 = document.getElementsByClassName("exit_modal1")[0];
span1.onclick = function(){
    modal_group.style.display = "none";
}

var modal_task = document.getElementById("add_task_modal");
var btn_task = document.getElementById("add_task");
btn_task.onclick = function(){
    modal_task.style.display = "block";
}

var span2 = document.getElementsByClassName("exit_modal2")[0];
span2.onclick = function(){
    modal_task.style.display = "none";
}


function add_group(){
    var ul = document.getElementById("group_list");
    var candidate = document.getElementById("add_group_name");
    var li = document.createElement("li");
    li.setAttribute('id',candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    ul.appendChild(li);
}

var tasks = [];

function task(Name, Description, Group){
    this.Name = Name;
    this.Description = Description;
    this.Group = Group;
}

function add_task(){
    var name = document.getElementById("todo_name").value;
    var description = document.getElementById("todo_description").value;
    var select_list = document.getElementById("group");
    var group_name = select_list.value;

    var task_object = new task(name, description, group_name);
    tasks.push(task_object);

}

function see_all(){
    var len = tasks.length;
    var text = "";

    for (var i = 0; i < len; i++){
        var task = tasks[i];
        
        for (var x in task){
            text += ( x + ": " + task[x] + "<br><br>");
        }
        var temp = task.Name;
        text += "<button type = \"button\" class=\"buttons\" onclick='delete_task(\"" + temp + "\")'>Delete</button>" + "<br><br><br>";
    }
    document.getElementById("show").innerHTML = text;
}

function delete_task(name){
    var flag = confirm("Are you sure you want to delete?");
    if (flag){
        tasks = tasks.filter(task_temp => task_temp.Name != name);
    }
    see_all();
}

function display_group(group_name){
    var len = tasks.length;
    var text = "";

    for (var i = 0; i < len; i++){
        var task = tasks[i];
        if (task.Group == group_name){
            for (var x in task){
                text += ( x + ": " + task[x] + "<br><br>");
            }
            text += "<br/>";
        }
    }
    document.getElementById("show").innerHTML = text;
}

