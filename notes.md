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
