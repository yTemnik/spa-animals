import react from 'react'
import { Redirect } from 'react-router';


const Animals = (props) => {

    if (!props.isAuth) return <Redirect to="/" />

    return (
        <div>
            ANIMALS
        </div>
    )
}

export default Animals;