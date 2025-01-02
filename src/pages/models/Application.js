import mongoose, { trusted } from 'mongoose';

const ApplicationSchema = new mongoose.Schema({
    nom:
    {
        type: String,
        required: true
    },
    prenom:
    {
        type: String,
        required: true
    },
    cv:
    {
        type: String,
        required: true
    },
    letterCover:
    {
        type: String,
        required: true
    },
    numeroTelephone:
    {
        type: String,
        required: true
    },
    localisation:
    {
        type: String,
        required: true
    },
    OfferName: {
        type: String,
        required: true
    },
    condidateurName: {
        type: String,
        required: true
    },
    condidateurEmail: {
        type: String,
        required: true
    }

}, { timestamps: true });

export default mongoose.models.Application || mongoose.model('Application', ApplicationSchema);
