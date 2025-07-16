import React from 'react';
import { Link, useRouteError } from 'react-router';
import "./error.scss";

const Error = (props) => {
	const err = useRouteError();
	const { isDarkMode } = props;
	return (
		<div className={`error-page ${isDarkMode ? 'dark' : '' }`}>
			<h1>Oops!!!</h1>
			<h2>Something went wrong</h2>
			<h4>{err.status}: {err.statusText}</h4>

			<Link to="/" className="back-home-link">No worries, let's go home</Link>
		</div>
	)
};

export default Error;
