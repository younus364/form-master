import { useEffect, useRef } from "react";


function RefForm(props) {

    const nameRef = useRef(null);
    const emailRef =useRef(null);
    const passewordRef = useRef(null);

    useEffect(()=>{
        nameRef.current.focus()
    },[])
    const handleSubmit = e=>{
        e.preventDefault();
        console.log(nameRef.current.value)
        console.log(emailRef.current.value);
        console.log(passewordRef.current.value)

    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name"/>
                <br />
                <input ref={emailRef} type="email" name="email" id="" />
                <br />
                <input ref={passewordRef} type="password" name="password" id="" />
                <br />
                <input type="submit" value="submit" />
               
            </form>
        </div>
    );
}

export default RefForm;