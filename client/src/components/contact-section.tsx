import { Mail, Send } from "lucide-react";

export default function ContactSection() {
  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "jsyphn@gmail.com",
      href: "mailto:jsyphn@gmail.com"
    }
  ];

  const handleSendMessage = () => {
    // TODO: Implement contact form functionality
    console.log("Send message clicked");
  };


  return (
    <section id="contact" className="py-20 bg-gradient-to-t from-background to-secondary/20" data-testid="contact-section">
      <div className="container mx-auto px-6 text-center">
        <div className="fade-in-up mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-4" data-testid="contact-title">Let's Connect</h2>
          <p className="text-xl text-muted-foreground" data-testid="contact-subtitle">Ready to bring your ideas to life?</p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-8 rounded-lg fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="grid grid-cols-1 gap-6 mb-8" data-testid="contact-methods">
              {contactMethods.map((method, index) => (
                <div key={method.title} className="text-center" data-testid={`contact-method-${method.title.toLowerCase()}`}>
                  <div className="text-primary mb-3 flex justify-center">
                    {method.icon}
                  </div>
                  <h3 className="font-bold mb-2" data-testid={`contact-method-title-${method.title.toLowerCase()}`}>
                    {method.title}
                  </h3>
                  <a 
                    href={method.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    target={method.title === "Email" ? "_self" : "_blank"}
                    rel={method.title === "Email" ? "" : "noopener noreferrer"}
                    data-testid={`contact-method-link-${method.title.toLowerCase()}`}
                  >
                    {method.value}
                  </a>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center" data-testid="contact-actions">
              <button 
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-primary to-pink-500 text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center"
                data-testid="send-message-button"
              >
                <Send size={16} className="mr-2" />
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
