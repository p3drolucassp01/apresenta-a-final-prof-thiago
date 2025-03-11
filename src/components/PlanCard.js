import React from 'react';
import { Card, Button } from 'react-bootstrap';

/**
 * Componente de Cartão de Plano.
 * Exibe as informações de um plano de assinatura, incluindo título, características e preço.
 * @component
 * @param {Object} props - Propriedades passadas para o componente.
 * @param {string} props.title - O título do plano.
 * @param {Array<string>} props.features - Lista de características do plano.
 * @param {string} props.price - O preço do plano.
 * @returns {JSX.Element} O cartão com as informações do plano.
 */
function PlanCard({ title, features, price }) {
  return (
    <Card>
      <Card.Body>
        {/* Exibe o título do plano */}
        <Card.Title>{title}</Card.Title>

        <Card.Text>
          {/* Exibe a lista de características do plano */}
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          {/* Exibe o preço do plano */}
          <strong>{price}</strong>
        </Card.Text>

        {/* Botão para assinatura */}
        <Button variant="primary">Assinar</Button>
      </Card.Body>
    </Card>
  );
}

export default PlanCard;
