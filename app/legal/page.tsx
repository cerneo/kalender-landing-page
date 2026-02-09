"use client"

import { useState } from "react"
import { KalenderLogo } from "@/components/kalender-logo"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

type Tab = "termos" | "privacidade"

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState<Tab>("termos")

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <KalenderLogo width={32} height={32} />
            <span className="text-lg font-bold text-gray-900">Kalender</span>
          </a>
          <Button variant="ghost" size="sm" className="text-gray-600" onClick={() => window.location.href = "/"}>
            <ArrowLeft className="h-4 w-4 mr-1.5" />
            Voltar
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Tab Navigation */}
        <div className="flex gap-1 mb-10 bg-gray-100 p-1 rounded-lg w-fit">
          <button
            onClick={() => setActiveTab("termos")}
            className={`px-5 py-2.5 rounded-md text-sm font-medium transition-all ${
              activeTab === "termos"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Termos de Uso
          </button>
          <button
            onClick={() => setActiveTab("privacidade")}
            className={`px-5 py-2.5 rounded-md text-sm font-medium transition-all ${
              activeTab === "privacidade"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Política de Privacidade
          </button>
        </div>

        {activeTab === "termos" && (
          <article className="prose prose-gray max-w-none">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Termos de Uso</h1>
            <p className="text-sm text-gray-400 mb-8">Última atualização: 8 de fevereiro de 2026</p>

            <h2>1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar a plataforma Kalender (&quot;Plataforma&quot;), disponibilizada pela Appvalue Tecnologia LTDA (&quot;Kalender&quot;, &quot;nós&quot;, &quot;nosso&quot;), você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não utilize a Plataforma.
            </p>

            <h2>2. Descrição do Serviço</h2>
            <p>
              A Kalender é uma plataforma de gestão e agendamento inteligente para negócios de serviços. Oferecemos funcionalidades que incluem, mas não se limitam a: agendamento online, gestão financeira, CRM, comissões, fidelização, estoque, automação de atendimento com inteligência artificial e integrações com serviços de terceiros.
            </p>

            <h2>3. Cadastro e Conta</h2>
            <p>Para utilizar a Plataforma, você deve:</p>
            <ul>
              <li>Ter no mínimo 18 anos de idade ou capacidade legal;</li>
              <li>Fornecer informações verdadeiras, completas e atualizadas no cadastro;</li>
              <li>Manter a confidencialidade de suas credenciais de acesso;</li>
              <li>Notificar-nos imediatamente sobre qualquer uso não autorizado de sua conta.</li>
            </ul>
            <p>Você é responsável por todas as atividades realizadas em sua conta.</p>

            <h2>4. Planos e Pagamento</h2>
            <ul>
              <li><strong>Teste grátis:</strong> Oferecemos um período de teste gratuito de 14 dias. Um cartão de crédito é solicitado no cadastro, mas a cobrança só ocorre após o término do período de teste.</li>
              <li><strong>Assinatura:</strong> Após o período de teste, o acesso requer assinatura de um plano pago. Os preços estão disponíveis na página de preços e podem ser alterados com aviso prévio de 30 dias.</li>
              <li><strong>Cobrança:</strong> As cobranças são recorrentes (mensal ou anual, conforme o plano escolhido) e processadas automaticamente.</li>
              <li><strong>Cancelamento:</strong> Você pode cancelar sua assinatura a qualquer momento. O acesso permanece ativo até o fim do período já pago. Não há multa por cancelamento.</li>
              <li><strong>Reembolso:</strong> Planos mensais não são reembolsáveis. Planos anuais podem ser reembolsados proporcionalmente nos primeiros 30 dias.</li>
            </ul>

            <h2>5. Uso Aceitável</h2>
            <p>Você concorda em não utilizar a Plataforma para:</p>
            <ul>
              <li>Violar leis ou regulamentos aplicáveis;</li>
              <li>Transmitir conteúdo ilícito, difamatório ou que viole direitos de terceiros;</li>
              <li>Tentar acessar áreas restritas ou comprometer a segurança da Plataforma;</li>
              <li>Utilizar meios automatizados para extrair dados (scraping);</li>
              <li>Revender ou sublicenciar o acesso à Plataforma sem autorização.</li>
            </ul>

            <h2>6. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo da Plataforma, incluindo marca, logotipo, software, design, textos e funcionalidades, é de propriedade da Kalender e protegido por leis de propriedade intelectual. Você não adquire nenhum direito de propriedade sobre a Plataforma ou seu conteúdo.
            </p>

            <h2>7. Seus Dados</h2>
            <p>
              Você mantém a propriedade de todos os dados que inserir na Plataforma. Ao utilizar nosso serviço, você nos concede uma licença limitada para processar, armazenar e exibir seus dados exclusivamente para a prestação do serviço. Você pode exportar e solicitar a exclusão de seus dados a qualquer momento.
            </p>

            <h2>8. Disponibilidade e Suporte</h2>
            <ul>
              <li>Nos esforçamos para manter a Plataforma disponível 24/7, mas não garantimos disponibilidade ininterrupta.</li>
              <li>Manutenções programadas serão comunicadas com antecedência.</li>
              <li>O nível de suporte depende do plano contratado.</li>
            </ul>

            <h2>9. Limitação de Responsabilidade</h2>
            <p>
              A Kalender não se responsabiliza por danos indiretos, incidentais, especiais ou consequenciais decorrentes do uso ou impossibilidade de uso da Plataforma. Nossa responsabilidade total está limitada ao valor pago nos últimos 12 meses de assinatura.
            </p>

            <h2>10. Modificações dos Termos</h2>
            <p>
              Podemos atualizar estes Termos periodicamente. Alterações significativas serão comunicadas por email ou notificação na Plataforma com antecedência mínima de 30 dias. O uso continuado após as alterações constitui aceitação dos novos termos.
            </p>

            <h2>11. Rescisão</h2>
            <p>
              Podemos suspender ou encerrar sua conta caso você viole estes Termos, com notificação prévia quando possível. Você pode encerrar sua conta a qualquer momento nas configurações da Plataforma.
            </p>

            <h2>12. Lei Aplicável e Foro</h2>
            <p>
              Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca de Curitiba, Estado do Paraná, para dirimir quaisquer questões decorrentes destes Termos.
            </p>

            <h2>13. Contato</h2>
            <p>
              Para dúvidas sobre estes Termos, entre em contato pelo email: <a href="mailto:contato@kalender.com.br" className="text-primary hover:underline">contato@kalender.com.br</a>
            </p>
          </article>
        )}

        {activeTab === "privacidade" && (
          <article className="prose prose-gray max-w-none">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Política de Privacidade</h1>
            <p className="text-sm text-gray-400 mb-8">Última atualização: 8 de fevereiro de 2026</p>

            <p>
              A Appvalue Tecnologia LTDA (&quot;Kalender&quot;) está comprometida com a proteção dos dados pessoais de seus usuários, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018).
            </p>

            <h2>1. Dados que Coletamos</h2>

            <h3>1.1 Dados fornecidos por você</h3>
            <ul>
              <li><strong>Dados cadastrais:</strong> nome, email, telefone, CPF/CNPJ, endereço do estabelecimento;</li>
              <li><strong>Dados do negócio:</strong> nome do estabelecimento, serviços oferecidos, profissionais, horários de funcionamento;</li>
              <li><strong>Dados financeiros:</strong> informações para processamento de pagamento (processados por nosso parceiro Stripe);</li>
              <li><strong>Dados de clientes:</strong> informações dos clientes de seu negócio que você cadastrar na plataforma.</li>
            </ul>

            <h3>1.2 Dados coletados automaticamente</h3>
            <ul>
              <li><strong>Dados de uso:</strong> logs de acesso, funcionalidades utilizadas, horários de uso;</li>
              <li><strong>Dados técnicos:</strong> endereço IP, tipo de navegador, sistema operacional, resolução de tela;</li>
              <li><strong>Cookies:</strong> utilizamos cookies essenciais para funcionamento da plataforma e cookies analíticos para melhorar nossos serviços.</li>
            </ul>

            <h2>2. Como Utilizamos seus Dados</h2>
            <ul>
              <li>Prestar e manter os serviços contratados;</li>
              <li>Processar pagamentos e gerenciar assinaturas;</li>
              <li>Enviar notificações transacionais (confirmações, lembretes);</li>
              <li>Melhorar e personalizar a experiência na plataforma;</li>
              <li>Oferecer suporte técnico;</li>
              <li>Cumprir obrigações legais e regulatórias;</li>
              <li>Enviar comunicações de marketing (com seu consentimento).</li>
            </ul>

            <h2>3. Base Legal para o Tratamento</h2>
            <p>Tratamos seus dados com base nas seguintes hipóteses legais da LGPD:</p>
            <ul>
              <li><strong>Execução de contrato:</strong> para prestar o serviço contratado;</li>
              <li><strong>Consentimento:</strong> para comunicações de marketing;</li>
              <li><strong>Legítimo interesse:</strong> para melhorias do serviço e segurança;</li>
              <li><strong>Obrigação legal:</strong> para cumprimento de exigências fiscais e regulatórias.</li>
            </ul>

            <h2>4. Compartilhamento de Dados</h2>
            <p>Seus dados podem ser compartilhados com:</p>
            <ul>
              <li><strong>Stripe:</strong> para processamento de pagamentos;</li>
              <li><strong>Provedores de infraestrutura:</strong> para hospedagem e operação da plataforma;</li>
              <li><strong>Integrações autorizadas:</strong> Google Calendar, WhatsApp Business, quando habilitadas por você;</li>
              <li><strong>Autoridades competentes:</strong> quando exigido por lei ou ordem judicial.</li>
            </ul>
            <p>Não vendemos seus dados pessoais a terceiros.</p>

            <h2>5. Armazenamento e Segurança</h2>
            <ul>
              <li>Seus dados são armazenados em servidores seguros com criptografia em trânsito (TLS) e em repouso;</li>
              <li>Utilizamos arquitetura multi-tenant com isolamento de dados entre clientes;</li>
              <li>Autenticação com SSO/Keycloak e credenciais criptografadas;</li>
              <li>Backups regulares com política de retenção definida;</li>
              <li>Monitoramento contínuo de segurança e acesso.</li>
            </ul>

            <h2>6. Retenção de Dados</h2>
            <ul>
              <li><strong>Conta ativa:</strong> dados são mantidos enquanto sua conta estiver ativa;</li>
              <li><strong>Após cancelamento:</strong> dados são mantidos por 90 dias para possível reativação, após o que são excluídos;</li>
              <li><strong>Dados fiscais:</strong> mantidos por 5 anos conforme legislação tributária brasileira;</li>
              <li><strong>Backup:</strong> dados em backup são eliminados dentro de 30 dias após exclusão da conta.</li>
            </ul>

            <h2>7. Seus Direitos (LGPD)</h2>
            <p>Você tem direito a:</p>
            <ul>
              <li>Confirmar a existência de tratamento de seus dados;</li>
              <li>Acessar seus dados pessoais;</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
              <li>Solicitar anonimização, bloqueio ou eliminação de dados desnecessários;</li>
              <li>Solicitar portabilidade dos dados;</li>
              <li>Revogar consentimento a qualquer momento;</li>
              <li>Solicitar exclusão de dados pessoais tratados com base no consentimento.</li>
            </ul>
            <p>
              Para exercer seus direitos, entre em contato pelo email: <a href="mailto:privacidade@kalender.com.br" className="text-primary hover:underline">privacidade@kalender.com.br</a>
            </p>

            <h2>8. Cookies</h2>
            <p>Utilizamos os seguintes tipos de cookies:</p>
            <ul>
              <li><strong>Essenciais:</strong> necessários para o funcionamento da plataforma (autenticação, sessão);</li>
              <li><strong>Analíticos:</strong> para entender como você usa a plataforma e melhorar nossos serviços (Vercel Analytics);</li>
              <li><strong>Funcionais:</strong> para lembrar suas preferências (idioma, tema).</li>
            </ul>
            <p>Não utilizamos cookies de publicidade ou rastreamento de terceiros.</p>

            <h2>9. Dados de Clientes do seu Negócio</h2>
            <p>
              Quando você cadastra dados de clientes do seu negócio na Kalender, você atua como <strong>Controlador</strong> desses dados e nós como <strong>Operador</strong>. Você é responsável por garantir base legal adequada para o tratamento desses dados e informar seus clientes sobre o uso da plataforma.
            </p>

            <h2>10. Transferência Internacional</h2>
            <p>
              Alguns de nossos provedores de infraestrutura podem estar localizados fora do Brasil. Nesses casos, garantimos que as transferências ocorram com nível de proteção adequado, conforme a LGPD.
            </p>

            <h2>11. Menores de Idade</h2>
            <p>
              A Kalender não é destinada a menores de 18 anos. Não coletamos intencionalmente dados de menores. Se identificarmos dados de menores, estes serão excluídos.
            </p>

            <h2>12. Alterações nesta Política</h2>
            <p>
              Esta política pode ser atualizada periodicamente. Alterações significativas serão comunicadas por email ou notificação na plataforma. A data de última atualização será sempre indicada no topo deste documento.
            </p>

            <h2>13. Encarregado de Dados (DPO)</h2>
            <p>
              Para questões relacionadas à proteção de dados pessoais, entre em contato com nosso Encarregado de Proteção de Dados:<br />
              Email: <a href="mailto:privacidade@kalender.com.br" className="text-primary hover:underline">privacidade@kalender.com.br</a>
            </p>

            <h2>14. Autoridade Nacional de Proteção de Dados</h2>
            <p>
              Caso entenda que o tratamento de seus dados pessoais viola a LGPD, você tem o direito de apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD) — <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.gov.br/anpd</a>.
            </p>
          </article>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          <p>&copy; 2026 Kalender. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
