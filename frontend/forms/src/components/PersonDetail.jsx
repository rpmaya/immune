import { useEffect, useState } from "react"

export default function PersonDetail({ url }) {

    const [person, setPerson] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);
                setPerson(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        if (url) fetchData()
    }, [url])

    if (!person) {
        return <h2>Ninguna persona seleccionada</h2>;
    } else {
        return (
        <div>
            <h3>{person.name}</h3>
        </div>
        )
    }
}