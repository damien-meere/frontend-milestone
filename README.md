# Damien Meere - BT Ireland
User-Centric Frontend Development Milestone Project - Code Institute 

This project website will highlight my capability to employ the various tools illustrated through out the User-centric frontend development section of the Code Institute programme. 
This site will be a mock-up of a training company site. This will house information from three different strands of training - Technical, Management and Soft-Skills training.

## Demo
A live demo can be found [Here](https://damien-meere.github.io/frontend-milestone/index.html)

<!--Need to create a site demo gif to illustrate the front page of the site scrolling-->

## UX
The goal in developing this site to to make it easy for training candidates to access information on available training options, through a minimalist, sleek, easy to navigate site. 
This site is built to provide this capability regardless of the devices utilised to access the site. Therefore, trhought out the site, two versions of content are presented. 
On larger screens, more verbose content is rpesented. However, on smaller screens, text is kept to a minimum to ensure only the most pertinant information is shown.



A link to various social media platforms (i.e. LinkedIn profile, GitHub, twitter etc.) are also provided to illustrate this functionality. I've not built social media profiles for my training company, 
so these links refer directly to each site's homepage.

## Technologies
1. HTML
2. CSS
3. Bootstrap (4.3.1)

## Current Features
This site uses the JSFiddle script to enable the alteration of booking modals, depending on the chosen programme.

I've created a number of response modals to illustrate an automated response to user inputs. This occurs when a user submits a request for a space within a course, or when the use uses the 'Get In Touch' Button
in the Navbar (visible on larger screens).There is currently no back-end to harness the user data, so this is merely in plasce to demonstrate this functionality.

I've impletemented a basic script to validate inputs to the contact form. This enforces the inclusion of input to the Name field, as well a proper formatting for the email field. 
This also ensures content within the message section of the page.

I've included a section within the Technical page to illustrate the capability of Eolas to deliver Video Training programmes. The short video snippet I've embedded within the page is 60 seconds long 
and discusses the ARP Protocol in Networking. 

## Future Features 
In future, the booking form illustrating course availability progress bars, will be linked to a working database in order to give training candidates an accurate view of available space on the coure. 

At the moment, user inputs are acknowledged through automated reponse modals. In the next iteration of this site, user inputs will be harnessed from the booking forms and contact forms, and actioned within
the back-end of the site. Rather than a notification that a company representative will be in contact, that input will be validated, and stored within the back-end database, and reflected in the 
course availability progress bars.

## Testing
All links will open in a new tab using 'target="_blank"'.  All links have been manually tested to ensure that they are pointing to the correct destination.

## Deployment
This site is hosted using GitHub pages, deployed directly from the master branch. The deployed site will update automatically upon new commits to the master branch. 
In order for the site to deploy correctly on GitHub pages, the landing page is named `index.html`.

To run locally, you can clone this repository directly into the editor of your choice by pasting `git clone https://github.com/damien-meere/frontend-milestone.git` into your terminal. 
To cut ties with this GitHub repository, type `git remote rm origin` into the terminal.

## User Stories

### Media
<!--INclude details of image locations (BT??)-->
A number of photos were taken from [Pexels](https://www.pexels.com/), a stock image library. In particular, the main images behind the jumbotrons throughout the site.

### Acknowledgements
<!--Achnowledge any third-party utilities employed in the development of this site-->
The JSFiddle Javascript function, which is used to alter the contents of the course booking modals based on the selection of the dropdown menu can be found [Here](http://jsfiddle.net/TLBvx/252/).

Adobe Color Wheel [Found Here](https://color.adobe.com/create) utilised to align color schemes.