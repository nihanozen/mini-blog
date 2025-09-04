export default function Contact() {
  return (
    <section className="contact">
      <h2>İletişim</h2>

      <p className="lead">
        Bana ulaşmak için aşağıdaki formu doldurabilirsin.
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Adınız" required />
        <input type="email" placeholder="E-posta" required />
        <textarea rows="5" placeholder="Mesajınız" required />
        <button type="submit">Gönder</button>
      </form>
    </section>
  );
}

