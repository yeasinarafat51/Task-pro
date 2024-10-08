import { useState } from "react";
import { Link } from "react-router-dom";


const Pactrice = () => {
    const [fromdata, setfromdata] = useState({
        name:'',
        email:''
    })
    const [sub, setSub] = useState({
        name: '',
        email:''
    })

    const handle =(e) =>{
        // e.preventDefault() 
       const {name, value} = e.target
        
        setfromdata((pre)=>({
            ...pre,
            [name]:value
        }))

        
        

    }
    const subt =(e)=>{
        e.preventDefault();
        setSub(fromdata)
    }
    return (
        <div className="m-24 ">
            <form onSubmit={subt}>
                <input type="name" name="name" onChange={handle} value={fromdata.name} placeholder="name" className="broder shadow bg-gray-300 my-8"/> <br />
                <input type="email" name="email" onChange={handle} value={fromdata.email} placeholder="email" className="broder shadow bg-gray-300"/> <br />
                <button type="submit">Submit</button>
              
            </form>
            <h1>{sub.email}</h1>
            <Link to='https://youtu.be/PSeI26U7F4M?si=xBDbRznNv70Q8cOL' >link</Link>
        </div>
    );
};

export default Pactrice;
