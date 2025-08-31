import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export default function ContactAddress() {
  return (
    <section className="w-full px-6 py-12 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8" style={{ color: "#7a5c2e" }}>
          Get in Touch
        </h2>
        <div className="bg-gray-50 rounded-2xl shadow-md p-6">
          <h3
            className="text-2xl font-semibold mb-4"
            style={{ color: "#7a5c2e" }}
          >
            Dhanvantari चिकित्सा, Jabalpur
          </h3>
          <p className="mb-2">
            Main Road Kundam Tehsil
            <br />
            Kundam Village Sadafal <br />
            Sadalfal Kundam
            <br />
            Jabalpur, Madhya Pradesh 483110
          </p>
          <div className="flex flex-col items-center gap-2 mb-6">
            <p className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-green-600" /> +91-92442-85921
            </p>
            <p className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-green-600" />{" "}
              +91-98765-43210
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-600" />{" "}
              dhanvantarichikitsha@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-600" />{" "}
              dhanvantarichikitsha@yahoo.com
            </p>
          </div>

          {/* Google Map */}
          <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.580147181614!2d79.93493357495667!3d23.181467613261404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981ae2a17d7a8e1%3A0x8c647b25b14e2d3f!2sJabalpur%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1724740200000!5m2!1sen!2sin"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14428.000000000002!2d80.316833!3d23.218639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1725100000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
