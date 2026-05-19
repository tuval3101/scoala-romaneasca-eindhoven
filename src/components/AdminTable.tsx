type AdminTableProps = {
  columns: string[];
  rows: Array<Array<string | number>>;
  actions?: boolean;
};

export default function AdminTable({ columns, rows, actions = true }: AdminTableProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-slate-50 text-slate-600">
          <tr>
            {columns.map((column) => <th className="px-4 py-3 font-semibold" key={column}>{column}</th>)}
            {actions ? <th className="px-4 py-3 font-semibold">Actions</th> : null}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {rows.map((row) => (
            <tr key={row.join("-")}>
              {row.map((cell, index) => <td className="px-4 py-3 text-slate-700" key={`${cell}-${index}`}>{cell}</td>)}
              {actions ? <td className="px-4 py-3 text-sm font-semibold text-blue-950">Edit · Delete · View</td> : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
