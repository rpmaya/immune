const Lista = ({ arrTareas }) => {
    const pintarTareas = () => {
        /*
        const lis = [];
        for (let tarea of arrTareas) {
            lis.push(<li>
                {tarea.texto} - {tarea.prioridad}
            </li>);
        }
        */
        const lis = arrTareas.map(tarea => <li>{tarea.texto} - {tarea.prioridad}</li>)
        return lis;
    }
    return (
        <ul>
            {pintarTareas()}
        </ul>
    )
}
export default Lista;
