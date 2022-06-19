import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: Ubuntu;
  color: #ddd;
  min-height: 80vh;
  margin: 0 auto;
  cursor: default;
  padding: 20px;
	position: relative;

	.infoContainer{
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		background-color: #2ec5ea;
		width: 100%;
		padding: 32px 16px;
		color: #333;
		border-radius: 8px 8px 0px 0px;

		.infoCardContainer{
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			font-family: Ubuntu;
		}

		.infoTitle{
			margin: 0;
		}

		.infoParagraph{
			margin-top: 0;
			font-size: 14px;
		}

		.infoCard{
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			width: auto;
			margin: 8px 0px;
		}

		.cardDescription{
			margin-left: 8px;
			font-size: 14px;
		}
	}

	@keyframes error-flash {
		from {
			border: 2px solid #333;
		}
		to {
			border: 2px solid #e54;
		}
	}

	.contactForm.error{
		border: 2px solid #e54;
		animation: error-flash 0.5s infinite;
	}

	.contactForm.success{
		background-color: #2ec5ea80;
		border: 2px solid #2ec5ea;
	}

	.contactForm{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		padding: 32px 16px;
		border: 1px solid #2ec5ea;
		border-radius: 0px 0px 8px 8px;

		.formTitle{
			margin: 0;
			margin-bottom: 16px;
		}

		.contactSubmitButton.error{
			transition: 0.2s all;
			background-color: #e54;
		}

		.contactSubmitButton{
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			width: 100%;
			background-color: #2ec5ea;
			height: 40px;
			margin-top: 16px;
			border: none;
			text-transform: lowercase;
			font-variant: small-caps;
			font-size: 20px;
			font-weight: bold;
			transition: 0.2s all;
			cursor: pointer;

			@keyframes infinite-spinning {
				from {
					transform: rotate(0deg);
				}
				to {
					transform: rotate(360deg);
				}
			}

			.buttonIcon{
				margin-right: 8px;
			}

			.buttonIcon.loading{
				animation: infinite-spinning 2s infinite;
			}
		}

		.contactInputContainer{
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-start;
			width: 100%;
			font-family: Ubuntu;
	
			.contactLabel{
				font-family: Ubuntu;
				font-size: 16px;
				text-transform: lowercase;
				font-variant: small-caps;
			}
	
			.contactInput,
			.contactTextarea {
				font-family: Ubuntu;
				display: flex;
				width: 100%;
				height: 40px;
				background-color: #ccc2;
				padding: 0px 8px;
				border: 1px solid #ccc2;
				margin: 4px 0px;
				font-size: 12px;
				border-radius: 4px;
				color: #fff;
				outline: 0;
			}

			.contactTextarea{
				height: 100px;
				padding: 8px;
				margin-top: 16px;
			}
		}
	}

	@media (min-width: 1024px){
		flex-direction: row;
		align-items: center;

		.infoContainer{
			width: 25vw;
			justify-content: flex-start;
			margin-right: -32px;
			border-radius: 8px 0px 0px 8px;

			.infoParagraph{
				max-width: 80%;
			}

			.infoCardContainer{
				margin-top: 32px;
				min-height: 200px;
				justify-content: space-around;
			}
		}

		.contactForm{
			min-height: 500px;
			width: 40vw;
			z-index: 1;
			background: radial-gradient(#333, #111);
			border-radius: 0px 8px 8px 0px;
			padding: 16px 64px;
		}
	}
`;