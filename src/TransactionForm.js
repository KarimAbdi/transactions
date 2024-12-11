import React, { useState } from "react";
const TransactionForm = ({AddTransaction}) => {
    const [Description, setDescription] = useState("");
    const [Amount,setAmount] = useState ("");
    const [Date, setDate] = useState ("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!Description || !Amount || !Date) return;
        AddTransaction({Description,Amount,Date});
        setDescription("");
        setAmount("");
        setDate("");
    }       

    return (
     <form onSubmit={handleSubmit}>
        <input type="text"placeholder="Description"value={Description} onChange={(e) => setDescription(e.target.value)}/>
        <input type="number"placeholder="Amount"value={Amount}onChange={(e) => setAmount(e.target.value)}/>
        <input type="date" value={Date} onChange={(e) => setDate(e.target.value)}/>
        <button type="Submit" >Add Transaction</button>
     </form>
    );


};
export default TransactionForm;