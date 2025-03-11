import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Alert, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { FaRunning, FaDumbbell, FaHeartbeat, FaRegLifeRing } from 'react-icons/fa';
import { GiWeightLiftingUp, GiMuscleUp } from 'react-icons/gi';
import './Styles/CalculoMMC_Dica.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function CalculoMMC_Dicas() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [idade, setIdade] = useState('');
  const [resultado, setResultado] = useState(null);
  const [alertMessage, setAlertMessage] = useState('');
  const [showHelp, setShowHelp] = useState(false);

  const calcularMMC = () => {
    if (!peso || !altura || !idade) {
      setAlertMessage('Todos os campos devem ser preenchidos corretamente!');
      return;
    }

    const alturaM = altura / 100; // Converte para metros
    const imc = peso / (alturaM * alturaM); // Cálculo do IMC
    const mmc = (imc * idade) / 100; // Fórmula simplificada de cálculo do MMC

    setResultado(mmc.toFixed(2));
    setAlertMessage('');
  };

  const handleChange = (e, setter) => {
    setter(e.target.value);
    if (alertMessage) setAlertMessage('');
  };

  return (
    <Container className="calculo-mmc-container">
      <h1 className="text-center">Cálculo de Peso com MMC</h1>
      <p className="text-center">
        Complete as informações abaixo para calcular seu peso com base na Massa Muscular Magra (MMC) e receber
        dicas personalizadas!
      </p>
      <Row className="justify-content-center">
        <Col md={6} lg={4} className="calculo-mmc-col">
          <Card className="shadow-lg">
            <Card.Body>
              <Form>
                <Form.Group controlId="formPeso">
                  <Form.Label>Peso (kg)</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Digite seu peso"
                    value={peso}
                    onChange={(e) => handleChange(e, setPeso)}
                    isInvalid={alertMessage && !peso}
                  />
                  <Form.Control.Feedback type="invalid">Peso é obrigatório!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formAltura">
                  <Form.Label>Altura (cm)</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Digite sua altura em cm"
                    value={altura}
                    onChange={(e) => handleChange(e, setAltura)}
                    isInvalid={alertMessage && !altura}
                  />
                  <Form.Control.Feedback type="invalid">Altura é obrigatória!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formIdade">
                  <Form.Label>Idade</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Digite sua idade"
                    value={idade}
                    onChange={(e) => handleChange(e, setIdade)}
                    isInvalid={alertMessage && !idade}
                  />
                  <Form.Control.Feedback type="invalid">Idade é obrigatória!</Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" onClick={calcularMMC} className="mt-3 w-100">
                  Calcular MMC
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {alertMessage && (
          <Col md={12}>
            <Alert variant="danger" className="mt-3 text-center">{alertMessage}</Alert>
          </Col>
        )}

        {resultado && (
          <Col md={12} className="mt-4">
            <Alert variant="success">
              <h4>Massa Muscular Magra (MMC): {resultado} kg</h4>
              <p>Com base no seu cálculo, aqui estão algumas recomendações de treino:</p>
              <Row>
                <Col md={4}>
                  <Card className="mb-3">
                    <Card.Body>
                      <Card.Title>
                        <FaDumbbell /> Treino de Força
                      </Card.Title>
                      <Card.Text>
                        Foco em levantamento de pesos pesados e agachamentos. Ideal para aumentar sua massa muscular.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="mb-3">
                    <Card.Body>
                      <Card.Title>
                        <FaRunning /> Cardio
                      </Card.Title>
                      <Card.Text>
                        Corridas leves ou aulas de spinning podem aumentar sua resistência e melhorar a recuperação.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="mb-3">
                    <Card.Body>
                      <Card.Title>
                        <FaHeartbeat /> Treino Funcional
                      </Card.Title>
                      <Card.Text>
                        Exercícios funcionais com kettlebells ou elásticos melhoram sua coordenação e flexibilidade.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Alert>
          </Col>
        )}
      </Row>

      <Row className="justify-content-center mt-5">
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <h5 className="text-center">Dúvidas sobre o Cálculo?</h5>
              <Button variant="link" onClick={() => setShowHelp(!showHelp)} className="d-block mx-auto">
                <FaRegLifeRing /> Precisa de Ajuda?
              </Button>
              {showHelp && (
                <div className="mt-3">
                  <p>
                    O cálculo da Massa Muscular Magra (MMC) é uma simplificação com base no seu IMC e idade.
                    Resultados mais precisos exigem uma avaliação física mais detalhada.
                  </p>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CalculoMMC_Dicas;
