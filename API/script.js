fetch('https://reqres.in/api/users', {
   method: 'POST',
   headers: { 
    'Content-Type': 'application/json'
   },
   body: JSON.stringify({
       name: 'Péricles',
   }),
})
.then((res) => res.json())
.then((data) => console.log(data))