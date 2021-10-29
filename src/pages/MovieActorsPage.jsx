import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useParams, useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import "../App.scss";
import { getActors } from "../services/TMDBApi";

const MovieActorsPage = () => {
	const { id } = useParams(); //getting id from use params
	const history = useHistory();

//fetching actors from a specific film
	const { data, error, isError, isLoading } = useQuery(["cast", id], () =>
		getActors(id)
	);

	return (
		<Container>
			<h1 className="pt-4 pb-4 text-light">Cast</h1>
			<Row xs={2} md={3} lg={4} xl={5} className="g-4">
				{isLoading && <p className="my-3">Loading...</p>}

				{isError && <p className="my-3">error: {error.message}</p>}

				{data?.results && (
					<>
						{data.results.cast.map((actor, i) => (
							<Col key={i} className="Tid">
								<Card text="light" bg="info" className="overlay Tid">
									{(actor.profile_path && (
										<Card.Img
											variant="top"
											src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
											alt="profile-image"
										/>
									)) || (
										<Card.Img
											variant="top"
											src={``}
											alt="profile-image"
										/>
									)}
									<Card.Body>
										<Card.Title>{actor.name}</Card.Title>
										<Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
										<Button
											variant="primary"
											onClick={() => {
												history.push(
													`/person/${actor.id}`
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

export default MovieActorsPage;
