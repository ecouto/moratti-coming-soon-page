
import { Mail, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511957822750", "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:contato@casamoratti.com.br";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-pink-50 to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full gradient-moratti-light opacity-30 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full gradient-moratti-light opacity-30 animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full gradient-moratti-light opacity-20 animate-float"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Logo */}
          <div className="animate-fade-in">
            <img 
              src="/lovable-uploads/daa6b8d5-0b6a-4a6a-8b41-00d4fb30bfcc.png" 
              alt="Casa Moratti Logo" 
              className="w-64 h-auto mx-auto mb-16 hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Main heading */}
          <div className="animate-fade-in delay-200">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-poppins font-extrabold text-gradient-moratti mb-4 tracking-wide">
              Em Breve
            </h1>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground mb-6">
              <Clock className="w-5 h-5" />
              <span className="text-lg font-light">Estamos preparando algo especial para você</span>
            </div>
          </div>

          {/* Description */}
          <div className="animate-fade-in delay-300">
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Nossa nova experiência está sendo cuidadosamente desenvolvida. 
              Enquanto isso, entre em contato conosco para mais informações.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto animate-fade-in delay-500">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full gradient-moratti flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Email</h3>
                  <p className="text-slate-600 mb-4">Entre em contato por email</p>
                  <Button 
                    onClick={handleEmailClick}
                    className="w-full gradient-moratti hover:opacity-90 transition-opacity text-white font-medium"
                  >
                    contato@casamoratti.com.br
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full gradient-moratti flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">WhatsApp</h3>
                  <p className="text-slate-600 mb-4">Fale conosco no WhatsApp</p>
                  <Button 
                    onClick={handleWhatsAppClick}
                    className="w-full gradient-moratti hover:opacity-90 transition-opacity text-white font-medium"
                  >
                    (11) 95782-2750
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Footer message */}
          <div className="animate-fade-in delay-700">
            <div className="text-slate-500 text-sm mt-8 space-y-2">
              <p>© 2025 Casa Moratti. Todos os direitos reservados.</p>
              <div className="flex justify-center space-x-4 text-xs">
                <Link 
                  to="/termos-de-uso" 
                  className="hover:text-slate-700 transition-colors underline"
                >
                  Termos de Uso
                </Link>
                <span>•</span>
                <Link 
                  to="/politica-de-privacidade" 
                  className="hover:text-slate-700 transition-colors underline"
                >
                  Política de Privacidade
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
