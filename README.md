# Novel Travel Route customized Website based on LLM

The project uses OpenAI API as the content generator to customize the travel route. After signing up and logging in to the website, you can customize your route by inputting your requirements by text, audio, image, video, etc. In the dashboard, there will be a record of your route and calendar. You can check the route with maps and information on public transportation, estimated time, and tourist information, etc. 

The page fully considers the atheistic of nature and life, making the screen like a vivid movie. 

![Screenshot 2024-02-20 144400](https://github.com/Lin0He/Travel_webpage_AI/assets/104896569/4f89e8c7-d9a5-447b-b914-4054adf9dcd6)


Please check the complete web page deployment at: https://lin0he.github.io/Travel_webpage_AI/ , and due to the GitHub page limitation of video playing, there will be a delay when switching the pages.
- 22/04/2024 version 1.1 </br>
 Chatbot added </br>

- 20/02/2024 version 1.0 </br>
  establish the main page</br>
  remain the API result console log</br>
  todo: write the route of the response page of the search bar, and tune OpenAI API.

To deploy the project, you need to input your own OpenAI key. You can add in the file "src/component/SearchBar/SearchEngine.jsx" and find the const key. Or you can create a .env file in the root of the project.
After download and unzip the file:
```
cd Travel_webpage_AI
npm install
npm run dev
```

To initiate the OpenAI API backend, please follow:
```
cd chatbot-backend
npm install
npm start
```
