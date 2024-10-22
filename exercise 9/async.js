// no 3
// a. 
async function ambilDataUser() {
    try {
        // b. 
        const response = await fetch('https://reqres.in/api/users?page=1&per_page=6');
        
        // c.
        const users = await response.json();
        
        // d. 
        users.data.forEach(user => {
            console.log(user.email); 
        });
    } catch (error) {
        // e. 
        console.log("Error fetching data:", error);
    }
}

// f.
ambilDataUser();

