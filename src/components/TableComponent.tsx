import Table from 'react-bootstrap/Table';

type TableType = {
  headers: string[],
  rows: any[]
}

export function TableComponent({ headers, rows }: TableType) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {headers.map(head => <th>{head}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map((row: any) => <tr key={row._id}>
          {headers.map((head: string) => <td>{row[head]}</td>)}
        </tr>)}
      </tbody>
    </Table>
  );
}
