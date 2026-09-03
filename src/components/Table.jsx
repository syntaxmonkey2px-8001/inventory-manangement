import inventory from "@/data/mockData"
import '@/data/filterOptions.js'
import filterOptions from '@/data/filterOptions.js'

function Filter() {
    return (
        <>
            <label htmlFor="type"></label>
            <select name="" id="">
                {filterOptions.assetTypes.map((type) =>
                    <option value={type} key={type}>{type}</option>
                )}

            </select>
            <label htmlFor="status"></label>
            <select name="" id="">
                {filterOptions.statuses.map((status) =>
                    <option value={status} key={status}>{status}</option>
                )}
            </select>
            <label htmlFor="condition"></label>
            <select name="" id="">
                {filterOptions.conditions.map((condition)=>
                <option value={condition}>{condition}</option>
                )}
            </select>
            <label htmlFor="assignee"></label>
            <select name="" id="">
                {filterOptions.assignees.map((assignee)=>
                <option value={assignee}>{assignee}</option>
                )}
            </select>
        </>
    )
}
export default function Table() {

    const tableHeader = [
        'asset id', 'name', 'model', 'serial number', 'type', 'status', 'condition', 'assigned to', 'purchase date', 'location'
    ]

    return (
        <div className="table-asset">
            <div className="metrics">here shows the metrics</div>
            <Filter
                assetTypes={filterOptions.assetTypes} statuses={filterOptions.statuses}
                conditions={filterOptions.conditions}
                assignees={filterOptions.assignees}
            />
            <table>
                <thead>
                    {tableHeader.map((header) =>
                        <th key={header}>{header}</th>
                    )}
                </thead>
                {inventory.map((asset) =>
                    <tbody key={asset.id}>
                        <tr>
                            <td>{asset.id}</td>
                            <td>{asset.name}</td>
                            <td>{asset.model}</td>
                            <td>{asset.serialNumber}</td>
                            <td>{asset.type}</td>
                            <td>{asset.status}</td>
                            <td>{asset.condition}</td>

                            <td>{asset.assignedTo}</td>
                            <td>{asset.purchaseDate}</td>
                            <td>{asset.location}</td>
                        </tr>
                    </tbody>
                )}

                <tbody></tbody>
            </table>

        </div>

    )
}