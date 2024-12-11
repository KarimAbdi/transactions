import React from "react";

const TransactionTable = ({Transactions}) => {
    console.log(Transactions[0].Description);

    return (
        <table>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Date</th>
                </tr>
            </thead>
           <tbody>
          {
            Transactions.map((tra) => (
                <tr>
                    <td>{tra.Description}</td>
                    <td>{tra.Amount}</td>
                    <td>{tra.Date}</td>


           </tr>
            ))
          }
           </tbody>
        </table>
    );
};
 export default TransactionTable;