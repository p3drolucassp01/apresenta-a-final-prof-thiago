import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Página de informações para interessados em se tornar franqueados da Session Fit.
 * @component
 * @returns {JSX.Element} Retorna a estrutura da página para franqueados.
 */
function FranqueadoPage() {
  return (
    <Container className="mt-4">
      <Row className="text-center">
        <Col>
          <h1>Seja um Franqueado Session Fit</h1>
          <p>Expanda sua visão de negócios e faça parte da rede de academias que transforma vidas.</p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={6}>
          <Card className="shadow-lg p-4">
            <h2>Por que ser um franqueado?</h2>
            <p>
              A Session Fit oferece um modelo de negócios consolidado, suporte especializado e uma marca reconhecida no mercado fitness.
              Com um mercado em constante crescimento, você terá toda a estrutura necessária para o sucesso.
            </p>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-lg p-4">
            <h2>O que oferecemos?</h2>
            <ul>
              <li>Treinamento e capacitação completa</li>
              <li>Suporte em marketing e operações</li>
              <li>Fornecimento de equipamentos de alta qualidade</li>
              <li>Modelo de gestão eficiente e lucrativo</li>
            </ul>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={12} className="text-center">
          <h2>Passos para se tornar um franqueado</h2>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm p-3">
            <h4>1. Cadastro</h4>
            <p>Preencha o formulário de interesse e aguarde o contato da nossa equipe.</p>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm p-3">
            <h4>2. Análise e Reunião</h4>
            <p>Realizamos uma análise do seu perfil e agendamos uma reunião para apresentar o modelo de negócio.</p>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm p-3">
            <h4>3. Aprovação e Treinamento</h4>
            <p>Com a aprovação, iniciamos o treinamento e orientamos sobre os próximos passos para a abertura da sua unidade.</p>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5 text-center">
        <Col>
          <h2>Interessado? Vamos conversar!</h2>
          <p>Preencha o formulário e nossa equipe entrará em contato para tirar todas as suas dúvidas.</p>
          <Button variant="primary" href="/contato">Quero ser um franqueado</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default FranqueadoPage;
