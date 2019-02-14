import React from 'react';


const team = (props) => {

    return (
        <div>
            <h1>{props.title}</h1>
            {props.teamName.map(member =>
                <h4>{member}</h4>)}
        </div>

    );

}

export default team;