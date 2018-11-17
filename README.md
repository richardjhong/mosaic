1. __Installation/ Run instructions:__  
  - After downloading repository, run `npm install`. This will include a new dependency __superagent__ [https://www.npmjs.com/package/superagent].

  - Run `npm start`. The default port will be 3000.
 ---
2. __Initial behavior:__  
  - When the web app loads the first time, the default listings will be for the latest 50 trending gifs, all sorted in ascending
order by the import_datetime. Upon the user's scrolling to the bottom of the page, an additional 4 of the trending gifs will
join the listing, offset from the end of the previous end of listings.
---
3. __Changing behavior:__  
  - To change the perimeter for sort, the user can choose between the four radio options: score, rating, import date time, and title as well as in ascending or descending order.

  - The search criterion will be trending by default but can be made to search specifically via typing in the input field and pressing the enter key. If this input field is left blank, the search will revert to looking up the latest trending gifs.
---
4. __Viewing GIF's information/ Adding favorites:__  
  - To see a gif's information, click any gif on the bottom of the page. This should replace the initial umbrella gif, which served as a placeholder. If the user clicks then on the image within the gif information section, it will add this to the user's favorite's section, which will display after at least one gif is favorited.  
  (_User should note that after adding at least 6 gifs, a warning will appear that any additional added gifs will start replacing the previous gifs. If a 7th gif is added, the previous 1st gif of the six will be replaced. If an 8th gif is added, the 2nd gif of the six will be replaced and so forth._)
