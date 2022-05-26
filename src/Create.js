import React, { useState } from 'react';
import logo from './logo.svg';
import { useHistory } from "react-router-dom";

function Create() {

  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [type, setType] = useState();
  const [whatsapp, setWhatsapp] = useState(true);

  let history = useHistory();

  function addNumber() {
    var prevData = JSON.parse(localStorage.getItem("allEntries"));
    if (prevData == null) prevData = [];
    let result = { name, phone, type, whatsapp };
    localStorage.setItem("entry", JSON.stringify(result));
    prevData.push(result);
    localStorage.setItem("allEntries", JSON.stringify(prevData));
    history.push("/")
  }
  return (
    <React.Fragment>
      <div className="header">
        <p>Add Details</p>
        <button className="btn btn-light" onClick={() => history.push("/")}><i className="far fa-chevron-double-left"></i>Back</button>
      </div>
      <div className="content-body">
        <div className="form-wrapper">
          <div className="form-group">
            <label className="form-group-label">
              Name :
          </label>
            <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label className="form-group-label">
              Phone :
          </label>
            <input type="number" className="form-control" onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="form-group">
            <label className="form-group-label">
              Type :
          </label>
            <select className="form-control" onChange={(e) => setType(e.target.value)} >
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
                <input className="form-check-input" type="radio" name="whatsapp" value={true} onChange={() => setWhatsapp(true)} checked />
                <label className="form-check-label" >
                  Yes
              </label>
              </div>
              <div className="form-check flex-50">
                <input className="form-check-input" type="radio" name="whatsapp" value={false} onChange={() => setWhatsapp(false)} />
                <label className="form-check-label">
                  No
              </label>
              </div>
            </div>
          </div>
          <div className="bottom-button">
            <button className="btn btn-dark" onClick={() => history.push('/')}>Cancel</button>
            <button className="btn btn-primary" onClick={() => addNumber()}>Save</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Create;