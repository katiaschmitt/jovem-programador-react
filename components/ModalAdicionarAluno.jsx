import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function ModalAdicionarAluno({ open, onClose, AdicionarAluno }) {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [contato, setContato] = useState("");
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState("");

  function handleClick() {
    const aluno = {
      nome: nome,
      idade: idade,
      contato: contato,
      email: email,
      cep: cep,
    };

    AdicionarAluno(aluno);

    onClose();
  }

  return (
    <Modal show={open} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Adicionar Aluno</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira seu nome"
              value={nome}
              autoFocus
              onChange={(e) => setNome(e.target.value)}
            />
          </Form.Group>
        </Form>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Idade</Form.Label>
            <Form.Control value={idade} placeholder="Insira a idade" onChange={(e) => setIdade(e.target.value)} />
          </Form.Group>
        </Form>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Contato</Form.Label>
            <Form.Control
              value={contato}
              placeholder="Numero de contato"
              onChange={(e) => setContato(e.target.value)}
            />
          </Form.Group>
        </Form>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Seu melhor email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
        </Form>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>CEP</Form.Label>
            <Form.Control
              type="text"
              value={cep}
              placeholder="Insira o seu cep"
              onChange={(e) => setCep(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          FECHAR
        </Button>
        <Button variant="primary" onClick={handleClick}>
          SALVAR
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
