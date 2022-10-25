import { NextPage } from "next";

export const Filter : NextPage = () =>{
    return (
        <div className="container-filter">
            <div className="title">
                <span>Tarefas</span>
                <img src="/filter.svg" alt="Filtrar Tarefas" />
                <div className="form">
                    <div>
                        <label htmlFor="">
                            Data prevista de conclusão:
                        </label>
                        <input type="date" />
                    </div>
                    <div>
                        <label htmlFor="">até</label>
                        <input type="date" />
                    </div>
                    <div className="separator"></div>
                    <div>
                        <label htmlFor="">Status</label>
                        <select name="" id="">
                            <option value={0}>Todas</option>
                            <option value={1}>Ativas</option>
                            <option value={2}>concluídas</option>
                        </select>
                    </div>
                </div>                
            </div>
        </div>
    );
}