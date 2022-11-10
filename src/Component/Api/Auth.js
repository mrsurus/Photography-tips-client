export const setAuthToken =(user)=>{

    const currentUser = {
        email: user.email
     }
     console.log(currentUser);
     fetch('https://assignment-eleven-server-five.vercel.app/jwt',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
     })
     .then(res => res.json())
     .then(data => {
        console.log(data);
        localStorage.setItem('genious-token', data.token)
     })

}