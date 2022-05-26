import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";


function Home() {
    const [contactList, setContactList] = useState();
    const [isModal, setIsModal] = useState(false);
    const [rowId, setRowId] = useState();

    let history = useHistory();

    useEffect(() => {

        let allEntries = JSON.parse(localStorage.getItem("allEntries"));
        function SortArray(x, y) {
            if (x.name < y.name) { return -1; }
            if (x.name > y.name) { return 1; }
            return 0;
        }
        const sortedArray = allEntries.sort(SortArray);
        setContactList(sortedArray);
    }, []);

    function editHandler(state, index) {
        history.push({
            pathname: '/edit',
            state,
            index,
            contactList
        });
    }

    function openModal(index) {
        setRowId(index);
        setIsModal(true)
    }

    function deleteRow(index) {
        if (contactList == null) contactList = [];
        let result = contactList.slice(index, 1);
        localStorage.setItem("entry", JSON.stringify(result));
        contactList.pop(result);
        localStorage.setItem("allEntries", JSON.stringify(contactList));
        window.location.reload();
    }

    return (
        <React.Fragment>
            <div className="header">
                <p>Home</p>
                {contactList && contactList.length > 0 && <button className="btn btn-light" onClick={() => history.push("/create")}><i className="far fa-plus"></i>Add New Details</button>}
            </div>
            <div className="content-body">
                {contactList && contactList.length > 0 ?
                    <div className="table-content">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th width="25%">Name</th>
                                    <th width="20%">Phone</th>
                                    <th width="20%">Type</th>
                                    <th width="20%">whastapp</th>
                                    <th width="15%">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contactList && contactList.map((data, index) =>
                                    <tr key={index} id={`edit` + index}>
                                        <td>{data.name}</td>
                                        <td>{data.phone}</td>
                                        <td>{data.type}</td>
                                        <td>{data.whatsapp == true ? "Enable" : "Disable"}</td>
                                        <td>
                                            <div className="button-group">
                                                <button className="btn btn-outline-primary" onClick={() => editHandler(data, index)}><i className="far fa-pen"></i></button>
                                                <button className="btn btn-outline-danger" onClick={() => openModal(index)}><i className="far fa-trash-alt"></i></button>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    :
                    <div className="add-button-box">
                        <span><i className="fas fa-list"></i></span>
                        <p>No contact list Available, click Add button to create</p>
                        <button className="btn btn-light" onClick={() => history.push("/create")}><i className="far fa-plus"></i>Add New Details</button>
                    </div>
                }

                {isModal &&
                    <div className="modal animate__animated animate__zoomIn d-block">
                        <div className="modal-dialog modal-md modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <div className="delete-icon">
                                        <i className="far fa-trash-alt"></i>
                                    </div>
                                    <h3 className="text-danger fw-normal">Are you sure you ?</h3>
                                    <p className="text-secondary fw-normal">Do you really want to delete these records ? this process cannot be undone</p>
                                    <div className="modal-button">
                                        <button type="button" className="btn btn-danger" onClick={() => deleteRow(rowId)}>Delete</button>
                                        <button type="button" className="btn btn-secondary" onClick={() => setIsModal(false)}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </React.Fragment>
    );
}

export default Home;