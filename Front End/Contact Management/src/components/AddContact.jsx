import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


const AddContact = () => {

const navigate = useNavigate();

const [name, setName] = useState("");
const [address, setAddress] = useState("");
const [contactNumber, setContactNumber] = useState("");
const [note, setNote] = useState("");

const saveContact = async ()=> {

  try{

    const response = await axios.post('http://localhost/api/v1/contacts/create',{
         name,address,contactNumber,note
     });
     console.log(response);

    setName('');
    setAddress('');
    setContactNumber('');
    setNote('');
    navigate('/')

 }catch (e){
     console.log(e)
 }
}


  return (
    <div>
        <div>
        <div className='container'>
            <div className="row">
                <div className="card col-md-6 offset-md-3"><br />
                    <h3 className="text-center">Add Contact</h3>
                    <div className="card-body">
                    <form>
                        <div className='form-group'>
                            <label htmlFor="name">Name : </label>
                            <input onChange={(e) => {setName(e.target.value) }} value={name} type="text" placeholder="Full Name" id="name" className="form-control" required
                            />
                        </div><br />
                        <div className='form-group'>
                            <label htmlFor="address">Address : </label>
                            <input onChange={(e) => {setAddress(e.target.value) }} value={address} placeholder="Address" id="address" className="form-control" required
                             />
                        </div><br />
                        <div className='form-group'>
                            <label htmlFor="contactNumber">Contact Number : </label>
                            <input onChange={(e) => {setContactNumber(e.target.value) }} value={contactNumber} placeholder="Contact Number" id="contactNumber" className="form-control" required
                             />
                        </div><br />
                        <div className='form-group'>
                            <label htmlFor="note">Email : </label>
                            <input onChange={(e) => {setNote(e.target.value) }} value={note} placeholder="Note" id="note" className="form-control" required
                            />
                        </div><br />
                    

                        <button onClick={()=>saveContact()} className="btn btn-success" type="button">Save</button>
                        <Link className="btn btn-danger" to={'/contactList'} style={{marginLeft: "20px"}}>Cancel</Link>
                       
                    </form>

                    </div>
                </div>
            </div>
             

        </div>
    </div>
    
    </div>
  )
}

export default AddContact