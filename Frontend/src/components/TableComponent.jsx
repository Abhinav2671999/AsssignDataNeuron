import React from "react";

const TableComponent = ({ data, onEditButtonClick }) => {
    return (
        <div className="grow bg-darker contents" style={{ maxHeight: "255px", overflowY: "auto" }}>
            <table className="table-fixed w-full">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr className="text-center" key={index}>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>
                                <button onClick={() => { onEditButtonClick(item) }} className="px-6 py-2 mr-2 bg-neutral-700 text-white rounded">
                                    Edit
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableComponent;