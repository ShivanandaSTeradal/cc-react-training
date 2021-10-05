import React from 'react';   
function List(){
    const names = ['Apple','Banana','Mango','Strawberry']
    return(
        <div>
            <h1>List of Fruits:</h1>
            {
                names.map(name => <h2>{name}</h2>)
            }
        </div>
    )
}
export default List;