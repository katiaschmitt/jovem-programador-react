import { useState } from "react";
import { Table } from "react-bootstrap";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import ModalEditarAluno from "./ModalEditarAluno";

export default function Tabela({ alunos, RemoverAluno, EditarAluno }) {
  const [show, setShow] = useState(false);
  const [alunoAtual, setAlunoAtual] = useState(null);

  function FecharModal() {
    setShow(false);
  }
  function AbrirModal() {
    setShow(true);
  }

  return (
    <Table striped bordered hover>
      <ModalEditarAluno open={show} onClose={FecharModal} aluno={alunoAtual} EditarAluno={EditarAluno}/>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Idade</th>
          <th>Contato</th>
          <th>Email</th>
          <th>Cep</th>
          <th className="d-flex justify-content-center">Ações</th>
        </tr>
      </thead>
      <tbody>
        {alunos.map((aluno) => {
          return (
            <tr key={aluno.id}>
              <td>{aluno.id}</td>
              <td>{aluno.nome}</td>
              <td>{aluno.idade}</td>
              <td>{aluno.contato}</td>
              <td>{aluno.email}</td>
              <td>{aluno.cep}</td>
              <td className="d-flex justify-content-around" style={{ padding: 15, cursor: "pointer" }}>
                <FaRegEdit
                  size={18}
                  color="#84E296"
                  onClick={() => {
                    setAlunoAtual(aluno);
                    AbrirModal();
                  }}
                />
                <FaRegTrashAlt size={18} color="#C41E3D" onClick={() => RemoverAluno(aluno.id)} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
