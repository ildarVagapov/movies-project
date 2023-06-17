import React, { useState } from "react";

const Search = (props) => {
	const [search, setSearh] = useState('')
	const [type, setType] = useState('all')

	const handleKey = (e) => {
		if (e.key === "Enter") {
			props.searchMovies(search, type);
		}
	};

	const handleFilter = (e) => {
		setType(e.target.dataset.type)
		props.searchMovies(search, e.target.dataset.type);
	};

	return (
		<>
			<div className='row'>
				<input
					className='validate'
					placeholder='search'
					type='search'
					value={search}
					onChange={(e) => setSearh(e.target.value)}
					onKeyDown={handleKey}
				/>
				<button
					onClick={() =>
						props.searchMovies(search, type)
					}
					type='submit'
					className='btn search-btn'
				>
					Поиск
				</button>
			</div>
			<div>
				<label>
					<input
						className='with-gap'
						name='type'
						type='radio'
						data-type='all'
						onChange={handleFilter}
						checked={type === "all"}
					/>
					<span>All</span>
				</label>
				<label>
					<input
						className='with-gap'
						name='type'
						type='radio'
						data-type='movie'
						onChange={handleFilter}
						checked={type === "movie"}
					/>
					<span>Movie Only</span>
				</label>
				<label>
					<input
						className='with-gap'
						name='type'
						type='radio'
						data-type='series'
						onChange={handleFilter}
						checked={type === "series"}
					/>
					<span>Series Only</span>
				</label>
			</div>
		</>
	);
}

export { Search };
