// Add your code here


// Add your code here

/*code along practice

const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
  };
  
  // method: "POST" is missing from the object below
  const configurationObject = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };
  
  fetch("http://localhost:3000/dogs", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      console.log(object);
    })
    .catch(function (error) {
      alert("Bad things! Ragnarők!");
      console.log(error.message);
    });*/

    function submitData (name, email) {
        return fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json",
            },
            body: JSON.stringify({
                name,
                email,
            }),

        })
        .then((response)=>response.json())
        .then(function (storeusers){
            return document.body.innerHTML = storeusers["id"]
        })
        .catch(function (error){
            alert(error.message);
            console.log(error.message);
            document.body.innerHTML = error.message;
        })
    } 

   