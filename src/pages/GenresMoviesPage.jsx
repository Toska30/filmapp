import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router";
import { useQuery } from "react-query";
import { getAllGenres } from "../services/TMDBApi";
import genres from "../assets/genres.jpeg";
import "../App.scss";

const GenresMoviesPage = () => {
  const history = useHistory();

  //getting data from useQuery
  const { data, error, isError, isLoading } = useQuery(["genres"], () =>
    getAllGenres()
  );

  return (
    <Container>
      <div
        style={{
          backgroundImage: `url(${genres})`,
          objectFit: "contain",
          minHeight: "40vh",
        }}
      ></div>
      <h1 className="text-light pt-4 pb-4">Genres</h1>
      <Row xs={2} md={4} lg={6} xl={6} className="g-4">
        {isLoading && <p className="my-3">Loading...</p>}

        {isError && <p className="my-3">error: {error.message}</p>}

        {data?.results && (
          <>
            {data.results.genres.map((genre, i) => (
              <Col key={i}>
                <Card text="light" bg="info" className="overlay">
                  <Card.Body>
                    <Card.Title>{genre.name}</Card.Title>

                    <Button
                      variant="primary"
                      onClick={() => {
                        history.push(`/genres/${genre.id}/1`);
                      }}
                    >
                      Movies
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </>
        )}
      </Row>
    </Container>
  );
};

export default GenresMoviesPage;
