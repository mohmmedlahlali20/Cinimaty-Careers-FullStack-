import Application from "../models/Application";

export default async function GetApplicationByUserEmail(req, res) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, message: `Email is required.` });
  }

  try {
    const findApplicationByUserEmail = await Application.findOne({ condidateurEmail: email });

    if (!findApplicationByUserEmail) {
      return res.status(404).json({ success: false, message: "This application doesn't exist." });
    }

    res.status(200).json({ success: true, data: findApplicationByUserEmail });
  } catch (err) {
    console.error('Error fetching application:', err);
    res.status(500).json({ success: false, message: `Error occurred: ${err.message}` });
  }
}
