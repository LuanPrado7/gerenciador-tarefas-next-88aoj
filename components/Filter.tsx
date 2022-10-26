/* eslint-disable @next/next/no-img-element */
import type {NextPage} from 'next';
import { useState } from 'react';

export const Filter : NextPage = () =>{

    const [showFilters, setShowFilters] = useState(false);

    return (
        <div className='container-filter'>
            <div className='title'>
                <span>Tarefas</span>
                <img src='/filter.svg' alt='Filtrar tarefas' onClick={_ => setShowFilters(!showFilters)}/>
                <div className='form'>
                    <div>
                        <label>Data prevista de conclusão:</label>
                        <input type="date"/>
                    </div>
                    <div>
                        <label>até</label>
                        <input type="date"/>
                    </div>
                    <div className='separator'/>
                    <div>
                        <label>Status</label>
                        <select>
                            <option value={0}>Todas</option>
                            <option value={1}>Ativas</option>
                            <option value={2}>Concluídas</option>
                        </select>
                    </div>
                </div>
            </div>
            {showFilters && <div className='mobile-filters'>
                    <div>
                        <label>Data previsão de:</label>
                        <input type="date"/>
                    </div>
                    <div>
                        <label>Data previsão até:</label>
                        <input type="date"/>
                    </div>
                    <div className='separator'/>
                    <div>
                        <label>Status:</label>
                        <select>
                            <option value={0}>Todas</option>
                            <option value={1}>Ativas</option>
                            <option value={2}>Concluídas</option>
                        </select>
                    </div>
                </div>}
        </div>
    );
}