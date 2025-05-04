
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-brand-teal/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center mb-4">
              <div className="h-1 w-12 bg-brand-green mr-4"></div>
              <span className="text-brand-green font-medium">Get In Touch</span>
              <div className="h-1 w-12 bg-brand-green ml-4"></div>
            </div>
          </div>
          <h2 className="section-title">Let's Discuss Your Project</h2>
          <p className="text-brand-light/70 max-w-2xl mx-auto text-lg">
            Have a question or want to explore how we can work together? Reach out and I'll respond as soon as possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="card p-6 flex flex-col items-center text-center">
            <div className="mb-4">
              <div className="p-3 bg-brand-green/20 rounded-lg">
                <Mail className="text-brand-green" size={24} />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-brand-light mb-1">Email</h3>
            <p className="text-brand-light/70 text-sm mb-2 break-all">natashanorsker@bigdataenergy.tech</p>
            <a href="mailto:natashanorsker@bigdataenergy.tech" className="text-brand-green text-sm">
              Send an email
            </a>
          </div>
          
          <div className="card p-6 flex flex-col items-center text-center">
            <div className="mb-4">
              <a href="tel:+4522437629" className="block">
                <div className="p-3 bg-brand-green/20 rounded-lg hover:bg-brand-green/30 transition-colors">
                  <Phone className="text-brand-green" size={24} />
                </div>
              </a>
            </div>
            <h3 className="text-lg font-semibold text-brand-light mb-1">Phone</h3>
            <p className="text-brand-light/70 mb-2">+45 22 43 76 29</p>
            <a href="tel:+4522437629" className="text-brand-green text-sm">
              Give me a call
            </a>
          </div>
          
          <div className="card p-6 flex flex-col items-center text-center no-hover">
            <div className="mb-4">
              <div className="p-3 bg-brand-green/20 rounded-lg">
                <MapPin className="text-brand-green" size={24} />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-brand-light mb-1">Location</h3>
            <p className="text-brand-light/70 mb-2">Copenhagen, DK</p>
            <p className="text-brand-green text-sm">
              Remote services worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
