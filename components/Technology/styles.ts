import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: Ubuntu;
  color: #ddd;
	width: 300px;
	height: 300px;
  margin: 0 auto;
  cursor: default;
  padding: 20px;
	position: relative;

	@media (min-width: 1024px){
		margin-right: 32px;
	}

.slider {
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	width: 200px;
	height: 200px;
 	margin: auto;
	-webkit-perspective: 600px;
	        perspective: 600px;
}

	.slider * {
		-webkit-transition: all 1s cubic-bezier(0.5, -0.75, 0.2, 1.5);
		        transition: all 1s cubic-bezier(0.5, -0.75, 0.2, 1.5);
	}

	.container {
		width: inherit;
		height: inherit;
		-webkit-transform-style: preserve-3d;
		        transform-style: preserve-3d;
		-webkit-transform: rotateY(0deg) rotateX(0deg);
		        transform: rotateY(0deg) rotateX(0deg);
	}

		.slide, .slide:after, .slide:before {
			display: block;
			width: inherit;
			height: inherit;
			background: url('/images/TypeScript.png');
			position: absolute;
			-webkit-transform-style: preserve-3d;
			        transform-style: preserve-3d;
			background-size: cover;
			background-position: center;
		}

		.slide.x {
		  -webkit-transform: rotateY(90deg);
		          transform: rotateY(90deg);
		} 

			.slide.x:after {
				content: '';
				background-color: #FFF;
				background-image: url('/images/Python.png');
				-webkit-transform: translateZ(100px) rotateZ(-90deg);
				        transform: translateZ(100px) rotateZ(-90deg);
			}

			.slide.x:before {
				content: '';
				background-color: #FFF;
				background-image: url('/images/Java.png');
				-webkit-transform: translateZ(-100px) rotateZ(-90deg);
				        transform: translateZ(-100px) rotateZ(-90deg);
			}

		.slide.y {
		  -webkit-transform: rotateX(90deg);
		          transform: rotateX(90deg);
		} 

			.slide.y:after {
				content: '';
				background-color: #FFF;
				background-image: url('/images/NodeJS.png');
				-webkit-transform: translateZ(100px) scale(-1);
				        transform: translateZ(100px) scale(-1);
			}

			.slide.y:before {
				content: '';
				background-color: #FFF;
				background-image: url('/images/React.png');
				-webkit-transform: translateZ(-100px);
				        transform: translateZ(-100px);
			}

		.slide.z {
		  -webkit-transform: rotateX(0);
		          transform: rotateX(0);
		} 

			.slide.z:after {
				content: '';
				background-color: #FFF;
				background-image: url('/images/TypeScript.png');
				-webkit-transform: translateZ(100px);
				        transform: translateZ(100px);
			}

			.slide.z:before {
				content: '';
				background-color: #FFF;
				background-image: url('/images/Python.png');
				-webkit-transform: translateZ(-100px);
				        transform: translateZ(-100px);
			}


		.container {
			-webkit-animation: rotate 15s infinite cubic-bezier(1, -0.75, 0.5, 1.2);
			animation: rotate 15s infinite cubic-bezier(1, -0.75, 0.5, 1.2);
		}

		@-webkit-keyframes rotate {
			0%, 10% {-webkit-transform: rotateY(0deg) rotateX(0deg);transform: rotateY(0deg) rotateX(0deg);}
			15%, 20% {-webkit-transform: rotateY(180deg) rotateX(0deg);transform: rotateY(180deg) rotateX(0deg);}
			25%, 35% {-webkit-transform: rotateY(180deg) rotateX(270deg);transform: rotateY(180deg) rotateX(270deg);}
			40%, 50% {-webkit-transform: rotateY(180deg) rotateX(90deg);transform: rotateY(180deg) rotateX(90deg);}
			55%, 65% {-webkit-transform: rotateY(-90deg) rotateX(90deg);transform: rotateY(-90deg) rotateX(90deg);}
			70%, 80% {-webkit-transform: rotateY(90deg) rotateX(90deg);transform: rotateY(90deg) rotateX(90deg);}
			90%, 95% {-webkit-transform: rotateY(0deg) rotateX(90deg);transform: rotateY(0deg) rotateX(90deg);}
		}

		@keyframes rotate {
			0%, 10% {-webkit-transform: rotateY(0deg) rotateX(0deg);transform: rotateY(0deg) rotateX(0deg);}
			15%, 20% {-webkit-transform: rotateY(180deg) rotateX(0deg);transform: rotateY(180deg) rotateX(0deg);}
			25%, 35% {-webkit-transform: rotateY(180deg) rotateX(270deg);transform: rotateY(180deg) rotateX(270deg);}
			40%, 50% {-webkit-transform: rotateY(180deg) rotateX(90deg);transform: rotateY(180deg) rotateX(90deg);}
			55%, 65% {-webkit-transform: rotateY(-90deg) rotateX(90deg);transform: rotateY(-90deg) rotateX(90deg);}
			70%, 80% {-webkit-transform: rotateY(90deg) rotateX(90deg);transform: rotateY(90deg) rotateX(90deg);}
			90%, 95% {-webkit-transform: rotateY(0deg) rotateX(90deg);transform: rotateY(0deg) rotateX(90deg);}
		}


.shadow {
	display: block;
	width: 200px;
	height: 200px;
	background: rgba(0,0,0,0.75);
	position: absolute;
	top: 60%;
	-webkit-transform: rotateX(90deg);
	        transform: rotateX(90deg);
	z-index: -1;
	-webkit-filter: blur(20px);
	filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feGaussianBlur stdDeviation="20" /></filter></svg>#filter');
	-webkit-filter: blur(20px);
	        filter: blur(20px);
	left: 0;
	right: 0;
	margin: auto;
	-webkit-animation: rotateShadow 15s infinite cubic-bezier(1, -0.75, 0.5, 1.2);
	animation: rotateShadow 15s infinite cubic-bezier(1, -0.75, 0.5, 1.2);
}

	@keyframes rotateShadow {
		0%, 10% {transform: rotateY(0deg) rotateX(90deg);}	
		15%, 20% {transform: rotateY(180deg) rotateX(90deg); opacity: 1; filter: alpha(opacity=100);}
		20.1%, 20.9% {transform: rotateY(180deg) rotateX(90deg) translatez(10px); opacity: 0.95; filter: alpha(opacity=95);}
		25%, 35% {transform: rotateY(180deg) rotateX(90deg); opacity: 1; filter: alpha(opacity=100);}
		35.1%, 35.9% {transform: rotateY(180deg) rotateX(90deg) translatez(-10px); opacity: 0.95; filter: alpha(opacity=95);}
		40%, 50% {transform: rotateY(180deg) rotateX(90deg);}
		55%, 65% {transform: rotateY(0deg) rotateX(90deg);}
		70%, 80% {transform: rotateY(180deg) rotateX(90deg);}
		90%, 99% {transform: rotateY(0deg) rotateX(90deg);}
		99.1%, 99.9% {transform: rotateY(180deg) rotateX(90deg) translatez(5px); opacity: 0.95; filter: alpha(opacity=95);}
	}
`;