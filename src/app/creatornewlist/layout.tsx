
import Navbar from '@/src/components/navbar/Navbar';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
// import { auth } from "@/app/api/middleware/auth";


export default Layout;

function Layout({ children }: { children: React.ReactNode }) {
    // if not logged in redirect to login page
    // if (!auth.isAuthenticated()) {
    //     const returnUrl = encodeURIComponent(headers().get('x-invoke-path') || '/');
    //     redirect(`/login?returnUrl=${returnUrl}`);
    // }

    return (
        <div className="app-container overflow-y-scroll h-[100vh]">
            <Navbar/>
            <div className='flex'>  
            {children}

            </div>
        </div>
          

    );
}