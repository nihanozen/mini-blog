import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";






async function getPosts(limit = 3) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
  );
  if (!response.ok) throw new Error("Postlar alınamadı");
  return response.json();
}

export default function App() {
  const [siteTitle] = useState("Nihan Özen");      
  const [darkMode, setDarkMode] = useState(false); 
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [blogs, setBlogs] = useState([
    {
      title: "Sabah Rutinleri: Güne Zinde Başla",
      content: "Erken uyanmak güne odaklı ve motive başlamanın en etkili yollarındandır.",
    },
    {
      title: "Gününü Planla",
      content: "Zamanı iyi kullanmak için günü planlı geçirmek oldukça önemlidir.",
    },
  ]);

  const hobbies = ["Kahve", "Yüzme", "Yürüyüş", "Film izleme"];

  const onAddBlog = (title, content) => {
    setBlogs((prev) => [...prev, { title, content }]);
  };
const categories = ["Teknoloji", "Yaşam", "Eğitim", "Sağlık", "Sanat"];

  useEffect(() => {
    (async () => {
      try {
        const data = await getPosts(3);
        setPosts(data);
      } catch (e) {
        setErr(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);



  return (
    <div className={darkMode ? "app dark" : "app"}>
      <header>
        <h1 id="siteTitle">{siteTitle}</h1>

        <nav
          style={{
            marginTop: 8,
            display: "flex",
            gap: 12,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link to="/">Ana Sayfa</Link>
          <span>•</span>
          <Link to="/about">Hakkımda</Link>
          <span>•</span>
  <Link to="/contact">İletişim</Link>
          {/* Tema butonu (küçük ikon) */}
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </nav>
      </header>

      <main className="container">
        <Routes>
  <Route
    path="/"
    element={
      <Home
        posts={posts}
        loading={loading}
        err={err}
        blogs={blogs}
        hobbies={hobbies}
        categories={categories}
        onAddBlog={onAddBlog}
      />
    }
  />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>

      </main>

      <footer className="footer">
        <small>
          © <span id="year">{new Date().getFullYear()}</span>
        </small>
      </footer>
    </div>
  );
}
