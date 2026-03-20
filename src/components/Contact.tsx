
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-bde-void">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center mb-4">
              <div className="h-1 w-12 bg-bde-green mr-4"></div>
              <span className="eyebrow text-bde-green">get_in_touch</span>
              <div className="h-1 w-12 bg-bde-green ml-4"></div>
            </div>
          </div>
          <h2 className="section-title">Let's Discuss Your Project</h2>
          <p className="font-display font-normal text-bde-violet-soft/[0.55] max-w-2xl mx-auto text-[14px] leading-body">
            Have a question or want to explore how we can work together? Reach out and I'll respond as soon as possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-bde-deep border border-bde-violet/15 rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:shadow-bde-violet/10">
            <div className="mb-4">
              <div className="p-3 bg-bde-violet/[0.12] rounded-lg">
                <Mail className="text-bde-violet" size={24} />
              </div>
            </div>
            <h3 className="font-heading font-medium text-base text-bde-frost mb-1">Email</h3>
            <p className="font-display font-normal text-bde-violet-muted text-[13px] mb-2 break-all">natashanorsker@bigdataenergy.tech</p>
            <a href="mailto:natashanorsker@bigdataenergy.tech" className="font-display font-normal text-bde-violet text-[12px]">
              Send an email
            </a>
          </div>
          
          <div className="bg-bde-deep border border-bde-violet/15 rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:shadow-bde-violet/10">
            <div className="mb-4">
              <a href="tel:+4522437629" className="block">
                <div className="p-3 bg-bde-violet/[0.12] rounded-lg hover:bg-bde-violet/20 transition-colors">
                  <Phone className="text-bde-violet" size={24} />
                </div>
              </a>
            </div>
            <h3 className="font-heading font-medium text-base text-bde-frost mb-1">Phone</h3>
            <p className="font-display font-normal text-bde-violet-muted text-[13px] mb-2">+45 22 43 76 29</p>
            <a href="tel:+4522437629" className="font-display font-normal text-bde-violet text-[12px]">
              Give me a call
            </a>
          </div>
          
          <div className="bg-bde-deep border border-bde-violet/15 rounded-xl p-6 flex flex-col items-center text-center">
            <div className="mb-4">
              <div className="p-3 bg-bde-violet/[0.12] rounded-lg">
                <MapPin className="text-bde-violet" size={24} />
              </div>
            </div>
            <h3 className="font-heading font-medium text-base text-bde-frost mb-1">Location</h3>
            <p className="font-display font-normal text-bde-violet-muted text-[13px] mb-2">Copenhagen, DK</p>
            <p className="font-display font-normal text-bde-green text-[12px]">
              Remote services worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
