
'use client'

import Pagina from "@/app/componentes/Pagina";
import { useEffect, useState } from "react";
import apiMovie from "@/services/apiMovie";
import { Button, Card, Col, NavLink, Row } from "react-bootstrap";
import Link from "next/link";


export default function Page() {
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        apiMovie.get('movie/popular').then(resultado => {
            setFilmes(resultado.data.results)
        })
    }, [])

    return (
        <Pagina titulo="Filmes Populares">
            <Row md={3}>
                {filmes.map(filme => (
                    <Col key={filme.id} className="my-2">
                        <Card>
                            <Card.Img height="230" variant="top" src={'https://image.tmdb.org/t/p/w500/' + filme.backdrop_path} />
                            <Card.Body>
                                <Card.Title>{filme.title}</Card.Title>
                                <Card.Text>
                                    <p>{filme.original_title}</p>
                                    <p> <b>Popularidade: </b>{filme.popularity}</p>
                                    <p> <b>Avaliação: </b>{filme.vote_average}</p>
                                </Card.Text>

                                <Link className="btn btn-dark" href={`/filmes/${filme.id}`} passHref>
                                    Detalhes
                                </Link>

                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Pagina>
    )
}