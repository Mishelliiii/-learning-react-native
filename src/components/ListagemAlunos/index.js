import React, {Component} from 'react';
import './ListagemAlunos.css';
import LinhaAluno from '../LinhaAluno';


const Alunos = [
     { 'ra': 18289, 'nome': 'Mishelle', 'codCurso': 29},
    { 'ra': 19351, 'nome': 'Carolina', 'codCurso': 28},
    { 'ra': 17289, 'nome': 'Latoya',   'codCurso': 39},
 ];

export default class ListagemAlunos extends Component{

    render(){
        return(
            <div className="listagem">
                <h1 className="tituloListagem">Listagem de Alunos</h1>
                <table className="listaAlunos" id="tblListaAlunos">
                    <thead>
                        <tr className="cabecTabela">
                            <th className="tabTituloRa">Ra</th>
                            <th className="tabTituloNome">Nome</th>
                            <th className="tabTituloCurso">Curso</th>
                        </tr>
                    </thead>
                    
                    {this.props.alunos.map(

                    (aluno) => <LinhaAluno ra={aluno.ra}

                    nome={aluno.nome} codCurso={aluno.codCurso} />

                    )}
                </table>
           </div>
        )
    }
}