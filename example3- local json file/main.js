const mylist = document.getElementById('list');
const myBtn = document.getElementById('myBtn');

const getFunc = (() => {

  var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        //console.log(myObj.glossary.GlossDiv.GlossList.GlossEntry)
        let dataText = '';
        for (let x in myObj.glossary.GlossDiv.GlossList.GlossEntry) {
          dataText += "<li>" + myObj.glossary.GlossDiv.GlossList.GlossEntry[x] + "</li> ";
        }

        mylist.innerHTML = dataText;

       }
    };
xmlhttp.open("GET", "1.json", true);
xmlhttp.send();

})

myBtn.addEventListener('click', getFunc);





