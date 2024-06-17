import styled from 'styled-components';
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci';

export const Wrapper = styled.div`
	--__TAILLEX: 40rem;
	--__TAILLEY: 20rem;

	display: flex;
	flex-direction: column;
	padding: 2rem;
	position: absolute;
	top: calc(50% - var(--__TAILLEY) / 2);
	left: calc(50% - var(--__TAILLEX) / 2);
	width: var(--__TAILLEX);
	height: var(--__TAILLEY);
	background: rgba(27, 45, 80, 0.2);
	border-radius: 0.8rem;
	-webkit-backdrop-filter: blur(0.2rem);
	backdrop-filter: blur(0.2rem);
	font-family: 'Roboto', sans-serif;
	color: white;

	section {
		display: flex;
		align-items: center;
		margin: 0.8rem 0;
		gap: 1rem;
	}

	.range {
		display: grid;
		grid-template-columns: 4fr .3fr .3fr .3fr .3fr;
	}

	label {
		font-size: 1.2rem;
	}

	input[type='text'] {
		flex: 1;
		padding: 0.9rem;
		background: transparent;
		border-radius: 0.4rem;
		border: 1px solid white;
		color: white;
		max-width: 20rem;
	}

	.copy {
		padding: 0.78rem;
		background: transparent;
		border-radius: 0.4rem;
		border: 1px solid white;
		cursor: pointer;
	}

	input[type='range'] {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		width: 12.5rem;
		background-color: transparent;
	}

	input[type='range']::-webkit-slider-runnable-track {
		-webkit-appearance: none;
		appearance: none;
		height: 3px;
		background: white;
	}

	input[type='range']::-moz-range-track {
		-moz-appearance: none;
		appearance: none;
		height: 3px;
		background: white;
	}

	input[type='range']::-ms-track {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		height: 3px;
		background: white;
	}

	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		border: 2px solid white;
		border-radius: 50%;
		height: 20px;
		width: 20px;
		position: relative;
		bottom: 8px;
		background: black;
		background-size: 50%;
		box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.4);
		cursor: grab;

		&:active {
			cursor: grabbing;
		}
	}

	input[type='range']::-moz-range-thumb {
		-moz-appearance: none;
		appearance: none;
		border: 2px solid white;
		border-radius: 50%;
		height: 20px;
		width: 20px;
		position: relative;
		bottom: 8px;
		background: black;
		background-size: 50%;
		box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.4);
		cursor: grab;

		&:active {
			cursor: grabbing;
		}
	}

	input[type='range']::-ms-thumb {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		border: 2px solid white;
		border-radius: 50%;
		height: 20px;
		width: 20px;
		position: relative;
		bottom: 8px;
		background: black;
		background-size: 50%;
		box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.4);
		cursor: grab;

		&:active {
			cursor: grabbing;
		}
	}
`;

export const SignePlus = styled(CiCirclePlus)`
	color: white;
	font-size: 2rem;
	cursor: pointer;
`;

export const SigneMoins = styled(CiCircleMinus)`
	color: white;
	font-size: 2rem;
	cursor: pointer;
`;
