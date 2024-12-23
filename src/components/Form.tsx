"use client";

import React, { useState } from "react";
import InputField from "@/components/InputField";
import Button from "@/components/Button";

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    userIdTikTok: "",
    age: "",
    country: "",
    phone: "",
    howDidYouFindUs: "",
    subAgentName: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/add-agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("تمت إضافة الوكيل بنجاح");
        setFormData({
          email: "",
          userIdTikTok: "",
          age: "",
          country: "",
          phone: "",
          howDidYouFindUs: "",
          subAgentName: "",
        });
      } else {
        alert("حدث خطأ أثناء إضافة الوكيل");
      }
    } catch (error) {
      console.error(error);
      alert("خطأ في الاتصال بالخادم");
    }
  };

  return (
    <form onSubmit={handleSubmit} dir="rtl" style={{ textAlign: "right" }}>
      <InputField
        label="البريد الإلكتروني"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <InputField
        label="معرّف المستخدم في TikTok"
        type="text"
        name="userIdTikTok"
        value={formData.userIdTikTok}
        onChange={handleChange}
      />
      <InputField
        label="العمر"
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
      />
      <InputField
        label="دولة الإقامة"
        type="text"
        name="country"
        value={formData.country}
        onChange={handleChange}
      />
      <InputField
        label="رقم الهاتف"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <InputField
        label="كيف تعرفت علينا؟"
        type="text"
        name="howDidYouFindUs"
        value={formData.howDidYouFindUs}
        onChange={handleChange}
      />
      <InputField
        label="اسم الوكيل الفرعي"
        type="text"
        name="subAgentName"
        value={formData.subAgentName}
        onChange={handleChange}
      />
      <Button text="إرسال" />
    </form>
  );
};

export default Form;
