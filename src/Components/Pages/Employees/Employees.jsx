const Employees = () => {
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

                                <tbody className="bg-gray-300 divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">name</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Age Value</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Email Value</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Phone Value</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Position Value</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Salary Value</td>
                                        <td>
                                            <div className="join join-vertical lg:join-horizontal">
                                                <button className="btn btn-sm join-item btn-primary">Edit</button>
                                                <button className="btn btn-sm join-item">Button</button>
                                                <button className="btn btn-sm join-item">Button</button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Employees;
