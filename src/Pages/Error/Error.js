import React from 'react';
import { Link, useRouteError } from 'react-router';
import "./error.scss";

const Error = (props) => {
	let err;
	let isShowLinkToHomePage = true;
	try {
		err = useRouteError();
	} catch {
		err = null;
		isShowLinkToHomePage = false;
	}

	const { isDarkMode } = props;
	return (
		<div className={`error-page ${isDarkMode ? 'dark' : '' }`}>
			<h1>Oops!!!</h1>
			<h2>Something went wrong</h2>
			{err && <h4>{err.status}: {err.statusText}</h4>}

			{isShowLinkToHomePage && <Link to="/" className="back-home-link">No worries, let's go home</Link>}
		</div>
	)
};

export default Error;
