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
  const [otherText, setOtherText] = useState(""); // لحفظ النص في حقل "أخرى"
  const [subAgentVisible, setSubAgentVisible] = useState(false); // لتظهر/تخفي حقل الوكيل الفرعي
  const [otherVisible, setOtherVisible] = useState(false); // لتظهر/تخفي حقل "أخرى"

  const handleHowFoundChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setHowFoundUs(value);
    if (value === "وكيل فرعي") {
      setSubAgentVisible(true); // يظهر حقل الوكيل الفرعي عند اختيار "وكيل فرعي"
      setOtherVisible(false); // يخفي حقل "أخرى" إذا تم اختيار "وكيل فرعي"
    } else if (value === "Other") {
      setOtherVisible(true); // يظهر حقل "أخرى" إذا تم اختيار "أخرى"
      setSubAgentVisible(false); // يخفي حقل الوكيل الفرعي
    } else {
      setSubAgentVisible(false); // يخفي حقل الوكيل الفرعي لبقية الخيارات
      setOtherVisible(false); // يخفي حقل "أخرى"
    }
  };

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
      other_text: otherText,
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
          <select
            value={howFoundUs}
            onChange={handleHowFoundChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-none"
            required
          >
            <option value="">اختر خياراً</option>
            <option value="مواقع التواصل الاجتماعي">
              مواقع التواصل الاجتماعي
            </option>
            <option value="عبر صديق">عبر صديق</option>
            <option value="وكيل فرعي">وكيل فرعي</option>
            <option value="Other">أخرى</option>
          </select>
        </div>

        {/* عرض حقل اسم الوكيل الفرعي إذا تم اختيار "وكيل فرعي" */}
        {subAgentVisible && (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              اسم الوكيل الفرعي
            </label>
            <input
              type="text"
              value={subAgentName}
              onChange={(e) => setSubAgentName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-none"
            />
          </div>
        )}

        {/* عرض حقل النص الآخر إذا تم اختيار "أخرى" */}
        {otherVisible && (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              أخرى (يرجى التوضيح)
            </label>
            <input
              type="text"
              value={otherText}
              onChange={(e) => setOtherText(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-none"
            />
          </div>
        )}

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
