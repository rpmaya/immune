const Lista = ({ arrTareas }) => {
    const pintarTareas = () => {
       
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
