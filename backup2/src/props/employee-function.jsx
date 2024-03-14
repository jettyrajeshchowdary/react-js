let Employee=(props)=>{
    return <div>
      <h2>Employee functional component</h2>
      <pre>{JSON.stringify(props)}</pre>
      <h3>Employee Id:{props.user.uid}</h3>
      <h3>Employee Name:{props.user.uname}</h3>
      <h3>Employee Email{props.user.uemail}</h3>
      <h4>Location:{props.loc[1]}</h4>
    </div>
  }
  export default Employee