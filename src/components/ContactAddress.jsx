import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export default function ContactAddress() {
  return (
    <section className="w-full px-6 pt-5 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl fw-bold mb-4" style={{ color: "#7a5c2e" }}>
          Get in Touch
        </h2>

        <div className="container py-4">
          <div className="row align-items-center">
            {/* Address Section */}
            <div className="col-md-8 text-start">
              <div className="bg-light rounded-4 shadow p-4">
                <h3
                  className="fs-3 fw-semibold mb-3"
                  style={{ color: "#7a5c2e" }}
                >
                  Dhanvantari चिकित्सा, Jabalpur
                </h3>
                <p className="mb-2">
                  Main Road Kundam Tehsil <br />
                  Kundam Village Sadafal <br />
                  Sadalfal Kundam <br />
                  Jabalpur, Madhya Pradesh 483110
                </p>
                <div className="d-flex flex-column gap-2">
                  <p className="d-flex align-items-center gap-2 mb-1">
                    <Phone className="w-5 h-5 text-success" /> +91-92442-85921
                  </p>
                  <p className="d-flex align-items-center gap-2 mb-1">
                    <MessageCircle className="w-5 h-5 text-success" />{" "}
                    +91-98765-43210
                  </p>
                  <p className="d-flex align-items-center gap-2 mb-1">
                    <Mail className="w-5 h-5 text-primary" />{" "}
                    dhanvantarichikitsha@gmail.com
                  </p>
                  <p className="d-flex align-items-center gap-2 mb-1">
                    <Mail className="w-5 h-5 text-primary" />{" "}
                    dhanvantarichikitsha@yahoo.com
                  </p>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="col-md-4 d-flex justify-content-center">
              <img
                src="./logo2.png"
                alt="logo"
                width="300"
                height="280"
                className="rounded-4 img-fluid"
              />
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-100 mt-4 rounded-4 overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14428.000000000002!2d80.316833!3d23.218639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1725100000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
