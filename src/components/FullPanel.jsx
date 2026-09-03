import TopBar from "@/components/TopBar";
import Table from "@/components/Table";
import '@/styles/app.scss';

export default function FullPanel() {
    return (
        <div className="full-panel">
            <TopBar />
            <Table />
        </div>
    )
}