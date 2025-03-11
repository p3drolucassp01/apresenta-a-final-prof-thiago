import React from 'react';
import { Pagination } from 'react-bootstrap';

/**
 * Componente de Paginação.
 * Exibe um controle de navegação com botões para navegar entre as páginas.
 * @component
 * @returns {JSX.Element} A estrutura do componente de paginação.
 */
function PaginationComponent() {
  return (
    <Pagination className="justify-content-center mt-4">
      {/* Botão de navegação para a página anterior */}
      <Pagination.Prev />

      {/* Itens de páginas */}
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>

      {/* Botão de navegação para a próxima página */}
      <Pagination.Next />
    </Pagination>
  );
}

export default PaginationComponent;
