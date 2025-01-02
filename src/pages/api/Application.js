import multer from 'multer';
import dbConnect from '../config/mongodb';
import Application from '../models/Application';
import cloudinary from '../config/cloudinary'
import { parse } from 'date-fns';

const upload = multer({ storage: multer.memoryStorage() });

export const config = {
  api: {
    bodyParser: false,
  },
};

async function uploadToCloudinary(fileBuffer, options) {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(options, (error, result) => {
      if (error) reject(error);
      resolve(result);
    });
    stream.end(fileBuffer);
  });
}

export default async function Postuler(req, res) {
  
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Méthode non autorisée.' });
  }

  const multerMiddleware = upload.single('cv');
  await new Promise((resolve, reject) => {
    multerMiddleware(req, res, (err) => {
      if (err) reject(err);
      resolve();
    });
  });

  await dbConnect();

  try {
    const {
      nom,
      prenom,
      letterCover,
      numeroTelephone,
      localisation,
      condidateurName,
      condidateurEmail,
      OfferName
    } = req.body;

    const cvFile = req.file;

    if (
        !nom ||
        !prenom ||
        !cvFile ||
        !letterCover ||
        !numeroTelephone ||
        !localisation ||
        !OfferName ||
        !condidateurEmail ||
        !condidateurName
    ) {
      return res.status(400).json({ success: false, message: 'Tous les champs sont requis.' });
    }

    // const parsedDate = parse(dateDisponibilite, 'dd/MM/yyyy', new Date());
    // if (isNaN(parsedDate)) {
    //   return res
    //       .status(400)
    //       .json({ success: false, message: 'La date de disponibilité est invalide.' });
    // }
    const uploadResult = await uploadToCloudinary(cvFile.buffer, {
      folder: 'job-applications',
      resource_type: 'raw',
      public_id: `${nom}_${prenom}_CV`,
      format: 'pdf',
      use_filename: true,
    });

    const cvUrl = uploadResult.secure_url;

    const application = await Application.create({
      nom,
      prenom,
      cv: cvUrl,
      letterCover,
      numeroTelephone,
      localisation,
      OfferName,
      condidateurName,
      condidateurEmail,
    });

    res.status(201).json({ success: true, data: application });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Erreur serveur.' });
  }
}
