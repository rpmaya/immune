import { useEffect, useState } from "react"
import PersonDetail from './PersonDetail'

export default function PeopleList() {

    const [people, setPeople] = useState([])

    const [urlSelected, setUrlSelected] = useState("")

    useEffect(() => {
        fetch('https://swapi.dev/api/people')
            .then(response => response.json())
            .then(data => { setPeople(data.results) })
            .catch(error => {
                console.error('Error fetching data:', error)
            })
    }, [])

    const listPeople = people.map(person => (
        <div>
            <h3 onClick={() => setUrlSelected(person.url)}>{person.name}</h3>
            <p>Año Nacimiento: {person.birth_year}</p>
            <p>Núm. Películas: {person.films.length}</p>
        </div>
    ))

    return (
        <div>
            <h2>Lista de personas</h2>
            <div>
                {listPeople}
            </div>
            <div>
                <PersonDetail url={urlSelected} />
            </div>
        </div>
    )
}