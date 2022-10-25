/* eslint-disable @next/next/no-img-element */
import type {NextPage} from 'next';
import { Item } from './Item';

type ListProps = {
    list: Array<any>
}

export const List : NextPage<ListProps> = ({list}) =>{
    return (
        <div className={'container-list' + (list && list.length > 0 ? ' not-empty' : '')}>
            {
                list && list.length > 0 
                ? list.map(i => <Item key={i._id} task={i}/>) 
                :
                    <>
                        <img src="/empty.svg" alt='Nenhum registro encontrado'/>
                        <p>Você ainda não possui tarefas cadastradas!</p>
                    </>
            }
        </div>
    );
}