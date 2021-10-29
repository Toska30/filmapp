import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useParams, useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import { getGenre } from "../services/TMDBApi";
import "../App.scss";


const GenrePage = () => {

	//getting id from use params
	const { id,IDpage } = useParams();
	const history = useHistory();
	const [page, setPage] = useState(1);
    // getting data from use query
	const { data, error, isError, isLoading, isPreviousData } = useQuery(
		["genre", id, IDpage],
		() => getGenre(id, IDpage),
		{
			keepPreviousData: true,
		}
	);

	return (
		<Container>
			<h1 className="text-light pt-4 pb-4"> </h1>
			<Row xs={2} md={3} lg={4} xl={5} className="g-4">
				{isLoading && <p className="my-3">Loading...</p>}

				{isError && <p className="my-3">error: {error.message}</p>}

				{data?.results && (
					<>
						{data.results.results.map((movie, i) => (
							<Col key={i}>
								<Card text="light" bg="info" className="overlay">
									<Card.Img
										variant="top"
										src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
										alt="image"
									/>
									<Card.Body>
										<Card.Title>{movie.title}</Card.Title>
										<Card.Subtitle className="mb-2 text-muted">
											Language: {movie.original_language}
										</Card.Subtitle>

										<Button
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
      <div className="pagination d-flex justify-content-between align-items-center mt-4">
				<Button
					onClick={() => {
						setPage((currentPage) => Math.max(currentPage - 1, 1));
						history.push(`/genres/${id}/${page - 1}`);
					}}
					disabled={page === 1}
				>
					Prev
				</Button>

				<span className="text-light">Current Page: {page}</span>

				<Button
					onClick={() => {
						if (!isPreviousData && data.results.page) {
							setPage((currentPage) => currentPage + 1);
							history.push(`/genres/${id}/${page + 1}`);
						}
					}}
					disabled={isPreviousData || !data?.results.page}
				>
					Next
				</Button>
			</div>
		</Container>
	);
};

export default GenrePage;

