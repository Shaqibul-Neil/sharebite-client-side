const TableSkeleton = ({ count = 5 }) => {
  return (
    <div className="overflow-x-auto animate-pulse">
      <table className="table w-full">
        <thead>
          <tr>
            <th>SL</th>
            <th>Food Name</th>
            <th>Food Quantity</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(count)].map((_, i) => (
            <tr key={i}>
              <td>
                <div className="h-3 w-5 bg-gray-300 rounded"></div>
              </td>

              <td className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask rounded-lg h-12 w-12 bg-gray-300"></div>
                </div>
                <div className="h-4 w-32 bg-gray-300 rounded"></div>
              </td>

              <td>
                <div className="h-3 w-16 bg-gray-300 rounded"></div>
              </td>

              <td>
                <div className="h-5 w-20 bg-gray-300 rounded-full"></div>
              </td>

              <td>
                <div className="h-6 w-16 bg-gray-300 rounded-md mr-2 inline-block"></div>
                <div className="h-6 w-16 bg-gray-300 rounded-md inline-block"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSkeleton;
