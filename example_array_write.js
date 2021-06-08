
renderMyData = [];




// Sets a local storage item with the name of myCat and a value of Tom
localStorage.setItem('myCat', 'Tom');



///render_on_page_using_javascript_example
function renderMyData(){
    var tag_id = document.getElementById('myRenderDiv');
    tag_id.innerHTML = localStorage.getItem(cat);
    console.log(cat);
}

//window.onload = RenderMyData(cat);

///THIS IS SOME EXAMPLE CODE I PULLED FROM 
/// https://stackoverflow.com/questions/46141450/create-li-from-loop-through-array-and-display-to-html-as-a-list/46141490
// var myArray = ["slide 1", "slide 2", "slide 3", "slide 4", "slide 5"];

// myArray.forEach(function(item) {
//   var li = document.createElement("li");
//   var text = document.createTextNode(item);
//   li.appendChild(text);
//   document.getElementById("myUl").appendChild(li);
// }
// );