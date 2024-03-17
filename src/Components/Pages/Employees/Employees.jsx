import EmployeeCard from "./EmployeeCard";

const Employees = ({ employees }) => {

    console.log(employees)

    return (
        <div>
            <div className=" mx-auto mt-10">
                <div className="card">

                    <div className="card-title">
                        <h1 className="text-center mx-auto text-4xl font-semibold">Employees</h1>
                    </div>

                    <div className="card-body">
                        <div className="overflow-x-auto">
                            <table className="table-auto min-w-full divide-y divide-gray-200">
                                <thead className="bg-black text-white">
                                    <tr>
                                        <th className="px-6 py-3 text-left">Name</th>
                                        <th className="px-6 py-3 text-left">Age</th>
                                        <th className="px-6 py-3 text-left">Email</th>
                                        <th className="px-6 py-3 text-left">Phone</th>
                                        <th className="px-6 py-3 text-left">Position</th>
                                        <th className="px-6 py-3 text-left">Salary</th>
                                        <th className="px-6 py-3 text-left">Action</th>
                                        <th>
                                            <div></div>
                                        </th>
                                    </tr>
                                </thead>
                                {
                                    employees.map((employee) => <EmployeeCard key={employee.id} employee={employee}></EmployeeCard>)
                                }
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Employees;
