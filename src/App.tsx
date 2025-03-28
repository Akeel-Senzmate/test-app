import { useEffect } from 'react';
import './App.css';

function Widget() {
	useEffect(() => {
		const chatbotUrl =
			'https://akeel-senzmate.github.io/chatbot-code-dev/chatbot-widget.js';

		const loadWidget = () => {
			if (!document.querySelector(`script[src="${chatbotUrl}"]`)) {
				const script = document.createElement('script');
				script.src = chatbotUrl;
				script.async = true;
				document.body.appendChild(script);
			}
		};

		loadWidget();

		return () => {
			// Clean up the script tag when the component unmounts
			const script = document.querySelector(
				`script[src="${chatbotUrl}"]`,
			);
			if (script) {
				document.body.removeChild(script);
			}
		};
	}, []);

	return <div id="chat-root"></div>;
}

function App() {
	return (
		<div>
			<Widget />
		</div>
	);
}

export default App;
