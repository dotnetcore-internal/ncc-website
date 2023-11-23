The download agent can be deployed on different machines. For a single-machine spider, each spider instance will start a separate download agent. The download agent is responsible for receiving download requests and using the corresponding downloader (HttpClient, Puppter, or a custom implemented downloader).

