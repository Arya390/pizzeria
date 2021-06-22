menu_list_array = "Margarita pizza", "Veg Panner tikka pizza", "Veg vegetable mania pizza", "Cheezy pizza";
function getmenu()
{
    var htmldata;
    htmldata = "<ol class='menulist'>"
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        htmldata = htmldata + '<li>' + menu_list_array[i]+ '</li>'
    }
    htmldata = htmldata+"</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
    menu_list_array.sort();
}
function add_item()
{
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata = "<section class='cards'>"
    for(var i=0;i<menu_list_array.length;i++){

        htmldata=htmldata+'<div class="card">' + '<m=img src="images/pizzaImag.png"/>' + menu_list_array[i] + '</div>'
    }
    htmldata=htmldata+"</section"
    document.getElemetnById("display_addmenu").innerHTML = htmldata;
}