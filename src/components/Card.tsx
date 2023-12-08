interface CardProps{
    id: number,
    resume: string,
    details: string
}

export const Card = ({id, resume, details}: CardProps) => {
    return(

        <div>
            
            <h1>Card {id}</h1>

            <h2>{resume}</h2>
            
            <h3>{details}</h3>

        </div>
    )
}