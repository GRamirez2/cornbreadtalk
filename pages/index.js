import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';

const Cornbread = () => (
	<div>
		<Head>
			<title>Cornbread</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<Nav />

		<div className="hero">
			<h1>Cornbreadtalk.com coming soon 🌽🍞</h1>
			<p>Hello from s3.</p>
			<p>pushing new code from aws2 cli</p>
			<p>
				set up https with added headers for an A+<a
					href="https://observatory.mozilla.org/analyze/cornbreadtalk.com"
					target="_blank"
				>
					{' '}
					rating
				</a>
			</p>

			<p>set up cornbreadtalk.com and www.cornbreadtalk.com</p>
			<p>set up cloudfront world wide distibution</p>
			<p>Set up lamda edge function to route /testing/ to the index.html</p>
			<p>Set up lamda edge function to add security headers</p>
			<p>This page is now a React/Next app</p>
			<p>This page is hooked up to Travis CI so it deploys when I push to master</p>
		</div>

		<style jsx>{`
			.hero {
				width: 100%;
				color: #333;
			}
			.title {
				margin: 0;
				width: 100%;
				padding-top: 80px;
				line-height: 1.15;
				font-size: 48px;
			}
			.title,
			.description {
				text-align: center;
			}
			.row {
				max-width: 880px;
				margin: 80px auto 40px;
				display: flex;
				flex-direction: row;
				justify-content: space-around;
			}
			.card {
				padding: 18px 18px 24px;
				width: 220px;
				text-align: left;
				text-decoration: none;
				color: #434343;
				border: 1px solid #9b9b9b;
			}
			.card:hover {
				border-color: #067df7;
			}
			.card h3 {
				margin: 0;
				color: #067df7;
				font-size: 18px;
			}
			.card p {
				margin: 0;
				padding: 12px 0 0;
				font-size: 13px;
				color: #333;
			}
		`}</style>
	</div>
);

export default Cornbread;
