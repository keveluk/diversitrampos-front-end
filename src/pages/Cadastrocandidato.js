import {React, useState} from 'react'
import {Link} from 'react-router-dom'
import ocupacoes from '../assets/ocupacoes/Ocupacao.json';

export default function Cadastrocandidato() {
    const [cidades, setCidades] = useState([]);
    const [user, setUser] = useState({});

    const fetchCidade = async (e)=>{
        e.preventDefault();
        const {value} = e.target;
        console.log(value)
        let url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${value}/municipios`;
        const result = await fetch(url).then(response=>response.json());
        const newresult = result.map((item, index)=>item.nome)
        setCidades(newresult)
    }
        return (
            <div className="cadastrocandidato-container flex-center">
                <div className="cadastrocandidato-form-wrapper">
                    <Link className="std-button back-btn" to="/Login">
                        Voltar
                    </Link>
                    <form action="">
                        <div className="cadastrocandidato-input-wrapper">
                            <input placeHolder="Nome" className="std-input" type="text" name="nome" id="nome" />
                            <input placeHolder="Sobrenome"  className="std-input"  type="text" name="sobrenome" id="sobrenome" />
                            <input placeHolder="E-mail"  className="std-input"  type="email" name="email" id="email" />
                            <select placeHolder="Área de atuação"  className="std-input"  name="atuacao" id="atuacao">
                                <option disabled selected value="">Ocupação</option>
                                {ocupacoes.map(
                                    (item,index)=>(
                                    <option value="{index}">{item.name}</option>

                                    )
                                )}
                                    
                                
                            </select>
                            <input placeHolder="Senha (mín. 8 caracteres)"  className="std-input"  type="password" name="senha" id="senha" />
                            <input placeHolder="Confirmar senha"  className="std-input"  type="password" name="confsenha" id="confsenha" />
                            <select onChange={fetchCidade} placeHolder="Estado"  className="std-input"  name="estado" id="estado">
                                
                                    <option disabled selected value="">Estado</option>
                                    <option value="AC">AC</option>
                                    <option value="AL">AL</option>
                                    <option value="AP">AP</option>
                                    <option value="AM">AM</option>
                                    <option value="BA">BA</option>
                                    <option value="CE">CE</option>
                                    <option value="ES">ES</option>
                                    <option value="GO">GO</option>
                                    <option value="MA">MA</option>
                                    <option value="MT">MT</option>
                                    <option value="MS">MS</option>
                                    <option value="MG">MG</option>
                                    <option value="PA">PA</option>
                                    <option value="PB">PB</option>
                                    <option value="PR">PR</option>
                                    <option value="PE">PE</option>
                                    <option value="PI">PI</option>
                                    <option value="RJ">RJ</option>
                                    <option value="RN">RN</option>
                                    <option value="RS">RS</option>
                                    <option value="RO">RO</option>
                                    <option value="RR">RR</option>
                                    <option value="SC">SC</option>
                                    <option value="SP">SP</option>
                                    <option value="SE">SE</option>
                                    <option value="TO">TO</option>
                                    <option value="DF">DF</option>
                                
                            </select>
                            <select placeHolder="Cidade"  className="std-input"  name="cidade" id="cidade">
                                <option disabled selected value="">Cidade</option>    
                                          {cidades.map(
                                    (cidade)=>(
                                    <option value={cidade}>{cidade}</option>

                                    )
                                )}  
                            </select>
                        </div>
                        <span className="checkbox-wrapper-title">Com qual(ais) grupo(s) você se identifica?</span>
                        <div className="checkbox-wrapper">
                            <ul className="checkbox-list">
                                <li className="checkbox-item">
                                    <input type="checkbox" name="pcd" id="pcd" value="text" />
                                    <label className="label" htmlFor="pcd">
                                        PCD
                                    </label>
                                </li>
                                <li className="checkbox-item">
                                    <input type="checkbox" name="preto" id="preto" value="text" />
                                    <label className="label" htmlFor="preto">
                                        Preto
                                    </label>
                                </li>
                                <li className="checkbox-item">
                                    <input type="checkbox" name="gay" id="gay" value="text" />
                                    <label className="label" htmlFor="gay">
                                        Gay
                                    </label>
                                </li>
                                <li className="checkbox-item">
                                    <input type="checkbox" name="travesti" id="travesti" value="text" />
                                    <label className="label" htmlFor="travesti">
                                        Travesti
                                    </label>
                                </li>
                                <li className="checkbox-item">
                                    <input type="checkbox" name="mulher" id="mulher" value="text" />
                                    <label className="label" htmlFor="mulher">
                                        Mulher
                                    </label>
                                </li>
                                <li className="checkbox-item">
                                    <input type="checkbox" name="idade" id="idade" value="text" />
                                    <label className="label" htmlFor="idade">
                                        40+
                                    </label>
                                </li>
                                <li className="checkbox-item">
                                    <input type="checkbox" name="trans" id="trans" value="text" />
                                    <label className="label" htmlFor="trans">
                                        Trans
                                    </label>
                                </li>
                                <li className="checkbox-item">
                                    <input type="checkbox" name="lesbica" id="lesbica" value="text" />
                                    <label className="label" htmlFor="lesbica">
                                        Lésbica
                                    </label>
                                </li>
                            </ul>
                            
                        </div>
                        <div className="submit-wrapper">
                            <select className="std-input submit-buttons"  name="deficiencia" id="deficiencia">
                                
                                    <option disabled selected value="">Deficiência</option>
                                    <option value="visual">visual</option>
                                    <option value="motora">motora</option>
                                    <option value="mental">mental</option>
                                    <option value="auditiva">auditiva</option>
                                    <option value="autismo">autismo</option>
                                
                            </select>
                            <div className="input-file-wrapper submit-buttons">
                                    <input type="file" name="curriculo" id="curriculo" />
                                    <label className="std-input file-input-label" htmlFor="curriculo">
                                        Currículo
                                    </label>
                                </div>
                                <button type="submit" className="std-button submit-buttons">
                                    Cadastrar
                                </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    
}
