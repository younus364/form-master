

function SimpleForm() {
    const handleSubmit = e =>{
        e.preventDefault()
        console.log(e.target.name.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name"/>
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="submit" />
               
            </form>
        </div>
    );
}

export default SimpleForm;