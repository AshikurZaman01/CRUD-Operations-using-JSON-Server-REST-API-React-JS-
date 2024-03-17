
const EmployeeCard = ({ employee }) => {


    const { id, name, age, email, phone, position, salary } = employee || {};

    return (
        <tbody className="bg-gray-300 divide-y divide-gray-200">
            <tr>
                <td className="px-6 py-4 whitespace-nowrap">{name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{age}</td>
                <td className="px-6 py-4 whitespace-nowrap">{email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{phone}</td>
                <td className="px-6 py-4 whitespace-nowrap">{position}</td>
                <td className="px-6 py-4 whitespace-nowrap">{salary}</td>
                <td>
                    <div className="join join-vertical lg:join-horizontal">
                        <button className="btn btn-sm join-item btn-primary">Edit</button>
                        <button className="btn btn-sm join-item btn-accent">Details</button>
                        <button className="btn btn-sm join-item btn-error">Delete</button>
                    </div>
                </td>
            </tr>
        </tbody>
    );
};

export default EmployeeCard;