# residentialyardgame
Repo for RYDG project

This repository contains code used for Residential Yard Design Game.

Now this contains indexxx.html, mapstesti.html and some JS-files from Three JS-package. Full Three JS-package can be downloaded for your computer on following address: https://threejs.org/ or GitHub https://github.com/mrdoob/three.js/

Become collaborator by sending your GitHub username to Sami (DM/PM on Slack) and you will be added as collaborator.
~^.^~

UPDATE 10.12.

indexxx.html: Now it's possible to drag & drop objects (lol, cube) Infowindows

To do 15.12.16

    Change location/method of inserting elements

    Implement evaluation as follows: Any object has 2 point values that are constantly updated depending on its location Value 1 (number of object) --> absolutevalue(d) = optimal_numberofobject - current_numberofobject Value 2 (proximity of object to all other objects) --> absolutevalue(s_object1-2) = optimal_proximity_object1-2 - current_proximity_object1-2 --> is added to points if absolutevalue(s_object1-2) is less than maximum_proximity_object1-2 (a valid connection)

    Value 1 has only one value per object Value 2 has multiple values per object, depending on the individual connections to other objects. Options: Data structure with nodes and edges (Replaced with right word :D, Sami, 19.12) or array for each object

    Point calculation: points (p) defined as linear function of d and s_objectn-n p = m d + points_max (Value 1) p = m s_objectn-n + points_max (Value 2) where m is a predefined multiplier

    Total points of object is p(d) + p(s_objectn-n) note, as many s_objects as there are valid connecctions for that object
        Find out how to make nicer/customized graphics
    ~^.^~

    UPDATE 17.12.16

    indexxx.html Changed the way how objects are added

    -Sami

    Update 21.12.16 Possible to move real 3d objects Added some functions to show distance, list of objects -Sami
