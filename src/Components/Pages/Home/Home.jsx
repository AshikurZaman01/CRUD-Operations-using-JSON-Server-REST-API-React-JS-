import { useState } from "react";
import Employees from "../Employees/Employees";
import { useEffect } from "react";

const Home = () => {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch('employee.json')
            .then(res => res.json())
            .then(data => setEmployees(data))
    }, [])

    return (
        <div>
            <Employees employees={employees}></Employees>
        </div>
    );
};

export default Home;