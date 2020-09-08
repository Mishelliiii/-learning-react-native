import React, {Component} from 'react';
import Menu from './components/Menu';
import ListagemAlunos from './components/ListagemAlunos';
//importar o rodapé
import FormAluno from './components/FormAluno';

class App extends Component{

  constructor(props){
    super(props);
    this.alunos = [
      { 'ra': 18289, 'nome': 'Mishelle', 'codCurso': 29},
      { 'ra': 19351, 'nome': 'Carolina', 'codCurso': 28},
      { 'ra': 17289, 'nome': 'Latoya',   'codCurso': 39},
    ];
    this.novoAluno = [];
    this.state = {};
  }


  criarAluno(ra, nome, codCurso){
   const novoAluno = {ra, nome, codCurso};
   this.alunos.push(novoAluno);
   this.setState({
     alunos: this.alunos
   });
  }
  
  render(){
    return(
      <div>
        <Menu/>
        <div className="flex-container">
          <ListagemAlunos alunos={this.alunos}/>
          <FormAluno criarAluno={this.criarAluno.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default App;
