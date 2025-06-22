import { useState } from "react";


function StatefulForm(props) {

    const [name ,setName] = useState(null);
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null)
    const [error,setError] = useState('')
    const handleSubmit = e =>{
        e.preventDefault()
        if(password.length <6){
            setError('Password must be 6 characters or longer')
        }else{
            setError('')
            console.log(name,email,password)
        }
        
    }

    const handleNameChange = e =>{
 
 setName(e.target.value)
    }
    const handleEmailChange = e=>{
        setEmail(e.target.value)
    }
    const handlePasswordChange = e=>{
        setPassword(e.target.value)
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleNameChange} name="name"/>
                <br />
                <input onChange={handleEmailChange} type="email" name="email" id="" />
                <br />
                 <input onChange={handlePasswordChange} type="password" required name="passeword" id="" />
                 <br />
                <input type="submit" value="submit" />
               {
                error && <p>{error}</p>
               }
               </form>
        </div>
    );
}

export default StatefulForm;