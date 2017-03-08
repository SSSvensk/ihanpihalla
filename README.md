# residentialyardgame
Repo for RYDG project and voluntarily work after the project.

To contribute to this project, see https://github.com/SSSvensk/ihanpihalla/blob/master/How2Contribute.md

Current game found in following address (only client-side implementation):
http://people.uta.fi/~ss98607/ihanpihalla/

This repository contains code used for Residential Yard Design Game or Ihan Pihalla. This is a simple web app to add elements to yard-like environment. Based on how good your yard design is, more points you've got.

JS libraries/frameworks used for this project so far:
Three JS (https://github.com/mrdoob/three.js/)
OSMBuildings?

Server-side language: NodeJS
Database: MySQL?

Chat channel: TBA

~^.^~

Implement evaluation as follows: Any object has 2 point values that are constantly updated depending on its location Value 1 (number of object) --> absolutevalue(d) = optimal_numberofobject - current_numberofobject Value 2 (proximity of object to all other objects) --> absolutevalue(s_object1-2) = optimal_proximity_object1-2 - current_proximity_object1-2 --> is added to points if absolutevalue(s_object1-2) is less than maximum_proximity_object1-2 (a valid connection)

Value 1 has only one value per object Value 2 has multiple values per object, depending on the individual connections to other objects. Options: Data structure with nodes and edges (Replaced with right word :D, Sami, 19.12) or array for each object

Point calculation: points (p) defined as linear function of d and s_objectn-n p = m d + points_max (Value 1) p = m s_objectn-n + points_max (Value 2) where m is a predefined multiplier

Total points of object is p(d) + p(s_objectn-n) note, as many s_objects as there are valid connecctions for that object
Find out how to make nicer/customized graphics
~^.^~


Update 18.2.17

Project is officially in the hands of the collaborators, and is set to be revamped and opened to the community. Check back soon.

Additions: server code (node); see issues. 
To do: database code and discussion about data handling and processing. Bug fixes and other planned additions: see issues. 

Over and out ~^.^~
