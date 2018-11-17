1. Installation/ Run instructions:  
  After downloading repository, run `npm install`. This will include a new dependency _superagent_ [https://www.npmjs.com/package/superagent].
  Run `npm start`. The default port will be 3000.
 ---
2. Initial behavior:  
  When the web app loads the first time, the default listings will be for the latest 50 trending gifs, all sorted in ascending
order by the import_datetime. Upon the user scrolling to the bottom of the page, an additional 4 of the trending gifs will
join the listing, offset from the end of the previous end of listings.
---
3. Changing behavior:  
  To change the perimeter for sort, the user can choose between the four radio options: score, rating, import date time, and title as well as in ascending or descending order.

  The search criterion will be trending by default but can be made to search specifically via typing in the input field and pressing the enter key. If this input field is left blank, the search will revert to looking up the latest trending gifs.
