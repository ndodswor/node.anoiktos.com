Map of XServer (eXpress Server) files:

XServer.js : Starts server
XServer/config.js : loads global files and variables
XServer/functions.js : javascript functions for the router to call
XServer/router.js : routes and the functions they call
XServer/public/ : publicly accessible files
XServer/innerHTML: Where I store HTML files I want to be able to access but don't want to be public

Dependencies:

The Node.js express project (Thanks, StrongLoop and everyone associated with the project for making this whole process way simpler than when I first implemented node!)
path
express-session
body-parser
cookie-parser
