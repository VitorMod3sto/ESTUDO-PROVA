
'use client'

import Pagina from "@/app/componentes/Pagina";
import { useEffect, useState } from "react";
import apiMovie from "@/services/apiMovie";
import { Button, Card, Col, NavLink, Row } from "react-bootstrap";
import Link from "next/link";


export default function Page() {
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        apiMovie.get('movie/now_playing').then(resultado => {
            setFilmes(resultado.data.results)
        })

        
    }, [])



    return (
        <Pagina titulo="Em cartaz no cinema">
            <Row md={3}>
                {filmes.map(filme => (
                    <Col key={filme.id} className="my-2 d-flex">
                        <Card className="card-fixed-height">
                            <Card.Img height="230" variant="top" src={'https://image.tmdb.org/t/p/w500/' + filme.backdrop_path} />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title><b>{filme.title}</b></Card.Title>
                                <Card.Text className="flex-grow-1 truncated-text">
                                  <p><b>Data de Lançamento: </b>{filme.release_date}</p>
                                    <p><b>Sinopse: </b>{filme.overview.slice(0, 180)}...</p>
                                    </Card.Text>
                                <div className="mt-auto">
                                    <Link className="btn btn-dark w-100" href={`/filmes/${filme.id}`} passHref>
                                        Veja mais detalhes
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </Pagina>
    )
}