const mylist = document.getElementById('list');
const myBtn = document.getElementById('myBtn');

const getFunc = (() => {

  var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        console.log(myObj.quiz.sport)
        let dataText = '';
        for (let x in myObj.quiz) {
          dataText += "<li>" + myObj.quiz[x].q1.question + "</li> ";
        }

        mylist.innerHTML = dataText;

       }
    };
xmlhttp.open("GET", "10.json", true);
xmlhttp.send();

})

myBtn.addEventListener('click', getFunc);





