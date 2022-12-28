
export default function Alunos(req, res) {
  switch (req.method) {
    case "GET":
      // Retorna Todos
      res.status(200).send("Retornar todos os alunos.");

      break;
    case "POST":
      // Criar
      res.status(201).send("Criar aluno");
      break;
  }
}
