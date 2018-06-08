// document.getElementById('button1').addEventListener('click', getText);

// Get local text file

// function getText() {
//   fetch('test.txt')
//     .then(function(response) {
//       return response.text();
//     })
//     .then(function(data) {
//       document.getElementById('output').innerHTML = data;
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
// }

document.getElementById('button2').addEventListener('click', getJson);

// Get local json data

function getJson() {
  fetch('posts.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let output = '';
      data.forEach(function(post) {
        output += `<li>${post.title}</li>`;
      });

      document.getElementById('output').innerHTML = output;
    });
}
