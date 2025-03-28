import { useEffect } from 'react';
import './App.css';

function App() {
	useEffect(() => {
		const chatbotUrl =
			'https://akeel-senzmate.github.io/chatbot-code-dev/chatbot-widget.js';

		const loadChatbotWidget = () => {
			if (!document.querySelector(`script[src="${chatbotUrl}"]`)) {
				const script = document.createElement('script');
				script.src = chatbotUrl;
				script.async = true;
				document.body.appendChild(script);
			}
		};

		loadChatbotWidget();

		return () => {
			// Cleanup script on route change or component unmount
			const script = document.querySelector(
				`script[src="${chatbotUrl}"]`,
			);
			if (script) document.body.removeChild(script);
		};
	}, []);

	return (<div id="chat-root"/>);
}

export default App;
