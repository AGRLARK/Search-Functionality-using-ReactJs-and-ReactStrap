import { useEffect, useState } from "react"
import { Input, InputGroup, InputGroupText, Table } from "reactstrap"
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Tables = () => {
    const [data, setData] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {

        axios.get("https://jsonplaceholder.typicode.com/users").then((dat) => setData(dat.data)).catch((err) => console.log("Error: ", err))

        // console.log("Datas:", data.filter(datas => datas.name.toLowerCase().includes("L")));

    }, [])

    return (
        <>
            <InputGroup>
                <InputGroupText>
                    <FontAwesomeIcon icon={faSearch} style={{ marginRight: '10px' }} />
                </InputGroupText>
                <Input type="text" onChange={(e) => setSearchInput(e.target.value)} placeholder="Search by username or name" />
            </InputGroup>
            <Table>
                <thead>
                    <tr>
                        <th>
                            Id
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Username
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.filter((dat) => dat.name.toLowerCase().includes(searchInput) || dat.username.toLowerCase().includes(searchInput)).map((data, index) => (
                        <tr key={index} className="table-info">
                            <td>
                                {data.id}
                            </td>
                            <td>
                                {data.name}
                            </td>
                            <td>
                                {data.username}
                            </td>
                        </tr>
                    ))}

                </tbody>
            </Table>

        </>
    )
}

export default Tables