import { useState } from "react"

function List(){
    const [list, setList] = useState(['Jaffna','Colombo']);
    return(
        <>
            <h1>List</h1>
            <ul>{
                list.map(el => <li>{el}</li>)
                }</ul>
        </>
    )
}

export default List;