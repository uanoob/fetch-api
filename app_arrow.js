document.getElementById('button1').addEventListener('click', getText);

// Get local text file

function getText() {
  fetch('test.txt')
    .then(response => response.text())
    .then(data => (document.getElementById('output').innerHTML = data))
    .catch(error => console.log(error));
}

document.getElementById('button2').addEventListener('click', getJson);

// Get local json data

function getJson() {
  fetch('posts.json')
    .then(response => response.json())
    .then(data => {
      let output = '';
      data.forEach(post => (output += `<li>${post.title}</li>`));

      document.getElementById('output').innerHTML = output;
    })
    .catch(error => console.log(error));
}

document.getElementById('button3').addEventListener('click', getExternal);

// Get from external API

function getExternal() {
  fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => {
      let output = '';
      data.forEach(user => (output += `<li>${user.login}</li>`));

      document.getElementById('output').innerHTML = output;
    })
    .catch(error => console.log(error));
}
