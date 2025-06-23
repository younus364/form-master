
import './App.css'
import SimpleForm from './compnents/SimpleFrom/SimpleForm'
import StatefulForm from './compnents/StatefulForm/StatefulForm'
import HookForm from './HookForm/HookForm'
import RefForm from './RefForm/RefForm'
import ReuseableForm from './ReuseableForm/ReuseableForm'

function App() {
 
  const handleSignUpSubmit = data=>{
  
    console.log("sign Up",data)
  }
  const handleUpdate = data=>{
    
    console.log("update Form",data)
  }

  return (
    <>
     
      <h1>Vite + React</h1>
     {/* <SimpleForm></SimpleForm> */}
     {/* <StatefulForm></StatefulForm> */}
     {/* <RefForm></RefForm> */}
     {/* <HookForm></HookForm> */}
     <ReuseableForm forTittle={"Sign up"} handleSubmit={handleSignUpSubmit}>
      <div>
        <h2>Sign Up</h2>
        <p>please sign up right now</p>
      </div>
     </ReuseableForm>
     <ReuseableForm forTittle={"Update form"} handleSubmit={handleUpdate} submitButton='click'>
      <div>
        <h2>Update form</h2>
        <p>please Update form right now</p>
      </div>
     </ReuseableForm>
     
    </>
  )
}

export default App
