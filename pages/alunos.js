import axios from "axios";
import {useState} from "react";
import {Button, Col, Stack} from "react-bootstrap";
import MenuSuperior from "../components/MenuSuperior";
import ModalAdicionarAluno from "../components/ModalAdicionarAluno";
import Tabela from "../components/Tabela";

export default function Alunos() {
  const [show, setShow] = useState(false);
  const [alunos, setAlunos] = useState([
    {
      id: 1,
      nome: "João",
      idade: 22,
      email: "joao@teste.com",
      contato: "99 99999 9999",
      cep: "88555120",
    },
    {
      id: 2,
      nome: "Maria",
      idade: 19,
      email: "maria@teste.com",
      contato: "88 88888 8888",
      cep: "88555130",
    },
  ]);

  // Chamada Api Buscar alunos

  function AdicionarAluno(aluno) {
    // Simulando o increment do banco
    aluno.id = alunos.length + 1;
    setAlunos((old) => [...alunos, aluno]);

    // axios
    //   .post(`/api/aluno`, aluno)
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  function EditarAluno(novoAluno) {
    // Cria um nova lista revomendo o aluno existente para depois inseri-lo novamente com as informações atualizadas
    const novaListaAlunos = alunos.filter((a) => a.id != novoAluno.id);

    setAlunos([...novaListaAlunos, novoAluno]);

    // axios
    //   .put(`/api/aluno/${novoAluno.id}`, novoAluno)
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  function RemoverAluno(id) {
    setAlunos(alunos.filter((aluno) => aluno.id != id));

    // axios
    //   .delete(`/api/aluno/${id}`)
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  function AbrirModal() {
    setShow(true);
  }
  function FecharModal() {
    setShow(false);
  }

  if (!alunos) return null;

  return (
    <div>
      <MenuSuperior />
      <ModalAdicionarAluno open={show} onClose={FecharModal} AdicionarAluno={AdicionarAluno} />
      <Stack style={{alignItems: "center", minHeight: "100vh"}}>
        <Col md={8}>
          <Stack
            direction="horizontal"
            className="d-flex align-items-center justify-content-between"
          >
            <h4 style={{marginTop: 32, marginBottom: 16}}>Relatório de alunos</h4>
            <Button onClick={AbrirModal}>Adicionar</Button>
          </Stack>

          <Tabela alunos={alunos} EditarAluno={EditarAluno} RemoverAluno={RemoverAluno} />
        </Col>
      </Stack>
    </div>
  );
}
