// no 2
// a.
function ambilDataUser() {
    // b.
    fetch('https://reqres.in/api/users?page=1&per_page=6')
        // c.
        .then(response => {
            return response.json();
        })
        // d.
        .then(users => {
            users.data.forEach(user => {
                console.log(user.email); 
            });
        })
        .catch(error => {
            console.log("Error fetching data:", error);
        });
}

// e. 
ambilDataUser();
