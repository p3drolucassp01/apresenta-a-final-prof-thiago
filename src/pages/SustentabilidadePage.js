import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importando as imagens corretamente
import News01 from '../assets/News_01.jpg';
import News02 from '../assets/News_02.jpg';
import News03 from '../assets/News_03.jpg';

/**
 * Página que apresenta informações sobre sustentabilidade no mundo fitness.
 * @component
 * @returns {JSX.Element} Retorna o layout da página de sustentabilidade.
 */
function SustainabilityPage() {
  /**
   * Lista de tópicos sobre sustentabilidade e suas respectivas informações.
   * @type {Array<{ title: string, content: string, img: string }>}
   */
  const sustainabilityTopics = [
    {
      title: "Academias Sustentáveis: Reduzindo o Consumo de Energia",
      content: "Muitas academias estão adotando equipamentos que geram energia durante os treinos, como bicicletas ergométricas e esteiras. Essa energia é convertida e usada para iluminar o espaço ou abastecer aparelhos.",
      img: News01,
    },
    {
      title: "Garrafas Reutilizáveis: Uma Mudança Simples com Grande Impacto",
      content: "Campanhas incentivam o uso de garrafas reutilizáveis nas academias para reduzir o desperdício de plástico. Algumas academias já oferecem pontos de reabastecimento com água filtrada.",
      img: News02,
    },
    {
      title: "Vestuário Fitness Sustentável: Escolhas Conscientes",
      content: "Marcas de roupas esportivas estão lançando coleções feitas de materiais reciclados e biodegradáveis, promovendo a moda sustentável no mundo fitness.",
      img: News03,
    },
  ];

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Sustentabilidade no Mundo da Academia</h1>
      <p className="text-center mb-4">
        A sustentabilidade está cada vez mais presente no universo fitness, promovendo práticas que respeitam o meio ambiente e ajudam a reduzir o impacto ambiental.
      </p>
      <Row>
        {sustainabilityTopics.map((topic, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="shadow-lg">
              <Card.Img 
                variant="top" 
                src={topic.img} 
                alt={`Tópico ${index + 1}`} 
                style={{ height: '200px', objectFit: 'cover' }} 
              />
              <Card.Body>
                <Card.Title>{topic.title}</Card.Title>
                <Card.Text>{topic.content}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default SustainabilityPage;
