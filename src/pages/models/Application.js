import mongoose from 'mongoose';

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
    // dateDisponibilite:
    // {
    //     type: Date,
    //     required: true
    // },
    offerId:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Offer',
        required: true
    }

}, { timestamps: true });

export default mongoose.models.Application || mongoose.model('Application', ApplicationSchema);
