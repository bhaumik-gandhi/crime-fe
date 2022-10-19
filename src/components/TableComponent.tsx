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
          {headers.map((head, index) => <th key={index}>{head}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map((row: any) => <tr key={row._id}>
          {headers.map((head: string, index) => <td key={index}>{row[head]}</td>)}
        </tr>)}
      </tbody>
    </Table>
  );
}
