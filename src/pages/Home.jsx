import { useCallback } from "react";

export default function Home({ posts, loading, err, blogs, hobbies, categories, onAddBlog }) {
  const handleAddBlog = useCallback((e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value.trim();
    const content = form.content.value.trim();
    if (!title || !content) return;

    onAddBlog(title, content);
    form.reset();

    const modalEl = document.getElementById("addBlogModal");
    const modal = window.bootstrap.Modal.getInstance(modalEl);
    modal.hide();
  }, [onAddBlog]);

  return (
    <main className="container">
      <section className="blog-posts">
        <h2>Blog Gönderileri</h2>

        {loading && <p>Yükleniyor...</p>}
        {err && <p style={{ color: "crimson" }}>Hata: {err}</p>}

        <section className="blog-posts">
  

  <div className="posts-grid">
    {posts.map((p) => (
      <article key={p.id} className="card">
        <h3>{p.title}</h3>
        <p>{p.body}</p>
      </article>
    ))}

    {blogs.map((blog, i) => (
      <article key={`b-${i}`} className="card">
        <h3>{blog.title}</h3>
        <p>{blog.content.slice(0, 80)}...</p>
        <a href="#" className="read-more">Devamını oku</a>
      </article>
    ))}
  </div>
</section>


        <button
          className="btn btn-primary mt-3"
          data-bs-toggle="modal"
          data-bs-target="#addBlogModal"
        >
          + Blog Ekle
        </button>
      </section>

      <section className="hobbies-section">
  <h2>Hobilerim</h2>
  <ul className="hobbies" id="hobbies">
    {hobbies.map((h, i) => (
      <li key={i}>{h}</li>
    ))}
  </ul>
</section>

<section className="categories-section">
  <h2>Kategoriler</h2>
  <div className="categories">
    {categories.map((c, i) => (
      <button
        key={i}
        className="btn btn-outline-success btn-sm m-1"
        onClick={() => alert(`${c} kategorisine tıkladın!`)}
      >
        {c}
      </button>
    ))}
  </div>
</section>


      

      
      <div className="modal fade" id="addBlogModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">Yeni Blog Yazısı</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
            </div>

            <form onSubmit={handleAddBlog}>
              <div className="modal-body">
                <input name="title" className="form-control mb-2" placeholder="Başlık" required />
                <textarea name="content" className="form-control" placeholder="İçerik" rows="3" required></textarea>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-success">Kaydet</button>
              </div>
            </form>

          </div>
        </div>
      </div>
      <section id="moments" className="moments">
  <h2>AN</h2>
  <div className="photo-gallery">
    <img src="/moments/moments-01.jpg" alt="Anı 1" loading="lazy" draggable="false" />
    <img src="/moments/moments-02.jpg" alt="Anı 2" loading="lazy" draggable="false" />
    <img src="/moments/moments-03.jpg" alt="Anı 3" loading="lazy" draggable="false" />
    <img src="/moments/moments-04.jpg" alt="Anı 4" loading="lazy" draggable="false" />
  </div>
</section>

    </main>
  );
}
