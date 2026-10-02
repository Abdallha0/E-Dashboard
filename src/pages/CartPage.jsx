import React from 'react'
import OverviewSec from '../components/overview-sec'
import DashboardNotice from '../components/DashboardNotice'
import { dashboardAlerts } from '../helpers/alerts'

function CartPage() {
    return (
        <main className='flex flex-col'>
            <div className='flex flex-col gap-2 p-4'>
                <OverviewSec title="Carts" subtitle="Cart overview" description="All active carts returned from the API are rendered here with their latest item details." />
                <DashboardNotice state={{description: "No carts returned from the API."}} />
            </div>
        </main>
    )
}

export default CartPage