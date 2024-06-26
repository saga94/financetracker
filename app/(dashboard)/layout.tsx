
import { Header } from "@/components/ui/header";

type Props={
    children: React.ReactNode;
};

const DashboardLayout =({children}:Props)=>{
    return (
        <>
        <Header/>
        <main>
            {children}
        </main>
        </>
    );
};
export default DashboardLayout;