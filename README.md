# **Buffy Flix**



*Buffy Flix* is a web based application that uses a custom built API based the popular WB Network show “Buffy the Vampire Slayer.” *Buffy Flix*  gives fans of “Buffy the Vampire Slayer” and its’ spinoff show “Angel” the ability to search for their favorite episodes using a variety of search parameters.

This application was created as an introduction to React project during Module 2 at Turing School of Software and Design. The API used was inspired by a dataset created by Turing student, Ashley Levi. This project was the teams first experience to both use the React framework to build an application in addition to managing a large set of data.  

Our baseline style was inspired by the Netflix carousel which allows a user to shuffle through movies . The home page of Buffy Flix is populated by “Buffy the Vampire Slayer” episodes starting with episode 1 and can be shuffled with arrow buttons. 

![buffyflix screenshot 1](https://user-images.githubusercontent.com/36204045/47824237-7a500280-dd31-11e8-9da8-61820c4e353b.png)
===




Hovering on an episode card reveals information from the specific episode including season, average rating, death count and a brief synopsis. In addition, an add to watchlist button and imdb link are revealed.  When the buttons are hovered over, modal windows provide additional information describing the button's functions.

![screenshot hover](https://user-images.githubusercontent.com/36204045/47824277-b6836300-dd31-11e8-96b8-25ca2858a5f2.png)
===




Below the main carousel is a watchlist which is populated with episodes the user has chosen to save using the “save to watchlist” button on the main carousel cards. The  watchlist episode cards provide the episode name, number, season and a delete from watchlist button. Much like the carousel, the watchlist can be shuffled left and right using the appropriate arrow buttons.

![buffyflix screenshot 2](https://user-images.githubusercontent.com/36204045/47824264-a1a6cf80-dd31-11e8-89c0-f1bacd5c9522.png)
===




The search bar allows a user to choose from three search parameters. The default parameter is set to search by episode. Additional dropdown options include average episode rating and “death count.” An auto complete feature populates a dropdown with information that matches the users input as they type.   

<img width="1407" alt="screen shot 2018-10-31 at 4 43 31 pm" src="https://user-images.githubusercontent.com/36204045/47824289-cc912380-dd31-11e8-8241-bafbc01be9b3.png">





### Additional Development:
* Expanded API to include all seasons of both “Buffy the Vampire Slayer” and  “Angel.”
* Expanded search parameters to include specific seasons, episodes, character appearances and weapons used.
* Improved search bar styling that better incorporates the show’s theme.
* Improved transitions for carousel and watchlist
* Video clips of episodes when carousel cards are hovered.
* Ongoing updates based on user testing.


### Installation and Setup Instructions

1. Clone down this repository.

2. cd into directory.

3. Run `npm install` in terminal.

4. Run `npm start` in terminal to start server.



