import React from 'react'
import PropTypes from 'prop-types'
import { CastImage, Container } from './Cast.style'

const Cast = ({ name, character, actorImg }) => {
    return (
        <Container>
            <CastImage src={actorImg} alt="actor-image" />
            <h3>{name}</h3>
            <p>{character}</p>
        </Container>
    )
}

Cast.propTypes = {
    name: PropTypes.string,
    character: PropTypes.string,
    actorImg: PropTypes.string
}

export default Cast
