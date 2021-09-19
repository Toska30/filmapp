import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getActor } from "../services/TMDBApi";
import "../App.scss";

const ActorPage = () => {
  const { id } = useParams(); // getting id from useParams
  //fetching a specific actor
  const { data, error, isError, isLoading } = useQuery(["person", id], () =>
    getActor(id)
  );

  return (
    <Container>
      {isLoading && <p className="my-3">Loading...</p>}

      {isError && <p className="my-3">error: {error.message}</p>}

      {data?.results && (
        <>
          <Row className="g-0">
            <Col key={7} className="pt-5 m-auto">
              <Card text="light" bg="info" className="profpic">
                {data.results.profile_path && (
                  <Card.Img
                    src={`https://image.tmdb.org/t/p/w500/${data.results.profile_path}`}
                    alt="image"
                  />
                )}
                <Card.ImgOverlay></Card.ImgOverlay>
              </Card>
            </Col>
            <Col key={2} className="pt-4 m-auto">
              <Card>
                <Card.Body className="biotext">
                  <Card.Title>{data.results.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                  <Card.Text>{data.results.biography}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <h1 className="text-light pt-5"> Has also played in: </h1>
          <Row className="pt-4">
            {data.results.credits.cast.map((movie, i) => (
              <Col
                key={i}
                xs={5}
                md={4}
                lg={3}
                xl={3}
                className="pt-4 m-auto Tid"
              >
                <Card text="light" bg="info" className="overlay Tid">
                  <Card.Body>
                    {(movie.poster_path && (
                      <Card.Img
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt=" image"
                      />
                    )) || <Card.Img src={``} alt=" image" />}
                    <Card.Title key={i}>{movie.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  );
};

export default ActorPage;
