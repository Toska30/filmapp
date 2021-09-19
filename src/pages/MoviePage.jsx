import React from "react";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import { getMovie } from "../services/TMDBApi";
import "../App.scss";

const MoviePage = () => {
  const history = useHistory();
  let { id } = useParams(); //getting id from use params

  //getting data from useQuery
  const { data, error, isError, isLoading } = useQuery(["movie", id], () =>
    getMovie(id)
  );

  return (
    <Container>
      <Row xs={1} md={2} lg={2} xl={2} className="movieblock">
        {isLoading && <p className="my-3">Loading...</p>}

        {isError && <p className="my-3">error: {error.message}</p>}

        {data?.results && (
          <>
            <Card text="light" bg="info">
              <Card.Img
                src={`https://image.tmdb.org/t/p/original/${data.results.backdrop_path}`}
                alt="image"
              />
              <Card.ImgOverlay></Card.ImgOverlay>
            </Card>

            <Card text="light" bg="info">
              <Card.Body>
                <Card.Title>{data.results.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Rating: {data.results.vote_average}
                </Card.Subtitle>
                <Card.Text>{data.results.overview}</Card.Text>
                <Card.Text>
                  Language: {data.results.original_language}
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    history.push(`/movie/${data.results.id}/cast`);
                  }}
                >
                  About the cast
                </Button>
              </Card.Body>
            </Card>
          </>
        )}
      </Row>
    </Container>
  );
};

export default MoviePage;
