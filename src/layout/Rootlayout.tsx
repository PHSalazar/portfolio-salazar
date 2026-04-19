import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Rootlayout() {
    return (
        <div className='flex app-container bg-gray-200 min-h-screen p-2 dark:bg-gray-700 dark:text-gray-200'>

            <Navbar />

            <main className='flex-1 content pt-20 pl-5 text-gray-300'>
                <Outlet />
            </main>
        </div>
    )
}

export default Rootlayout