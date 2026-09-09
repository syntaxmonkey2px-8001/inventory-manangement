import inventory from "@/data/mockData"
import '@/data/filterOptions.js'
import filterOptions from '@/data/filterOptions.js'
import { useState } from "react"


// const currentFilter = [
//     { id: 'types', property: 'type', options: filterOptions.assetTypes, selected: '' },
//     { id: 'status', property: 'status', options: filterOptions.statuses, selected: '' },
//     { id: 'condition', property: 'condition', options: filterOptions.conditions, selected: '' },
//     { id: 'assignee', property: 'assignedTo', options: filterOptions.assignees, selected: '' }
// ]



function Filter({ currentFilter, setCurrentFilter }) {

    //update filter data onclick
    function getChangedValue(event, id) {
        const changedValue = event.target.value;
        const updatedFilter = currentFilter.map((filter) =>
            id === filter.id ? { ...filter, selected: changedValue } : filter
        );
        setCurrentFilter(updatedFilter);

    }
    // filter it before render in the view

    return (
        <div className="filters-wrapper">
            {currentFilter.map((filter) =>
                <div className="filter-item">
                    <label htmlFor="filter-select">{filter.id}</label>
                    <select
                        key={filter.id}
                        name='filter-select'
                        id={filter.id}
                        value={filter.selected}
                        onChange={(event) => getChangedValue(event, filter.id)}>

                        <option value="">All</option>

                        {filter.options.map((option) =>

                            <option value={option}>{option}</option>


                        )}
                    </select>
                </div>
            )}

        </div>
    )
}


export default function Table() {

    const [currentFilter, setCurrentFilter] = useState([
        { id: 'types', property: 'type', options: filterOptions.assetTypes, selected: '' },
        { id: 'status', property: 'status', options: filterOptions.statuses, selected: '' },
        { id: 'condition', property: 'condition', options: filterOptions.conditions, selected: '' },
        { id: 'assignee', property: 'assignedTo', options: filterOptions.assignees, selected: '' }
    ]);

    const [inventoryOrder, setInventoryOrder] = useState(inventory);


    const tableHeader = [
        'asset id', 'name', 'model', 'serial number', 'type', 'status', 'condition', 'assigned to', 'purchase date', 'location'
    ]

    const filteredInventory = inventory.filter((asset) => {

        const checkFilters = currentFilter.map((filter) =>
            filter.selected === '' ||
            asset[filter.property] === filter.selected)

        return checkFilters.every((result) => result)
    })

    return (
        <div className="table-asset">
            <div className="metrics">here shows the metrics</div>
            <Filter
                assetTypes={filterOptions.assetTypes} statuses={filterOptions.statuses}
                conditions={filterOptions.conditions}
                assignees={filterOptions.assignees}
                currentFilter={currentFilter}
                setCurrentFilter={setCurrentFilter}
            />
            <table>
                <thead>
                    <tr>
                        {tableHeader.map((header) =>
                            <th key={header}>{header}</th>
                        )}
                    </tr>
                </thead>
                {filteredInventory.map((asset) =>
                    <tbody key={asset.id}>
                        <tr>
                            <td className="asset-id">{asset.id}</td>
                            <td className="td-1">{asset.name}</td>
                            <td className="td-2">{asset.model}</td>
                            <td>{asset.serialNumber}</td>
                            <td className="td-3">{asset.type}</td>
                            <td className="td-4">{asset.status}</td>
                            <td className="td-3"> {asset.condition}</td>

                            <td className={asset.assignedTo != null ? 'td-4' : 'td-4 null'}>{asset.assignedTo != null ? asset.assignedTo : 'unassigned'}</td>
                            <td>{asset.purchaseDate}</td>
                            <td className="td-5">{asset.location}</td>
                        </tr>
                    </tbody>
                )}

                <tbody></tbody>
            </table>

        </div>

    )
}