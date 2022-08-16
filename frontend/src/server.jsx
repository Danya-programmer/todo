import React, {useEffect} from "react";
import axios from "axios";

export const Server =() => {
    const [todo, setTodo] = React.useState([])
    console.log(todo)

    useEffect(() =>  {

       axios  ( {
          method: "GET",
          url:"http://127.0.0.1:8000/api",
        }).then((response)=>{
            setTodo(response.data)

        })
        } ,[])


    const ControllerServer = {todo}

    return {ControllerServer}

}