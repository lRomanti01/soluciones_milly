import whatsapp from "../assets/whatsapp.png";

export function WhatsappButton() {
  return (
    <div className="fixed bottom-4 right-4">
      <a
        href="https://wa.me/18099773751"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={whatsapp} width={60} height={60} alt="WhatsApp" />
      </a>
    </div>
  );
}
