// مثال باستخدام PostgreSQL (pg)
import { Client } from "pg";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const client = new Client({
    user: "username", // ضع اسم المستخدم الخاص بقاعدة البيانات
    host: "localhost",
    database: "delegation_db",
    password: "password", // ضع كلمة المرور الخاصة بقاعدة البيانات
    port: 5432,
  });

  try {
    await client.connect();

    // قراءة البيانات المرسلة من العميل
    const formData = await req.json();
    const {
      email,
      tiktok_userID,
      age,
      country,
      phone,
      how_found_us,
      sub_agent_name,
      other_text,
    } = formData;

    // استعلام لإدخال البيانات في جدول 'delegations'
    const query = `
      INSERT INTO delegations (email, tiktok_userID, age, country, phone, how_found_us, sub_agent_name, other_text)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    `;
    const values = [
      email,
      tiktok_userID,
      age,
      country,
      phone,
      how_found_us,
      sub_agent_name,
      other_text,
    ];
    await client.query(query, values);

    // إرجاع استجابة ناجحة
    return NextResponse.json(
      { message: "تم إرسال البيانات بنجاح" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing data:", error);
    return NextResponse.json(
      { message: "حدث خطأ أثناء إرسال البيانات" },
      { status: 500 }
    );
  } finally {
    await client.end();
  }
}
