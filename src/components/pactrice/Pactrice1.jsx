/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */

import { useState } from "react";


const Pactrice1 = () => {
    const [trans, setTrans] = useState([]);
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const Addtrans = (tran)=>{
        setTrans([...trans, tran])
    }

    const calculate = ()=>{
        return trans.reduce((acc, tran)=> acc + tran.amount, 0)
    }
    const calcuIncome = () =>{
        return trans.filter((tran)=>tran.amount > 0).reduce((acc, tran)=> acc + tran.amount, 0)
    }
    const calcudiscome = () =>{
        return trans.filter((tran)=>tran.amount <0).reduce((acc, tran)=> acc + tran.amount, 0)
    }
    const handle = (e) =>{
        e.preventDefault();
        if(text === '' || amount === 0)return;
        Addtrans({id: Math.random(), text, amount: +amount})
        setText("")
        setAmount('')
    }
   


    return (
        <div className="m-12">
            <div className="text-center">
            <h1>your blance</h1>
            <p>{calculate()}</p>
            </div>
            <div className="flex justify-evenly">
               <div className="m-12">
               <h1>Total income</h1>
               <p>{calcuIncome()}</p>
               </div>

               <div>
               <h1>decarse</h1>
               <p>{calcudiscome()}</p>
               </div>
            </div>
            <div className="m-12">
            <ul>
                {
                    trans.map((tran)=>(
                        <li key={Math.random()} className={tran.amount > 0 ? "bg-green-100" : "bg-red-200"}>
                            {tran.text}
                            <span>{tran.amount}</span>
                        </li>
                    ))
                }
            </ul>
            </div>
            <div>
                <form onSubmit={handle} >
                    <input onChange={(e)=>setText(e.target.value)} type="text" value={text} placeholder="pleace add" className="p-2 m-2 border border-indigo-500" />
                    <input onChange={(e)=>setAmount(e.target.value)} type="number" value={amount} placeholder="enter your amount" className="p-2 m-2 border border-indigo-500" />
                    <button type="submit" className="btn bg-blue-500 text-white">Add Amount</button>
                </form>
            </div>
        </div>
    );
};

export default Pactrice1;