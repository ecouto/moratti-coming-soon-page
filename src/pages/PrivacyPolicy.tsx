import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
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
              Política de Privacidade
            </h1>
            <p className="text-slate-600">Última atualização: Janeiro de 2025</p>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 space-y-6 text-left">
          
          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">1. Informações Gerais</h2>
            <p className="text-slate-600 leading-relaxed">
              A Casa Moratti ("nós", "nosso" ou "Empresa") está comprometida em proteger 
              a privacidade e os dados pessoais de nossos visitantes e usuários. 
              Esta Política de Privacidade descreve como coletamos, usamos, armazenamos 
              e protegemos suas informações pessoais, em conformidade com a 
              Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018) e demais 
              legislações brasileiras aplicáveis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">2. Dados Coletados</h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Podemos coletar as seguintes categorias de dados pessoais:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li><strong>Dados de Navegação:</strong> Endereço IP, tipo de navegador, páginas visitadas, tempo de permanência</li>
              <li><strong>Dados de Contato:</strong> Quando você nos contata voluntariamente por email ou WhatsApp</li>
              <li><strong>Cookies e Tecnologias Similares:</strong> Para melhorar a experiência do usuário</li>
              <li><strong>Dados de Analytics:</strong> Para entender como nosso site é utilizado</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">3. Finalidade do Tratamento</h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Utilizamos seus dados pessoais para as seguintes finalidades:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Manter e melhorar o funcionamento do nosso site</li>
              <li>Responder às suas consultas e solicitações</li>
              <li>Analisar o uso do site e melhorar nossos serviços</li>
              <li>Cumprir obrigações legais e regulamentares</li>
              <li>Exercer direitos em processos judiciais, administrativos ou arbitrais</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">4. Base Legal</h2>
            <p className="text-slate-600 leading-relaxed">
              O tratamento de seus dados pessoais é realizado com base nas seguintes hipóteses 
              legais previstas na LGPD: consentimento, legítimo interesse, execução de contrato, 
              cumprimento de obrigação legal e exercício regular de direitos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">5. Compartilhamento de Dados</h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros, 
              exceto nas seguintes situações:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Com prestadores de serviços que nos auxiliam na operação do site</li>
              <li>Quando exigido por lei ou ordem judicial</li>
              <li>Para proteger nossos direitos, propriedade ou segurança</li>
              <li>Com seu consentimento expresso</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">6. Cookies</h2>
            <p className="text-slate-600 leading-relaxed">
              Utilizamos cookies e tecnologias similares para melhorar sua experiência em nosso site. 
              Os cookies podem ser desabilitados nas configurações do seu navegador, 
              mas isso pode afetar algumas funcionalidades do site. 
              Para mais informações sobre nosso uso de cookies, consulte nossa Política de Cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">7. Seus Direitos</h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              De acordo com a LGPD, você possui os seguintes direitos:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Confirmação da existência de tratamento</li>
              <li>Acesso aos dados</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários</li>
              <li>Portabilidade dos dados</li>
              <li>Eliminação dos dados tratados com base no consentimento</li>
              <li>Revogação do consentimento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">8. Segurança dos Dados</h2>
            <p className="text-slate-600 leading-relaxed">
              Implementamos medidas técnicas e organizacionais adequadas para proteger 
              seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição. 
              No entanto, nenhuma transmissão pela internet é 100% segura, 
              e não podemos garantir segurança absoluta.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">9. Retenção de Dados</h2>
            <p className="text-slate-600 leading-relaxed">
              Mantemos seus dados pessoais pelo tempo necessário para cumprir as finalidades 
              para as quais foram coletados, respeitando os prazos legais de retenção. 
              Após esse período, os dados serão eliminados ou anonimizados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">10. Transferência Internacional</h2>
            <p className="text-slate-600 leading-relaxed">
              Alguns de nossos prestadores de serviços podem estar localizados fora do Brasil. 
              Nestes casos, garantimos que a transferência seja realizada em conformidade 
              com a LGPD e que sejam adotadas medidas adequadas de proteção.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">11. Menores de Idade</h2>
            <p className="text-slate-600 leading-relaxed">
              Nosso site não é direcionado a menores de 18 anos. 
              Não coletamos intencionalmente dados pessoais de menores. 
              Caso tomemos conhecimento de tal situação, tomaremos medidas para eliminar esses dados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">12. Alterações na Política</h2>
            <p className="text-slate-600 leading-relaxed">
              Podemos atualizar esta Política de Privacidade periodicamente. 
              Recomendamos que você a revise regularmente. 
              As alterações entrarão em vigor na data de publicação da versão atualizada.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">13. Encarregado de Dados (DPO)</h2>
            <p className="text-slate-600 leading-relaxed">
              Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento de dados pessoais, 
              entre em contato com nosso Encarregado de Dados através dos canais de contato abaixo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">14. Contato</h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Para exercer seus direitos ou esclarecer questões sobre esta Política de Privacidade:
            </p>
            <div className="text-slate-600 space-y-2">
              <p><strong>Email:</strong> contato@casamoratti.com.br</p>
              <p><strong>WhatsApp:</strong> (11) 95782-2750</p>
              <p><strong>Assunto:</strong> "Proteção de Dados Pessoais - LGPD"</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">15. Autoridade Nacional</h2>
            <p className="text-slate-600 leading-relaxed">
              Caso não esteja satisfeito com nossas respostas, você pode entrar em contato 
              com a Autoridade Nacional de Proteção de Dados (ANPD) através do site 
              <span className="font-medium"> www.gov.br/anpd</span>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;