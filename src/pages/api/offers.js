import nestApi from "app/utils/pathNest";

export default async function handler(req, res) {
  const { query } = req.query;

  try {
    const response = await nestApi.get(`/offers?q=${query}`);
    const offers = response.data;

    res.status(200).json(offers);
  } catch (error) {
    console.error("Error fetching offers:", error);
    res.status(500).json({ error: "Failed to fetch offers" });
  }
}
