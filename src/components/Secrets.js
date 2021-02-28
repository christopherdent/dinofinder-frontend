import React from 'react'



const Secrets = (props) => {
    const secretsJSX = props.secrets.map(s => <p>{s.content}</p>)
    return (
      <div className="Secrets">
        {secretsJSX}
      </div>
    )
}






export default Secrets
