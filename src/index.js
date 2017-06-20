/* loading React with jsx */
// import React, {Component}  from 'react';
// import ReactDOM from 'react-dom';

// import Content from './components/content';
// import './css/style';

// class App extends Component{
// 	render(){
// 		return (
// 			<Content />
// 		)
// 	}
// }

// ReactDOM.render(<App />, document.querySelector('#container'));

/* loading pure html */
import html from './container';
import './css/style';

function initLoadHtml() { return html }

document.querySelector('#container').insertAdjacentHTML('beforeend', initLoadHtml());

/* Customize JS code - Start */

const menuBtn = document.querySelector('#menu-btn');
const menuCoverEle = document.querySelector('#menu-nav-cover');
const menuCoverImg = document.querySelector('#menu-cover-img');
const menuNavEles = document.querySelectorAll('#menu-nav a');

menuBtn.addEventListener('click', showMenuCover);
menuNavEles.forEach(nav => {
	nav.addEventListener('mouseover', menuNavChangeImg);
	nav.addEventListener('mouseout', showOriginalImg);
});

function showMenuCover() {
	const menuChecked = document.querySelector(`#${this.htmlFor}`).checked;
	if (!menuChecked) {
		menuCoverEle.classList.add('cover-show');
	} else {
		menuCoverEle.classList.remove('cover-show');
	}
}

function menuNavChangeImg(e) {
    e.preventDefault();
	menuCoverImg.src = `./src/img/${this.dataset.type}.jpg`;
	menuCoverImg.classList.add('img-zoom');
}

function showOriginalImg(e) {
	e.preventDefault();
	menuCoverImg.src = './src/img/general.jpg';
	menuCoverImg.classList.remove('img-zoom');
}