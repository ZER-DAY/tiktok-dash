"use client";

import { useState } from "react";

const DelegationForm = () => {
  const [email, setEmail] = useState("");
  const [tiktokUserID, setTiktokUserID] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [howFoundUs, setHowFoundUs] = useState("");
  const [subAgentName, setSubAgentName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      email,
      tiktok_userID: tiktokUserID,
      age,
      country,
      phone,
      how_found_us: howFoundUs,
      sub_agent_name: subAgentName,
    };

    try {
      const response = await fetch("/api/delegation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("تم إرسال البيانات بنجاح");
      } else {
        alert("حدث خطأ أثناء إرسال البيانات");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("حدث خطأ أثناء إرسال البيانات");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        إدخال بيانات التوكيل
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            البريد الإلكتروني
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            حساب TikTok userID
          </label>
          <input
            type="text"
            value={tiktokUserID}
            onChange={(e) => setTiktokUserID(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            العمر
          </label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            دولة الإقامة
          </label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            رقم الهاتف
          </label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            كيف وصلت إلينا
          </label>
          <input
            type="text"
            value={howFoundUs}
            onChange={(e) => setHowFoundUs(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            اسم الوكيل الفرعي
          </label>
          <input
            type="text"
            value={subAgentName}
            onChange={(e) => setSubAgentName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-3 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          إرسال البيانات
        </button>
      </form>
    </div>
  );
};

export default DelegationForm;
