'use client'

import Pagina from "@/app/componentes/Pagina";
import apiMovie from "@/services/apiMovie";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";


export default function Page({ params }) {
    const [ator, setAtor] = useState({})
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        apiMovie.get(`person/${params.id}`).then(resultado => {
            setAtor(resultado.data)
        })
        apiMovie.get(`person/${params.id}/movie_credits`).then(resultado => {
            setFilmes(resultado.data.cast);
        })



    }, [])

    return (
        <Pagina titulo={ator.name}>
            {
                ator.id &&
                <Row className="mt-4">
                    <Col sm={2}>
                        <img className="img-fluid" src={'https://image.tmdb.org/t/p/w500/' + ator.profile_path} />
                    </Col>

                    <Col sm={10}>

                        <p><b>Título Original: </b>{ator.birthday}</p>
                        <p><b>Data de Nascimento: </b>{ator.birthday}</p>
                        <p><b>Local de Nascimento: </b>{ator.place_of_birth}</p>
                        <p><b>Biografia: </b>{ator.biography}</p>
                        <Link className="btn btn-dark w-100" href={`/atores`} passHref>
                                    Voltar
                                    </Link>
                    </Col>
                    <br></br>

                    <Col sm={12}>
                    <h1>Filmes: </h1>
                    <Row>
                        
                        {filmes.map(filme => (
                            <Col key={filme.id} title={ator.name} className="my-2 d-flex" sm={2}>
                                <Card className="card-fixed-height">
                            <Card.Img height="230" variant="top" src={'https://image.tmdb.org/t/p/w500/' + filme.poster_path} />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title><b>{filme.title}</b></Card.Title>
                                <Card.Text className="flex-grow-1 truncated-text">
                                    </Card.Text>
                                <div className="mt-auto">
                                    <Link className="btn btn-dark w-100" href={`/filmes/${filme.id}`} passHref>
                                       Mais informações
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>
                        </Col>
                        ))}
                        </Row>
                        </Col>

                </Row>
            }

        </Pagina>
    )
}
