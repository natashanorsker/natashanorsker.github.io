
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would send this data to your backend or email service
    console.log("Form submitted:", formData);
    
    // Show success toast
    toast({
      title: "Message sent successfully!",
      description: "I'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

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
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8">
            <div className="card flex p-6">
              <div className="mr-4">
                <div className="p-3 bg-brand-green/20 rounded-lg">
                  <Mail className="text-brand-green" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-light mb-1">Email</h3>
                <p className="text-brand-light/70">hello@bigdataenergy.com</p>
                <a href="mailto:hello@bigdataenergy.com" className="text-brand-green text-sm">
                  Send an email
                </a>
              </div>
            </div>
            
            <div className="card flex p-6">
              <div className="mr-4">
                <div className="p-3 bg-brand-green/20 rounded-lg">
                  <Phone className="text-brand-green" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-light mb-1">Phone</h3>
                <p className="text-brand-light/70">+1 (555) 123-4567</p>
                <a href="tel:+15551234567" className="text-brand-green text-sm">
                  Give me a call
                </a>
              </div>
            </div>
            
            <div className="card flex p-6">
              <div className="mr-4">
                <div className="p-3 bg-brand-green/20 rounded-lg">
                  <MapPin className="text-brand-green" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-light mb-1">Location</h3>
                <p className="text-brand-light/70">San Francisco, CA</p>
                <p className="text-brand-green text-sm">
                  Remote services worldwide
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="card p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="text-brand-light/80 text-sm mb-1 block">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-brand-teal/30 border-brand-teal/20 text-brand-light placeholder:text-brand-light/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="text-brand-light/80 text-sm mb-1 block">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-brand-teal/30 border-brand-teal/20 text-brand-light placeholder:text-brand-light/50"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="text-brand-light/80 text-sm mb-1 block">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-brand-teal/30 border-brand-teal/20 text-brand-light placeholder:text-brand-light/50"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="text-brand-light/80 text-sm mb-1 block">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-brand-teal/30 border-brand-teal/20 text-brand-light placeholder:text-brand-light/50"
                />
              </div>
              
              <Button type="submit" className="bg-brand-green hover:bg-brand-green/80 text-black font-medium w-full">
                Send Message
                <Send className="ml-2" size={16} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
