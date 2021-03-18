Nov 25:  have hit potential impasse.  Now need to either continue building out app as if only one category or learn more about react router and have them dynamically render the correct stuff.  
two additional stateless components will be needed - how bout a card component, one for DinoType AND Era, and another for Dinosaurs.  That will be five.
Nov 28:  All routes seem to be working well; react router names interpolated into backend URLs.  
Next step:  Incorporate CRUD

Stretch:  add a user model

Nov 29:
-Next steps:  Consolidate table using bootstrap
-Implement delete and edit steps!
-CSS:- need to fix the card situation.  


Nove 30:

CRITICAL:  Edit and Delete Dinos.  Start with Delete.  This is critical.
Second priority:  Just make it look good with bootstrap.  Then submit the thing.  
you also need form validations so they cant submit a blank form

Dec 2 Next Steps:  
Need to figure out how to get dinosaur props to the edit dino form so it can prepopulate.  DONE.
Return to default checking of radio button for era later.  

Dec 4 Next Steps:
-Fix card CSS before going any further.
-See if there is a better way to have instant changes to dinocard / dinocontainer on add / edit - probably just update state with new values instead of re-fetching?
-Must get default radio button for dinosaur edit.  
-Must add form validations so user can't submit a blank form
-Try and get eraId into editDinosaur action so it can fetch to a more appropriate looking URL (although it will work anyway because of independent dinosaur IDs)
-Bonus:  Can you remember how to get the % out of the Url?  did that in Rails project.
-I think i should remove dinosaursList component and merge it with dinosaur container and then make card a functional component -
Dec 5:
Today I realized that the page wasn't updating properly because the Redux store wasn't updating properly, and my dinoCard was getting convoluted anyway, so I have started a refactor
of dinosaur container and dinocard (eliminating dinosaurlist) to try and fix that.  
--collateral damage:- Add dinosaur / hide Form button no longer works; edit and delete buttons no longer work.
-Card CSS largely fixed but they still need to be side by side
-All other Dec 4 todos remain but I think this is still progress.  

Dec 6 Notes and Next Steps:
-fixed redux store issue, fixed add dinosaur not rendering instantly (form issue/wasn't collecting dinosaur id)
-Restored edit form and add form functionality
-Delete still broken, either get error about can't map, or it just doesn't re-render when I use filter.  
-DO NOT re-fetch in componentdidupdate, creates loop.  react should re-render automatically on state change.  
-Dinosaur list component now redundant and will be removed.
-Need to fix delete button and continue working on css.  Also EDIT FORM is still making a duplicate entry once the action is fired.  more work needed on keeping state up to date.  
-The problem is in my reducer....
December 8:
-Fixed all fetch URL issues (they worked anyway due to independent dino IDs, but could hinder future enhancements without correct interpolation) - BUT consistency in approaches per action could be improved
-CRUD all functional, reducers corrected
-Redux state updating as desired
-Remaining project is CSS
DevLog Dec 12: Project nearly done.  Last things to do:
-More CSS work with react-bootstrap
--Including make the era selector cards bigger, they are too small, maybe the dino tyes too
--Add more dinosaurs
--Rails side needs some work - textarea limit, validations
# Important:  When you make a change, do it to master, but push --force.  You'll then need to follow the instrucitions here again:
https://www.pluralsight.com/guides/how-to-create-react-application-and-deploy-on-github-pages
Delete ghpages branch locally and in github
then from master:  
npm run build
git checkout -b gh-pages
$ git commit -a -m "Create gh-pages branch with static content"
$ git push origin gh-pages
