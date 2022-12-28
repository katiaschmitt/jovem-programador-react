import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function ModalEditarAluno({ open, onClose, aluno, EditarAluno }) {
  const [novoNome, setNovoNome] = useState("");
  const [novaIdade, setNovaIdade] = useState("");
  const [novoContato, setNovoContato] = useState("");
  const [novoEmail, setNovoEmail] = useState("");
  const [novoCep, setNovoCep] = useState("");

  // Define o valor inicial das variáveis com o valor do aluno atual do Modal
  useEffect(() => {
    if (aluno) {
      setNovoNome(aluno.nome);
      setNovaIdade(aluno.idade);
      setNovoContato(aluno.contato);
      setNovoEmail(aluno.email);
      setNovoCep(aluno.cep);
    }
  }, [aluno]);

  function handleClick() {
    console.log("Editar aluno...", aluno.id);

    const novoALuno = {
      id: aluno.id,
      nome: novoNome,
      idade: novaIdade,
      contato: novoContato,
      email: novoEmail,
      cep: novoCep,
    };

    EditarAluno(novoALuno);
    onClose();
  }

  return (
    <Modal show={open} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Aluno - {aluno?.nome}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira seu nome"
              value={novoNome}
              autoFocus
              onChange={(e) => setNovoNome(e.target.value)}
            />
          </Form.Group>
        </Form>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Idade</Form.Label>
            <Form.Control value={novaIdade} onChange={(e) => setNovaIdade(e.target.value)} />
          </Form.Group>
        </Form>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Contato</Form.Label>
            <Form.Control value={novoContato} onChange={(e) => setNovoContato(e.target.value)} />
          </Form.Group>
        </Form>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={novoEmail} onChange={(e) => setNovoContato(e.target.value)} />
          </Form.Group>
        </Form>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>CEP</Form.Label>
            <Form.Control type="text" value={novoCep} onChange={(e) => setNovoContato(e.target.value)} />
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
