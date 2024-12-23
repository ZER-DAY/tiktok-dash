import { NextApiRequest, NextApiResponse } from "next";
import client from "../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const {
      email,
      tiktok_userID,
      age,
      country,
      phone,
      how_found_us,
      sub_agent_name,
    } = req.body;

    try {
      await client.query(
        "INSERT INTO delegation_requests (email, tiktok_userID, age, country, phone, how_found_us, sub_agent_name) VALUES ($1, $2, $3, $4, $5, $6, $7)",
        [
          email,
          tiktok_userID,
          age,
          country,
          phone,
          how_found_us,
          sub_agent_name,
        ]
      );
      res.status(200).json({ message: "Data submitted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
