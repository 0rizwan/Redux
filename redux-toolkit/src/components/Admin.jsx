import React, { useState } from 'react'
import { useAddAccountMutation, useGetUserAccountQuery, useDeleteAccountMutation, useUpdateAccountMutation } from '../api/adminSlice'

function Admin() {
    const { data, error, isLoading } = useGetUserAccountQuery();
    const [addAccount, response] = useAddAccountMutation();
    const [deleteAccount] = useDeleteAccountMutation();
    const [updateAccount] = useUpdateAccountMutation();
    const randomNum = Math.floor(Math.random() * 100 + 10);

    return (
        <div style={{ border: '1px solid black', padding: '20px' }}>
            <div>Admin Component</div>
            {
                data && data.map(account => <div key={account.id}>
                    {account.id} : ${account.amount}
                    <button onClick={() => deleteAccount(account.id)} >Delete account</button>
                    <button onClick={() => updateAccount({ id: account.id, amount: randomNum })} >Update account</button>
                </div>)
            }
            <button onClick={() => addAccount({ id: data.length + 1, amount: randomNum })} >Add account+</button>
        </div>
    )
}

export default Admin