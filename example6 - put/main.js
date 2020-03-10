const myEmail = document.getElementById('myEmail');
const myPassword = document.getElementById('myPassword');
const mySubmit = document.getElementById('mySubmit');
const myButton = document.getElementById('myButton');


const postData = () => {
  axios.put('https://reqres.in/api/users/2',{
    name: "morpheus",
    job: "zion resident"
  })
  .then(response => {
    console.log(response);
  }).catch(error => {
      console.log('Error');
  });
}

mySubmit.addEventListener('click', postData);



