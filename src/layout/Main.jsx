import React, { useEffect, useState } from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {
	const [movies, setMovies] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		fetch(`https://www.omdbapi.com/?apikey=78584b3c&s=matrix`)
			.then((response) => response.json())
			.then((data) => {
				setMovies(data.Search);
				setLoading(false)
			})
			.catch((err) => {
				console.error(err);
				setLoading(false);
			});
	}, [])

	const searchMovies = (str, type = "all") => {
		setLoading(true);
		fetch(
			`https://www.omdbapi.com/?apikey=78584b3c&s=${str}
			${type !== "all" ? `&type=${type}` : ""}`
		)
			.then((response) => response.json())
			.then((data) => {
				setMovies(data.Search);
				setLoading(false)
			})
			.catch((err) => {
				console.error(err);
				setLoading(false);
			});
	};

	return (
		<main className='container content'>
			<Search searchMovies={searchMovies} />
			{loading ? <Preloader /> : <Movies movies={movies} />}
		</main>
	);
}

export { Main };
