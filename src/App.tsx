import { useEffect } from 'react';
import './App.css';

declare global {
	interface Window {
		initChatbot?: () => void; // Assuming initChatbot() is the function to initialize the widget
		destroyChatbot?: () => void; // Assuming destroyChatbot() is the cleanup function
	}
}

const App: React.FC = () => {
	useEffect(() => {
		const chatbotUrl =
			'https://akeel-senzmate.github.io/chatbot-code-dev/chatbot-widget.js'; // Replace with your widget's URL

		const loadChatbotWidget = () => {
			// Check if the script is already loaded
			if (!document.querySelector(`script[src="${chatbotUrl}"]`)) {
				const script = document.createElement('script');
				script.src = chatbotUrl;
				script.async = true;

				// After the script is loaded, initialize the widget if necessary
				script.onload = () => {
					// Assuming the chatbot widget exposes a global function to initialize it
					if (window.initChatbot) {
						window.initChatbot(); // Initialize the chatbot after the script is loaded
					}
				};

				// Append the script to the body of the document
				document.body.appendChild(script);
			}
		};

		loadChatbotWidget();

		// Cleanup: Remove the script and cleanup global state when the component unmounts
		return () => {
			const script = document.querySelector(
				`script[src="${chatbotUrl}"]`,
			);
			if (script) {
				document.body.removeChild(script); // Remove the script when unmounting
			}

			// Optionally call the widget's cleanup function (if it exists)
			if (window.destroyChatbot) {
				window.destroyChatbot(); // Cleanup any global resources (if the widget supports this)
			}
		};
	}, []); // Empty dependency array ensures this runs only once when the component mounts

	return (
		<div>
			<h1>Welcome to My React App</h1>
			<div id="chat-root" />
		</div>
	);
};

export default App;
