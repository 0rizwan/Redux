import React from 'react'
import { useGetUserAccountQuery } from '../api/adminSlice'

function Admin() {
    const { data, error, isLoading } = useGetUserAccountQuery();

    return (
        <div style={{ border: '1px solid black', padding: '20px' }}>
            <div>Admin Component</div>
            {
                data && data.map(account => <div key={account.id}>{account.id} : ${account.amount} </div>)
            }
        </div>
    )
}

export default Admin