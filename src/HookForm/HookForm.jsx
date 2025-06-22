
import useInputState from "../Hooks/useInputState";


function HookForm(props) {
    // const [name,handleNameChange] = useInputState('Rojoni')
    const emailState = useInputState('rojoni@kanto.com')
    const handleSubmit = e=>{
        console.log('form data',emailState.value)
        e.preventDefault()
    }
    return (
        <div>
            
             <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name"/> */}
                <br />
                <input {...emailState} type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="submit" />
               
            </form>
        </div>
    );
}

export default HookForm;