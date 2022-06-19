// Add your code here
function submitData(userName, userEmail){
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
      },
      body:JSON.stringify({
          name: userName,
          email: userEmail
      }),
    })
    .then(res => res.json())
    .then(data => {
        let body = document.getElementsByTagName('body')
        document.body.innerHTML = data.id
        console.log(data)
    })
    .catch(data => document.body.innerHTML = data)
}
submitData("Steve", "steve@steve.com")