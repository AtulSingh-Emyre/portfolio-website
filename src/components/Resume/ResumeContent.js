import React from "react";

function ResumeContent(props) {
  return (
    <div className="resume-item">
      <h3 className={props.title ? "resume-title" : "resume-no-title"} style={{textAlign:'left'}}>
        {props.title}
      </h3>
      <p>
        <em>{props.date}</em>
      </p>
      <ul>
        {props.content.map((value, index) => (
          <li key={index}> ‣ {value}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResumeContent;
