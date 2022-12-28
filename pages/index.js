import { Col, Stack } from "react-bootstrap";
import MenuSuperior from "../components/MenuSuperior";

export default function Index() {
  return (
    <div>
      <MenuSuperior />
      <Stack style={{ alignItems: "center", minHeight: "100vh" }}>
        <Col md={8}>
          <h4 style={{ marginTop: 32, marginBottom: 16 }}>Página Inicial!</h4>
        </Col>
      </Stack>
    </div>
  );
}