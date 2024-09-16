'use client'

import Pagina from "@/app/componentes/Pagina";
import apiMovie from "@/services/apiMovie";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useRouter } from "next/router";



export default function Page({ params }) {
    const [filme, setFilme] = useState({})
    const [atores, setAtores] = useState([]);



    useEffect(() => {
        apiMovie.get(`movie/${params.id}`).then(resultado => {
            setFilme(resultado.data)
        })

        apiMovie.get(`movie/${params.id}/credits`).then(resultado => {
            setAtores(resultado.data.cast);
        })


    }, [])

    return (
        <Pagina titulo={filme.title}>
            {
                filme.id &&

                <Row className="mt-4">

                    <Col sm={2}>
                        <img className="img-fluid h-100" src={'https://image.tmdb.org/t/p/w500/' + filme.poster_path} />

                    </Col>


                    <Col sm={10}>
                        <p><b>Título Original: </b>{filme.original_title}</p>
                        <p><b>Popularidade: </b>{filme.popularity}</p>
                        <p><b>Data de Lançamento: </b>{filme.release_date}</p>
                        <p><b>Orçamento: </b>{`${filme.budget.toLocaleString()}`}</p>
                        <p><b>Gêneros: </b>{filme.genres.map(item => item.name).join(', ')}</p>
                        <p><b>Sinopse: </b>{filme.overview}</p>
                        <Link className="btn btn-dark w-100" href={`/filmes`} passHref>
                            Voltar
                        </Link>
                    </Col>

                    <Col sm={12}>
                        <h1>Elenco: </h1>
                        <Row>

                            {atores.map(ator => (
                                <Col key={ator.id} title={ator.name} className="my-2 d-flex" sm={2}>
                                    <Card className="card-fixed-height">
                                        <Card.Img height="230" variant="top" src={'https://image.tmdb.org/t/p/w500/' + ator.profile_path} />
                                        <Card.Body className="d-flex flex-column">
                                            <Card.Text className="flex-grow-1 truncated-text">
                                            </Card.Text>
                                            <div className="mt-auto">
                                                <Link className="btn btn-dark w-100" href={`/atores/${ator.id}`} passHref>
                                                    {ator.name}
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

