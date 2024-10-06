import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = () => {
  const [status, setStatus] = useState(''); // 模拟状态
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (status === 'success') {
      setMessage('Goals loaded successfully');
    }
  }, [status]);

  return (
    <Col lg={12}>
      <div className="future-goals-section wow slideInUp"> {/* 更新类名 */}
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3 className="future-goals-title">My Future Vision and Goals</h3> {/* 添加类名 */}
            {status === 'sending' && <Alert>Sending...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <ul className="future-goals-list">
              <li>Become a full-stack developer, capable of handling projects independently</li>
              <li>Continuously learn and master cutting-edge technologies</li>
              <li>Live a more disciplined lifestyle and achieve a healthy, strong body</li>
              <li>Hope to achieve financial freedom one day and live a worry-free life</li>
            </ul>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
