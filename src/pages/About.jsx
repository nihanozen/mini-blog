export default function About() {
  return (
    <div className="about">
      <img
        src="/profil.jpg"
        alt="Benim fotoğrafım"
        className="about-img"
      />

      <div className="about-text">
        <h1>Hakkımda</h1>
        <p>
          Merhaba ben Nihan. Matematik ve matematiğin dahil olduğu her şeyle
          ilgileniyorum. Şu an web geliştirmeyi öğrendiğim bir süreçteyim. Bu
          blog paylaşmak istediğim her şeyi paylaştığım bir yer olacak.
        </p>
        <p>
          Neleri yapmayı sevdiğimi keşfetmeye çalışıyorum. Hobilerim arasında
          kahve içmek, yürüyüş yapmak ve kitap okumak var. Hayata mola verdiren
          her andan keyif alıyorum. Ve sanki bana hayatta olduğumu asıl bu küçük
          ve sakin anlar hissettiriyor.
        </p>

        <a href="mailto:nihanozen@icloud.com" className="contact-btn">
          Bana Ulaş
        </a>
      </div>
    </div>
  );
}
