import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(req: NextRequest) {
  const {
    email,
    userIdTikTok,
    age,
    country,
    phone,
    howDidYouFindUs,
    subAgentName,
  } = await req.json();

  try {
    const query = `
      INSERT INTO agents (email, user_id_tiktok, age, country_of_residence, phone, how_did_you_find_us, sub_agent_name)
      VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;
    `;
    const values = [
      email,
      userIdTikTok,
      age,
      country,
      phone,
      howDidYouFindUs,
      subAgentName,
    ];
    const result = await pool.query(query, values);

    return NextResponse.json({
      message: "Agent added successfully",
      agent: result.rows[0],
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error adding agent", error },
      { status: 500 }
    );
  }
}
