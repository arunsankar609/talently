import { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import indusData from "./MOCK_DATA.json";
import "./Tables.css";
function StripedRowExample() {
  const [show, setShow] = useState(false);
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [indData,setIndData]=useState([])
  const addIndustries = () => {
    setIndData([...indData, company, country, state, city]);
    console.log(indData);
  };
  // const handleSubmit=(e)=>{
  //   e.preventDefault()
  //   console.log(company,country,state,city);
  // }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add industry Certifications</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <form onSubmit={handleSubmit}>
            <select name="company_name" id="company_name" style={{ width: "210px" }}>
              <option value="volvo">company</option>
              {indusData.map((data, index) => (
                <option value={data.company_name} key={index} onChange={(e)=>setCompany(e.target.value)}>
                  {data.company_name}
                </option>
              ))}

              
            </select>
            <br />
            <select name="country" id="country" style={{ width: "210px" }}>
            <option value="volvo">country</option>
              {indusData.map((data, index) => (
                <option value={data.country} key={index} onChange={(e)=>setCountry(e.target.value)}>
                  {data.country}
                </option>
              ))}
            </select>
            <br />
            <select name="state" id="state" style={{ width: "210px" }}>
            <option value="volvo">state</option>
              {indusData.map((data, index) => (
                <option value={data.state} key={index} onChange={(e)=>setState(e.target.value)}>
                  {data.state}
                </option>
              ))}
            </select>
            <br />
            <select name="city" id="city" style={{ width: "210px" }}>
            <option value="volvo">city</option>
              {indusData.map((data, index) => (
                <option value={data.city} key={index} onChange={(e)=>setCity(e.target.value)}>
                  {data.city}
                </option>
              ))}
            </select><br/>
            <button type="submit">Add</button>
            <button>Cancel</button>
          </form> */}
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Select size="sm" value={company} onChange={e=>setCompany(e.target.value)}>
                <option>Company Name</option>
                {
                  indusData.map((data,index)=>(
                 <option value={data.company_name} key={index}>{data.company_name}</option>
                  ))
                }
                
              </Form.Select>
              <br />
              <Form.Select size="sm" id="country" value={country} onChange={e=>setCountry(e.target.value)}>
                <option>Country</option>
                {indusData.map((data, index) => (
                  <option value={data.country} key={index}>
                    {data.country}
                  </option>
                ))}
              </Form.Select>
              <br />
              <Form.Select size="sm" value={state} onChange={e=>setState(e.target.value)}>
                <option>state</option>
                {indusData.map((data, index) => (
                  <option value={data.state} key={index}>
                    {data.state}
                  </option>
                ))}
              </Form.Select>
              <br />
              <Form.Select size="sm" value={city} onChange={e=>setCity(e.target.value)}>
                <option>City</option>
                {indusData.map((data, index) => (
                  <option value={data.city} key={index}>
                    {data.city}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={addIndustries}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="header">
        <div>
          <h3>Industry Certifications</h3>
        </div>

        <div className="logo">
          {" "}
          <i class="bi bi-file-earmark-plus" onClick={handleShow} />
        </div>
      </div>
      <Table striped>
        <thead>
          <tr>
            <th>No</th>
            <th>company name</th>
            <th>country</th>
            <th>state</th>
            <th>city</th>
          </tr>
        </thead>
        <tbody>
          {indData.map((data, index) => (
            <tr key={index}>
              <td>{state}</td>
              <td>{country}</td>
              <td>{state}</td>
              <td>{city}</td>
            </tr>
          ))}

          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default StripedRowExample;
