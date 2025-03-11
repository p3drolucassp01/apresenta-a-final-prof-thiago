import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importando imagens
import photo01 from '../assets/photo_01.jpg';
import photo02 from '../assets/photo_02.jpg';
import photo03 from '../assets/photo_03.jpg';

/**
 * Página do Espaço do Cliente da Session Fit.
 * Apresenta os benefícios exclusivos oferecidos aos alunos da academia.
 * @component
 * @returns {JSX.Element} Estrutura da página de benefícios ao cliente.
 */
function EspacoClientePage() {
  return (
    <Container className="mt-4">
      {/* Título e introdução */}
      <Row className="text-center">
        <Col>
          <h1>Bem-vindo ao Espaço do Cliente</h1>
          <p>Descubra todos os benefícios exclusivos que a Session Fit oferece para você!</p>
        </Col>
      </Row>

      {/* Seção de benefícios */}
      <Row className="mt-5">
        <Col md={4}>
          <Card className="shadow-lg" style={{ minHeight: '400px' }}>
            <Card.Img 
              variant="top" 
              src={photo01} 
              alt="Treinamento Personalizado" 
              style={{ height: '200px', objectFit: 'cover' }} 
            />
            <Card.Body>
              <Card.Title>Treinamento Personalizado</Card.Title>
              <Card.Text>
                Planos de treino exclusivos, adaptados ao seu perfil e objetivos, com acompanhamento profissional.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow-lg" style={{ minHeight: '400px' }}>
            <Card.Img 
              variant="top" 
              src={photo02} 
              alt="Nutrição e Bem-estar" 
              style={{ height: '200px', objectFit: 'cover' }} 
            />
            <Card.Body>
              <Card.Title>Nutrição e Bem-estar</Card.Title>
              <Card.Text>
                Acompanhamento nutricional para potencializar seus resultados e melhorar sua qualidade de vida.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow-lg" style={{ minHeight: '400px' }}>
            <Card.Img 
              variant="top" 
              src={photo03} 
              alt="Área de Relaxamento" 
              style={{ height: '200px', objectFit: 'cover' }} 
            />
            <Card.Body>
              <Card.Title>Área de Relaxamento</Card.Title>
              <Card.Text>
                Espaço exclusivo para recuperação muscular, incluindo massagem, sauna e crioterapia.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Seção de mais benefícios */}
      <Row className="mt-5 text-center">
        <Col>
          <h2>Mais benefícios para você!</h2>
          <p>
            Além desses serviços, você tem acesso a aulas coletivas, eventos exclusivos e um aplicativo completo para monitorar seu progresso.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default EspacoClientePage;
