import '../styles/Card.css'

interface CardProps {
    name: string;
    title: string;
    email: string;
    phone: string;
}  

const Card: React.FC<CardProps> = (props) => {
    const { name, title, email, phone } = props;
    //comentario
    return (
        <div className="card">
            {/* fasdfads */}
            <h2 className="name">{name}</h2>
            <p className="title">{title}</p>
            <p className="email"><a href={`mailto:${email}`}>{email}</a></p>
            <p className="phone"><a href={`tel:${phone}`}>{phone}</a></p>
        </div>
    )
}
export default Card

