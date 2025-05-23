🌍 What is CORS?
By default, browsers block requests made from a different origin (domain, port, or protocol) due to security reasons. CORS lets your server say, “It’s okay, I allow requests from that origin.”
Example:
Frontend: http://localhost:3000
Backend: http://localhost:5000
The browser will block frontend requests to backend unless CORS is enabled.
🍪 what is cookie?
A cookie is a small piece of data that a server sends to a user's web browser, and the browser stores it and sends it back with future requests to the same server. It's a key tool in web development for maintaining state (like user sessions, preferences, or tracking).
🍪 What Does cookie-parser Do?
It parses the Cookie header in incoming HTTP requests and makes the cookie values easily accessible via:


