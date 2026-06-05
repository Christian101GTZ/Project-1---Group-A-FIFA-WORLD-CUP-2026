# Project 1 - Group A: FIFA WORLD CUP 2026

Submitted by: **Christian Gomez**

This web app: **An interactive board for Group A of the 2026 FIFA World Cup. It shows the four teams, all six group-stage matches, and the host stadiums. Users can enter their own scores for each match and watch the live standings table recalculate and re-rank automatically.**

Time spent: **8** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The app has a cohesive, unique theme for events or resources relevant to a specific community**
  - [X] Header/title describing the theme is displayed
- [X] **At least 10 unique events or resources are displayed in a responsive card format**
  - [X] There are at least 10 cards displayed for 10 different events 
  - [X] The cards should be displayed in an organized format (ex. a grid, or in one line)
  - [X] Each card should include some information about the event or resource


The following **optional** features are implemented:

- [ ] Buttons or links to a related resources are on each card component
  - [ ] All cards have buttons or links in addition to text
- [X] The site is responsive for both desktop and mobile formats
  - [X] Web app is shown in a mobile format
  - [ ] **Video Walkthrough Special Instructions**: To ease the grading process, please use Chrome Developer Tools' "Toggle Device" button to demonstrate that your web application's responsiveness in both a desktop *and* a mobile format. Detailed instructions can be found below this stretch feature on the project page. 

The following **additional** features are implemented:
* [x] **Live score simulator** — users edit any match score and the standings table updates in real time (points, goal difference, and ranking all recalculate).
* [x] **Computed standings table** with automatic sorting and top-2 qualifying highlight.
* [x] Real 2026 World Cup fixtures, official flag images, and stadium photos.
* [x] Sticky standings table beside an independently scrolling match list.


## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='./src/assets/Animation.gif' title='Video Walkthrough' width='600' alt='Video Walkthrough' />

And here's the app in a mobile format:

<img src='./src/assets/Phone_Display1.gif' title='Mobile Walkthrough' width='250' alt='Mobile Walkthrough' />

GIFs created with ScreenToGif

## Notes

A few things were challenging as I built this:

- **Writing the components and passing props** — figuring out how to structure each
  component (TeamCard, MatchCard, StadiumCard) and pass the right data into them with
  props took some trial and error, especially keeping the JSX tags opened and closed
  correctly.
- **Setting up the data constants** — organizing the teams, matches, and stadiums as
  arrays of objects (instead of hard-coding everything) so I could render them with
  .map() was a new way of thinking for me.
- **The live standings** — making the table update from the scores meant the match data
  had to live in React state (useState) so the page would re-render.
- **The CSS (App.css)** — getting the layout right took the most fiddling: the
  side-by-side table/matches, the sticky table, the responsive grid, and keeping the
  gradient background consistent.

## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.