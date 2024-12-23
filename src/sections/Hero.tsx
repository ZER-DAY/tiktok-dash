import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <div className="inline-flex items-center justify-center py-1 px-3 bg-gradient-to-l from-purple-400 to-purple-600 rounded-full text-neutral-950 font-semibold">
            أكثر من 100ألف مستخدم مسجل لدينا
          </div>
        </div>
        <h1>وكـالـة الأصـيـل</h1>
        <p>
          نحن نساعدك على أن تكتشف موهبتك أو أن تطور أعمالك من خلال تقديم أفضل
          الاستشارات الاحترافية التي تساعدك على الارتقاء بمحتواك عبر منصة{" "}
        </p>

        <Link
          href="/signup"
          style={{
            color: "white",
            backgroundColor: "black",
            padding: "10px 20px",
            textDecoration: "none",
            borderRadius: "5px",
          }}
        >
          أنظم الان
        </Link>
      </div>
    </section>
  );
}
