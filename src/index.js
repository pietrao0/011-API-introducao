import dotenv from "dotenv";
import express from "express"; 
import { selectUsuarios, selectUsuario, insertUsuario, deleteUsuario, updateUsuario } from "./db/bd.js";

dotenv.config();     
const app = express();              
const port = 3000;                  
app.use(express.json());

app.get("/", (req, res) => {        
  res.json({
    nome: "Pietra Sophia Almeida Silva",     
  });
  console.log("Rota / solicitada");
});


app.listen(port, () => {            
  console.log(`Serviço escutando na porta:  ${port}`);
});

