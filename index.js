
import{Cliente} from "./Cliente.js/"
import{Gerente} from "./gerente.js"
import{Diretor} from "./diretor.js"
import{SistemaAutenticacao} from "./SistemaAutenticacao.js"


const diretor = new Diretor('Daniel',9500,1062547879);
const gerente = new Gerente('Victor',6500,2145247857);

const login=SistemaAutenticacao.login(diretor,123456789);
SistemaAutenticacao.login(gerente,12345);

console.log(diretor); 