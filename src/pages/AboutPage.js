import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

/**
 * Página "Sobre Nós".
 * Exibe informações sobre a missão, visão, valores e objetivos da Session Fit.
 * @component
 * @returns {JSX.Element} A estrutura da página de sobre nós.
 */
function AboutPage() {
  return (
      <Container className="text-center mt-4">
        {/* Título principal da página */}
        <h1>Sobre Nós</h1>
        
        {/* Descrição sobre a Session Fit */}
        <p>
          A <span translate="no">Session Fit</span> nasceu com a missão de transformar vidas por meio do 
          bem-estar e da saúde. Oferecemos treinos personalizados, equipamentos modernos e um ambiente 
          acolhedor para ajudá-lo a alcançar seus objetivos. Seja força, resistência ou equilíbrio, estamos 
          aqui para guiá-lo em sua jornada fitness.
        </p>

        {/* Visão e Valores */}
        <Row>
          {/* Coluna com a Visão */}
          <Col md={6}>
            <h2>Nossa Visão</h2>
            <p>
              Ser referência no mercado fitness, promovendo saúde e qualidade de vida com responsabilidade e inovação.
            </p>
          </Col>

          {/* Coluna com os Valores */}
          <Col md={6}>
            <h2>Nossos Valores</h2>
            <ul>
              <li>Compromisso com resultados</li>
              <li>Atendimento de excelência</li>
              <li>Respeito à diversidade</li>
              <li>Inovação contínua</li>
            </ul>
          </Col>
        </Row>
      </Container>
    );
}

export default AboutPage;
