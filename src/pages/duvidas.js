import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap'; // Importando os componentes do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando o CSS do Bootstrap

/**
 * Página de Perguntas Frequentes (FAQ).
 * Exibe as respostas para as dúvidas mais comuns dos usuários.
 * @component
 * @returns {JSX.Element} A estrutura da página de perguntas frequentes.
 */
function FAQPage() {
  return (
    <Container className="text-center mt-4">
      {/* Título e descrição da página */}
      <h1>Dúvidas Frequentes</h1>
      <p>Confira as respostas para as perguntas mais comuns. Caso não encontre sua dúvida, entre em contato conosco.</p>
      
      {/* Seção de perguntas e respostas */}
      <Row className="mt-4">
        <Col md={12}>
          <Accordion>
            {/* Pergunta 1 */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>Qual é o horário de funcionamento?</Accordion.Header>
              <Accordion.Body>
                Nosso horário de funcionamento é de segunda a sexta, das 8h às 18h, e aos sábados, das 9h às 13h.
              </Accordion.Body>
            </Accordion.Item>
            {/* Pergunta 2 */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>Como posso entrar em contato com o suporte?</Accordion.Header>
              <Accordion.Body>
                Você pode entrar em contato com o suporte pelo telefone (11) 1234-5678 ou pelo email suporte@sessionfit.com.
              </Accordion.Body>
            </Accordion.Item>
            {/* Pergunta 3 */}
            <Accordion.Item eventKey="2">
              <Accordion.Header>Quais são as formas de pagamento aceitas?</Accordion.Header>
              <Accordion.Body>
                Aceitamos pagamentos via cartão de crédito, débito, PIX e boleto bancário.
              </Accordion.Body>
            </Accordion.Item>
            {/* Pergunta 4 */}
            <Accordion.Item eventKey="3">
              <Accordion.Header>É necessário agendar para atendimento presencial?</Accordion.Header>
              <Accordion.Body>
                Sim, recomendamos o agendamento para garantir um atendimento personalizado e sem filas.
              </Accordion.Body>
            </Accordion.Item>
            {/* Pergunta 5 */}
            <Accordion.Item eventKey="4">
              <Accordion.Header>Como faço para alterar meus dados cadastrais?</Accordion.Header>
              <Accordion.Body>
                Para alterar seus dados cadastrais, entre na sua conta no nosso site e acesse a seção "Meu Perfil".
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}

export default FAQPage;
