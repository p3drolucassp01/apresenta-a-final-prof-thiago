import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Página que apresenta a história da academia Session Fit.
 * @component
 * @returns {JSX.Element} Retorna o layout da página de história da academia.
 */
function GymHistoryPage() {
  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">A História da Session Fit</h1>
      <Row>
        <Col>
          <p>
            A <strong>Session Fit</strong> nasceu de um sonho: criar um espaço onde saúde, bem-estar e inovação se encontrassem. 
            Fundada em 2025, a academia começou com o objetivo de oferecer uma experiência completa para pessoas que buscam melhorar sua qualidade de vida.
          </p>
          <p>
            Desde o início, a Session Fit se destacou por sua abordagem personalizada e seu compromisso com a comunidade. O nome "Session Fit" 
            reflete nossa missão de transformar cada sessão de treino em um momento único, onde nossos alunos se sentem motivados, desafiados e acolhidos.
          </p>
          <p>
            Com instalações modernas e uma equipe de profissionais altamente qualificados, a Session Fit oferece muito mais do que treinos. 
            Nossos programas incluem musculação, aulas de funcional, yoga, pilates e uma ampla variedade de atividades que atendem a todas as idades e níveis de condicionamento físico. 
            Além disso, investimos continuamente em equipamentos de última geração para garantir que nossos alunos tenham acesso ao melhor em tecnologia fitness.
          </p>
          <p>
            Um dos nossos maiores diferenciais é o ambiente acolhedor que criamos. Acreditamos que uma academia é mais do que um local para malhar — 
            é um espaço de convivência, aprendizado e superação. Nossa comunidade cresce a cada dia, e estamos orgulhosos de fazer parte das histórias de transformação de tantas pessoas.
          </p>
          <p>
            Hoje, a Session Fit continua evoluindo, sempre com o olhar no futuro. Nosso compromisso com a sustentabilidade e a inovação nos guia em cada decisão, 
            garantindo que sejamos uma academia moderna e responsável, pronta para atender às necessidades de nossos alunos e da sociedade.
          </p>
          <p className="text-center font-italic">
            "Na Session Fit, cada treino é uma nova oportunidade de se conectar com sua melhor versão."
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default GymHistoryPage;
