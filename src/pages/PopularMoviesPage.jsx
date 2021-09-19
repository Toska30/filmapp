import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router";
import { useQuery } from "react-query";
import { getPopularMovies } from "../services/TMDBApi";
import "../App.scss";

const PopularMoviesPage = () => {
	const history = useHistory();

	//getting data from useQuery
	const { data, error, isError, isLoading } = useQuery(
		["popular-movies"],
		() => getPopularMovies()
	);

	return (
		<Container>
			<h1 className="text-light pt-4 pb-4">Popular movies</h1>
			<Row xs={2} md={3} lg={4} xl={5} className="g-4">
				{isLoading && <p className="my-3">Loading...</p>}

				{isError && <p className="my-3">error: {error.message}</p>}

				{data?.results && (
					<>
						{data.results.results.map((movie, i) => (
							<Col key={i} className="Tide"> 
								<Card text="light" bg="info" className="overlay Tide">
									<Card.Img
										variant="top"
										src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
										alt="poster"
									/>
									<Card.Body>
										<Card.Title>{movie.title}</Card.Title>
										<Card.Subtitle className="mb-2 text-muted">
											Released: {movie.release_date}
										</Card.Subtitle>

										<Button
										    className="space"
											variant="primary"
											onClick={() => {
												history.push(
													`/movie/${movie.id}`
												);
											}}
										>
											Details
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

export default PopularMoviesPage;
