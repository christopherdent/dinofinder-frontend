import React from 'react'



const Secrets = ({ secrets }) => {
    const secretsJSX = secrets.map(s => <p key={s.id}>{s.content}</p>)
    return (
      <div className="Secrets">
        {secretsJSX}
      </div>
    )
}






export default Secrets
