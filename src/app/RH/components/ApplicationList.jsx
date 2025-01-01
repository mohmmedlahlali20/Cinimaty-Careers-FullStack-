import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/Table'

export default function ApplicationList({ applications }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Candidate Name</TableHead>
          <TableHead>Job Title</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {applications.map((application) => (
          <TableRow key={application.id}>
            <TableCell>{application.candidateName}</TableCell>
            <TableCell>{application.jobTitle}</TableCell>
            <TableCell>{application.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

