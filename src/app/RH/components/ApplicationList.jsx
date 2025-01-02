import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/Table';

export default function ApplicationList({ applications }) {
  if (!applications || applications.length === 0) {
    return <div>Aucune candidature disponible.</div>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nom</TableHead>
          <TableHead>Prénom</TableHead>
          <TableHead>Numéro de Téléphone</TableHead>
          <TableHead>Localisation</TableHead>
          <TableHead>CV</TableHead>
          <TableHead>Lettre de Motivation</TableHead>
          <TableHead>Date de Création</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {applications.map((application) => (
          <TableRow key={application._id}>
            <TableCell>{application.nom}</TableCell>
            <TableCell>{application.prenom}</TableCell>
            <TableCell>{application.numeroTelephone}</TableCell>
            <TableCell>{application.localisation}</TableCell>
            <TableCell>
              <iframe
                src={application.cv}
                title={`CV de ${application.nom}`}
                width="150"
                height="200"
                className="border"
              />
            </TableCell>
            <TableCell>{application.letterCover}</TableCell>
            <TableCell>{new Date(application.createdAt).toLocaleDateString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
