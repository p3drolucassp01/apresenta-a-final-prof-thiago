import React, { useState, useRef } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import produtoSuplemento from '../assets/Shopping/Suplemento.webp';
import produtoRoupas from '../assets/Shopping/roupa.jpg';
import produtoEquipamento from '../assets/Shopping/equipamentos.webp';

function ShoppingPage() {
  const [cartItems, setCartItems] = useState(0);
  const [animations, setAnimations] = useState([]);
  const cartRef = useRef(null);

  const addToCart = (id, event) => {
    const cartRect = cartRef.current.getBoundingClientRect();
    const cardRect = event.target.closest('.product-card').getBoundingClientRect();

    const startX = cardRect.left + cardRect.width / 2;
    const startY = cardRect.top + cardRect.height / 2;
    const deltaX = cartRect.left + 20 - startX;
    const deltaY = cartRect.top + 20 - startY;

    const newAnimation = {
      id: Date.now(),
      x: startX,
      y: startY,
      deltaX,
      deltaY
    };

    setAnimations((prev) => [...prev, newAnimation]);
    setCartItems((prev) => prev + 1);

    setTimeout(() => {
      setAnimations((prev) => prev.filter((anim) => anim.id !== newAnimation.id));
    }, 1500);
  };

  const products = [
    { id: 1, name: 'Suplementos', desc: 'Melhore seus resultados com nossos suplementos.', img: produtoSuplemento },
    { id: 2, name: 'Roupas Esportivas', desc: 'Conforto e estilo para seus treinos.', img: produtoRoupas },
    { id: 3, name: 'Equipamentos', desc: 'Treine com equipamentos de alta qualidade.', img: produtoEquipamento }
  ];

  return (
    <Container className="text-center mt-4">
      <h1>Loja Online</h1>
      <p>Explore nossa loja e adquira os melhores produtos para turbinar seu treino.</p>

      <div className="cart-icon" ref={cartRef}>
        <FaShoppingCart size={40} />
        {cartItems > 0 && <span className="cart-badge">{cartItems}</span>}
      </div>

      <Row className="mt-4">
        {products.map((product) => (
          <Col key={product.id} md={4}>
            <motion.div className="product-card" whileHover={{ scale: 1.05 }}>
              <Card>
                <Card.Img 
                  variant="top" 
                  src={product.img} 
                  alt={product.name} 
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.desc}</Card.Text>
                  <Button 
                    variant="primary" 
                    onClick={(event) => addToCart(product.id, event)}
                  >
                    Adicionar ao Carrinho
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      {animations.map((anim) => (
        <motion.div
          key={anim.id}
          className="floating-product"
          initial={{ x: anim.x, y: anim.y, opacity: 1, scale: 1 }}
          animate={{ x: anim.x + anim.deltaX, y: anim.y + anim.deltaY, opacity: 0.5, scale: 0.3 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          🛍️
        </motion.div>
      ))}
    </Container>
  );
}

export default ShoppingPage;