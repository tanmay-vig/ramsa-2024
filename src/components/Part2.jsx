import React from 'react'

function Part2(props) {
    const style = {
        padding: "10px 40px"
    }
  return (
    <div style={style}>
        <h2 style={{color: "red"}}>{props.name}</h2>
        <div>{props.content1}</div>
        <br />
        <div>
        
          <a href="./AbstractTemplate.doc" target="_blank" rel="noopener noreferrer" download="Abstract_Template">
              <button className="btn btn-success">Abstract Template</button>
          </a>
        
          <br />
          <br />
          <a href={props.link} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-success">{props.title}</button>
          </a>
        
        </div>

        
        {/* <div><a href="./AbstractTemplate.doc" download="Abstract_Template">Abstract Template</a></div>
        <div><a href={props.link} target="_blank" rel="noopener noreferrer">{props.title}</a></div> */}
        <div><br />{props.content2}</div>
    </div>
  )
}

export default Part2