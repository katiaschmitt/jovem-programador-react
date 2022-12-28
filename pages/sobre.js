import { Col, Stack } from "react-bootstrap";
import MenuSuperior from "../components/MenuSuperior";

export default function Sobre() {
  return (
    <div>
      <MenuSuperior />
      <Stack style={{ alignItems: "center", minHeight: "100vh" }}>
        <Col md={8}>
          <h4 style={{ marginTop: 32, marginBottom: 16 }}>Página sobre!</h4>
        </Col>
      </Stack>
    </div>
  );
}
