import React, { useState } from 'react';
import TransactionForm from './TransactionForm';
import TransactionTable from './TransactionTable';
import SearchBar from './SearchBar';

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [transactions, setTransactions] = useState(() => {
    
    const storedTransactions = JSON.parse(localStorage.getItem("Transaction"));
    return storedTransactions || [];  
  });

  
  const addTransaction = (Transaction) => {
    const updatedTransactions = [...transactions, Transaction];
    setTransactions(updatedTransactions);
    localStorage.setItem("Transaction", JSON.stringify(updatedTransactions));
  };

 
  const filteredTransactions = transactions.filter((Transaction) =>
    Transaction.Description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  

  return (
    <div>
      <h1>Bank</h1>
      <TransactionForm AddTransaction={addTransaction} />
      <TransactionTable Transactions={filteredTransactions} />
      <SearchBar setSearchQuery={setSearchQuery} />
    </div>
  );
};



export default App;
