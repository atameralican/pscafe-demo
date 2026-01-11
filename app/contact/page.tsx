import { MapPinCheckInside, Phone } from "lucide-react";

function ContactPage() {
  return (
    <div className="grid grid-cols-1 gap-20">
      <div className="w-full">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 md:px-20 px-10 gap-8 max-w-4xl mx-auto">
          <div className="text-center md:p-10 p-6 shadow-lg dark:shadow-neutral-900 bg-neutral-200 dark:bg-neutral-900 rounded-lg transition-transform hover:scale-105">
            <a
              href="https://maps.app.goo.gl/o57WFjpX6s9oSggggNSy7"
              target="_blank"
              rel="noopener noreferrer"
              className="block no-underline text-inherit"
            >
              <div className="bg-neutral-100 dark:bg-neutral-800 w-[75px] h-[75px] rounded-full mx-auto flex items-center justify-center mb-4">
                <MapPinCheckInside
                  className="text-blue-600 dark:text-blue-400"
                  size={32}
                />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-2xl mb-2 text-neutral-800 dark:text-neutral-100">
                  Adress
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                  Abcdef, 175. Sk. No:4, 06000  Merkez/Ankara, Turkey
                </p>
              </div>
            </a>
          </div>

          <div className="text-center md:p-10 p-6 shadow-lg dark:shadow-neutral-900 bg-neutral-200 dark:bg-neutral-900 rounded-lg transition-transform hover:scale-105">
            <a
              href="tel:+905512345678"
              className="block no-underline text-inherit"
            >
              <div className="bg-neutral-100 dark:bg-neutral-800 w-[75px] h-[75px] rounded-full mx-auto flex items-center justify-center mb-4">
                <Phone className="text-blue-600 dark:text-blue-400" size={32} />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-2xl mb-2 text-neutral-800 dark:text-neutral-100">
                  Phone
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                  +90 551 234 56 78
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Harita */}
      <div className="h-[550px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.217842469979!2d32.859741!3d39.933365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f8b2c1d9d3b%3A0x9f2e3e8b5e2a6c9d!2sAnkara!5e0!3m2!1str!2str!4v1763289000000"
          width="100%"
          height="100%"
          className="border-0 outline-0 rounded-lg"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Şirket Konumu"
        />
      </div>
    </div>
  );
}

export default ContactPage;
