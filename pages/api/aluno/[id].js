export default function Alunos(req, res) {
  const idAluno = req.query.id;

  switch (req.method) {
    case "GET":
      // Retorna
      res.status(200).send(`Retornar aluno: ${idAluno}`);
      break;
    case "PUT":
      // Alterar
      res.status(200).send(`Alterar aluno: ${idAluno}`);
      break;
    case "DELETE":
      // Excluir
      res.status(200).send(`Exluir aluno: ${idAluno}`);
      break;
  }
}
