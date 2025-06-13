import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsOfUse = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-pink-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao início
          </Button>
          
          <div className="text-center mb-8">
            <img 
              src="/lovable-uploads/daa6b8d5-0b6a-4a6a-8b41-00d4fb30bfcc.png" 
              alt="Casa Moratti Logo" 
              className="w-32 h-auto mx-auto mb-4"
            />
            <h1 className="text-4xl font-bold text-gradient-moratti mb-2">
              Termos de Uso
            </h1>
            <p className="text-slate-600">Última atualização: Janeiro de 2025</p>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 space-y-6 text-left">
          
          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">1. Aceitação dos Termos</h2>
            <p className="text-slate-600 leading-relaxed">
              Ao acessar e utilizar o site da Casa Moratti ("nós", "nosso" ou "Empresa"), 
              você concorda em cumprir e estar vinculado a estes Termos de Uso. 
              Se você não concordar com qualquer parte destes termos, não deverá usar nosso site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">2. Uso do Site</h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Você pode usar nosso site para fins legítimos e de acordo com estes Termos. Você concorda em não usar o site:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>De qualquer forma que viole qualquer lei ou regulamento nacional ou internacional aplicável</li>
              <li>Para fins comerciais não autorizados</li>
              <li>Para causar danos ao site ou interferir em seu funcionamento</li>
              <li>Para coletar informações de outros usuários sem autorização</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">3. Propriedade Intelectual</h2>
            <p className="text-slate-600 leading-relaxed">
              Todo o conteúdo presente neste site, incluindo textos, gráficos, logotipos, imagens, 
              e software, é propriedade da Casa Moratti ou de seus fornecedores de conteúdo e está 
              protegido pelas leis brasileiras e internacionais de direitos autorais e propriedade intelectual.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">4. Limitação de Responsabilidade</h2>
            <p className="text-slate-600 leading-relaxed">
              A Casa Moratti não se responsabiliza por quaisquer danos diretos, indiretos, incidentais, 
              especiais ou consequenciais decorrentes do uso ou da incapacidade de usar este site, 
              mesmo que tenhamos sido avisados da possibilidade de tais danos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">5. Modificações dos Termos</h2>
            <p className="text-slate-600 leading-relaxed">
              Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. 
              As modificações entrarão em vigor imediatamente após sua publicação no site. 
              É sua responsabilidade revisar periodicamente estes termos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">6. Lei Aplicável e Jurisdição</h2>
            <p className="text-slate-600 leading-relaxed">
              Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. 
              Qualquer disputa decorrente destes termos será submetida à jurisdição exclusiva 
              dos tribunais competentes do Brasil, em conformidade com o Código de Defesa do Consumidor (Lei 8.078/90) 
              e o Marco Civil da Internet (Lei 12.965/14).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">7. Contato</h2>
            <p className="text-slate-600 leading-relaxed">
              Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco:
            </p>
            <div className="mt-3 text-slate-600">
              <p><strong>Email:</strong> contato@casamoratti.com.br</p>
              <p><strong>WhatsApp:</strong> (11) 95782-2750</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">8. Disposições Gerais</h2>
            <p className="text-slate-600 leading-relaxed">
              Se qualquer disposição destes Termos for considerada inválida ou inexequível, 
              as disposições restantes permanecerão em pleno vigor e efeito. 
              Estes Termos constituem o acordo completo entre você e a Casa Moratti 
              em relação ao uso do site.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;