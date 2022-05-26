import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
// import data from './data.json';
import { useHistory, useLocation } from "react-router-dom";


function Edit() {

    const location = useLocation();

    const [name, setName] = useState(location.state?.name);
    const [phone, setPhone] = useState(location.state?.phone);
    const [type, setType] = useState(location.state?.type);
    const [whatsapp, setWhatsapp] = useState(location.state?.whatsapp);
    const [index, setIndex] = useState(location.index);
    const [contactList, setContactList] = useState(location.contactList);

    let history = useHistory();

    useEffect(() => {
    }, []);

    function deleteRow(index) {
        if (contactList == null) contactList = [];
        let result = contactList.slice(index, 1);
        localStorage.setItem("entry", JSON.stringify(result));
        contactList.pop(result);
        localStorage.setItem("allEntries", JSON.stringify(contactList));
    }

    function upDateNumber() {
        deleteRow(index);
        let prevData = JSON.parse(localStorage.getItem("allEntries"));
        if (prevData == null) prevData = [];
        let result = { name, phone, type, whatsapp };
        localStorage.setItem("entry", JSON.stringify(result));
        prevData.push(result);
        localStorage.setItem("allEntries", JSON.stringify(prevData));
        history.push("/");
    }

    return (
        <React.Fragment>
            <div className="header">
                <p>Edit Details</p>
                <button className="btn btn-light" onClick={() => history.push("/")}><i className="far fa-chevron-double-left"></i>Back</button>
            </div>
            <div className="content-body">
                <div className="form-wrapper">
                    <div className="form-group">
                        <label className="form-group-label">
                            Name :
                        </label>
                        <input type="text" className="form-control" value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-group-label">
                            Phone :
                        </label>
                        <input type="number" className="form-control" value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-group-label">
                            Type :
                        </label>
                        <select className="form-control" value={type}
                            onChange={(e) => setType(e.target.value)}
                        >
                            <option>Select</option>
                            <option>Personal</option>
                            <option>Office</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="form-group-label">
                            whastapp :
                        </label>
                        <div className="d-flex">
                            <div className="form-check flex-50">
                                <input className="form-check-input" type="radio" name="whatsapp" defaultChecked={whatsapp == true} value={true}
                                    value={true} onChange={() => setWhatsapp(true)}
                                />
                                <label className="form-check-label" >
                                    Yes
                                </label>
                            </div>
                            <div className="form-check flex-50">
                                <input className="form-check-input" type="radio" name="whatsapp" defaultChecked={whatsapp == false} value={false}
                                    value={false} onChange={() => setWhatsapp(false)}
                                />
                                <label className="form-check-label">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-button">
                        <button className="btn btn-dark" onClick={() => history.push('/')}>Cancel</button>
                        <button className="btn btn-primary" onClick={() => upDateNumber()}>Save</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Edit;