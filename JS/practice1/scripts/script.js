function flex_direction(){
    var element = document.getElementById("container");

    switch (element.className){
        case "main_panel":
            element.className = "direction_row_rev";
            break;
        case "direction_row_rev":
            element.className = "direction_col";
            break;
        case "direction_col":
            element.className = "direction_col_rev";
            break;
        case "direction_col_rev":
            element.className = "main_panel";
            break;
        default:
            element.className = "main_panel";
    }
}

function justify_content(){
    var element = document.getElementById("container");

    switch (element.className){
        case "main_panel":
            element.className = "justify_fs";
            break;
        case "justify_fs":
            element.className = "justify_es";
            break;
        case "justify_es":
            element.className = "justify_c";
            break;
        case "justify_c":
            element.className = "justify_sb";
            break;
        case "justify_sb":
            element.className = "justify_sa";
            break;
        case "justify_sa":
            element.className = "justify_se";
            break;
        case "justify_se":
            element.className = "justify_s";
            break;
        case "justify_s":
            element.className = "justify_e";
            break;
        case "justify_e":
            element.className = "justify_l";
            break;
        case "justify_l":
            element.className = "justify_r";
            break;
        case "justify_r":
            element.className = "main_panel";
            break;
        default:
            element.className = "main_panel";
    }
}

function align_items(){
    var element = document.getElementById("container");

    switch (element.className){
        case "main_panel":
            element.className = "align_items_s";
            break;
        case "align_items_s":
            element.className = "align_items_c";
            break;
        case "align_items_c":
            element.className = "align_items_b";
            break;
        case "align_items_b":
            element.className = "main_panel";
            break;
        default:
            element.className = "main_panel";
    }
}

function order(){
    var element = document.getElementById("item1");

    switch (element.className){
        case "items":
            element.className = "order";
            break;
        default:
            element.className = "items";
    }
}

function flex_grow(){
    var element = document.getElementById("item2");

    switch (element.className){
        case "items":
            element.className = "flex_grow";
            break;
        default:
            element.className = "items";
    }
}

function align_self(){
    var element = document.getElementById("item3");

    switch (element.className){
        case "items":
            element.className = "align_self";
            break;
        default:
            element.className = "items";
    }
}
