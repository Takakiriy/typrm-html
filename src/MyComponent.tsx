import React from 'react';

export default function  MyComponent() {

    function  onClick() {
        fetch('http://localhost:8080/VMWare.yaml')
            .then( (response) => {
                console.log(response)
                response.text().then((text)=>{
                    console.log(text);
                });
            });
    }

    return (
        <div>
            <button onClick={() => onClick()}>
                Click me
            </button>
        </div>
    );
}
