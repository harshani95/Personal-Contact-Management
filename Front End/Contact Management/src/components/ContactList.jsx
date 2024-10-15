import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ContactList = () => {
  const myStyle = {
    color: "rgb(39, 60, 117)",
    marginTop: 15,
  };

  const [contacts, setContacts] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getAllContacts();
  }, [searchText]);

  const getAllContacts = async () => {
    const response = await axios.get(
      "http://localhost:8000/api/v1/contacts/get-all-contacts",
      {
        params: {
          searchText: searchText,
          page: 0,
          size: 10,
        },
      }
    );

    setContacts(response.data.data.dataList);
  };

  const deleteContact = async (id) => {
    await axios.delete("http://localhost:8000/api/v1/contacts/delete/" + id);
    getAllContacts();
  };

  return (
    <>
      <br />
      <div className="container">
        <h1 className="text-center" style={myStyle}>
          {" "}
          Contact List
        </h1>
        <br />

        <table className="table table-hover table-bordered shadow">
          <thead>
            <tr className="text-center">
              <th>ID</th>
              <th>Full Name</th>
              <th>Address</th>
              <th>Contact Number</th>
              <th>Note</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>

          <tbody className="text-center">
            {contacts.map((contact, index) => (
              <tr key={index}>
                <td>{contact.id}</td>
                <td>{contact.name}</td>
                <td>{contact.address}</td>
                <td>{contact.email}</td>
                <td>{contact.contactNumber}</td>

                <td className="mx-2">
                  <Link
                    className="btn btn-info"
                    to={`/contactProfile/${contact.id}`}
                  >
                    View
                  </Link>
                </td>

                <td className="mx-2">
                  <button
                    onClick={() => {
                      if (confirm("are you sure?")) {
                        deleteContact(contact.id);
                      }
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ContactList;
