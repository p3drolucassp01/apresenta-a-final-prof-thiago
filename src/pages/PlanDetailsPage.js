import React, { useMemo } from 'react';
import QRCode from 'react-qr-code';
import { useLocation } from 'react-router-dom';
import { Card, ListGroup, Container, Row, Col, Button } from 'react-bootstrap';
import './Styles/PlanDetailsPage.css'; // Importação do CSS

// Imagens WEBP importadas de forma eficiente
import imgBasic from '../assets/plans/img_0.webp';
import imgPlus from '../assets/plans/img_1.webp';
import imgPremium from '../assets/plans/img_2.webp';


const planDetails = {
  basic: {
    title: 'Plano Básico',
    price: 'R$ 99/mês',
    benefits: [
      'Acesso à academia',
      'Horário livre',
      'Suporte básico',
    ],
    image: imgBasic,
  },
  plus: {
    title: 'Plano Plus',
    price: 'R$ 149/mês',
    benefits: [
      'Acesso total à academia',
      'Aulas em grupo',
      'Consultoria com treinador',
    ],
    image: imgPlus,
  },
  premium: {
    title: 'Plano Premium',
    price: 'R$ 199/mês',
    benefits: [
      'Acesso VIP à academia',
      'Personal Trainer dedicado',
      'Suporte nutricional',
    ],
    image: imgPremium,
  },
};

const PlanInfo = ({ title, price, benefits, image }) => (
    <Col xs="12" className="text-center">
      <img
        src={image}
        alt={title}
        className="img-fluid rounded-3 shadow-sm"
      />
      <h2 className="fw-bold mt-3">{title}</h2>
      <p className="fs-4 text-primary card-price">{price}</p>
      <ListGroup variant="flush" className="card-benefits">
        {benefits.map((benefit, index) => (
          <ListGroup.Item key={index} className="border-0">
            <span role="img" aria-label="check">✅</span> {benefit}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Col>
  );
  
  function PlanDetailsPage() {
    const location = useLocation();
    const plan = location.state?.plan;
  
    // Condicional para verificar a existência do plano
    const isValidPlan = plan && planDetails[plan];
  
    // Geração do conteúdo do QR Code com useMemo
    const qrCodeData = useMemo(() => {
        if (isValidPlan) {
          return "https://w.app/sessionfit"; // Link direto para o vídeo
        }
        return '';
      }, [plan]);
  
    // Mensagem de erro em caso de plano não encontrado
    if (!isValidPlan) {
      return (
        <Container className="mt-5 text-center">
          <h2 className="text-danger">Plano não encontrado!</h2>
        </Container>
      );
    }
  
    const { title, price, benefits, image } = planDetails[plan];
  
    return (
      <div className="plan-details-page">
        <Container className="mt-5">
          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <Card className="shadow-lg border-0 rounded-3 overflow-hidden">
                <Card.Body className="p-4">
                  <Row className="align-items-center">
                    <PlanInfo title={title} price={price} benefits={benefits} image={image} />
                  </Row>
                </Card.Body>
                <Card.Footer className="card-footer">
                  <div className="qr-code">
                    <p className="mb-3">Escaneie o QR Code abaixo para mais informações:</p>
                    <QRCode value={qrCodeData} size={128} />
                  </div>
                  <Button variant="primary" size="lg" className="w-100 mt-3">
                    Assine agora
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

export default PlanDetailsPage;
