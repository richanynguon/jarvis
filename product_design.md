
Priorities:

Suppose you were tasked with creating an Intercom-like bot for people looking to build an embedded systems project (https://learn.adafruit.com/guides/projects). For example, someone might want to build a basic light switch but someone else a self driving contraption. You might want to ask them what they're interested in and help them put together a parts list and determine a fun project they can work on.

Take a look at Intercom's bot on their homepage ( [https://www.intercom.com/](https://www.intercom.com/) ) for inspiration. Try to find ways to add joy to the experience of talking to a bot (animations, emoji, or whatever feels special to you).

Try to cap the total time to 8-10 hours. You can use what technologies you'd like but avoid using an off the shelf chat bot or a direct copy of someone else's project. We want to see how you make this project your own. It's okay if you don't finish. Part of the task is to see how well you can scope the work and what's a priority to you.

If you have time leftover you can try something more full stack: see if you can come up with an app/script that displays the weather to an end user in a fun way.


8-10 hours deadline

MVP: Create a chat bot that  recommends a project and a parts list

Requirements: 
Bot has to be customer service friendly, think replika.ai
Cannot use anothers chat bot

Target User: Someone who is looking to build a project with specific interests 

UI: Probably will just copy intercom, but use jarvis colors

Stretch: Display weather to user, will probably 

TODOS:
Generate UI to reflect user flow (think of fast prototyping, to test cypress? )
    - Gen a design system to keep consistency if changes are needed | 2 hrs
    - Hard code required responses | 30 mins
    - UI BREAK DOWN:
        MVP: 
         - A widget looking button to expand jarvis - icon change or animation to show it has been clicked on | 30 mins
         - Onboarding pop up just a series of multiple choice questions | 2 hrs
         - Landing pop up | if hard coded prob 1 hr
            - Holds components: 
            - Create projects
            - Continue projects
            - Feed back
            - Peer project show case
        - Chat instance | 2 hr
Oh don't forget web reposinveness if its mobile you should prob just remove the
widget button and make it full screen

TOTAL HOPEFUL TIME: 8
with 2 hours of error??? 
-- will need data persistence MVP data storage stretch: database


# ES Chat Bot Product Design  
https://www.figma.com/file/3HAj9fz6Fq3GfPg6hoBTeL/Untitled?node-id=0%3A1
## Problem time estimations

## User Reasearch  
### Questions User Demographic  
- Teens to Adults
- High School to Post College

### User Flow


### User Types
Complete beginnner - recommend kits 
Moderate Hobbyist - if want to explore xyz use these
Heavy Hobbyist - favorites

## Vision - Problem & Objectives  
### Problem Core

It is time consuming to pick a place and item to purchase for a new embedded systems project. Specific inspiration: https://pcpartpicker.com/list/

### Problem Side Effects 

1. Users can waste money buying something that does not fit in the scope of the usage
2. Users can purchase items that do not work well together
3. Users can purchase can take too long when the project is due
4. Users do not have the tools to work with the items purchased
6. Cost Vs Time Arrival
7. Delivery Cost
8. Purchase from untrusted sources
9. Users purchase without encrypted buy
10. Users do not know why they need to buy something

### Objectives  
1. Reduce the logistics of creating the project
2. Achieve minimum costs to achieve these projects
3. Break down project into necessary pieces and identify project's core needs
4. Verify and make purchases behalf on the user
5. Help educate users to make better decisions 

## Architecture Details  
### Front End  
React
### Back End
Node Js  

Microservice
Distributed Systems and Partitioning
Load balancer 
-- Logging, Audting, Reporting, and ML - Metrics
Extensible

--- 1. Order overload -> recruitment
--- 2. Complexity -> Separation of Concerns
--- 3. Mishaps -> Fault tolerance

### Data Science Architecture  
Flask NLP Model - recommendations
LR Model - Min cost
Neural net - for similar users like you projects recommendation


## Solution   
### Basic Features  
1. Recommendation kits for beginners
2. Recommendation explored areas for moderate
4. Saved favorites
5. Recommendating Saved favorites
7. Purchasing using paypal
8. Giving visuals and sums of cart
9. Find min cost
10. Onboarding requires to understand users history

### Advanced Feature  
3. Peers projects
6. Alerts on saved favorites
10. adjust based on priorities: time, budget
11. Recommended tools for projects
12. Educate users to understand if they need recommended tool
13. Sift through untrusted sources
  
## Release Canvas  
### Problems Addressed  
### Solutions  
### Objectives Supported  
### Key Results  

## Competitor Research  
### What is your unique value proposition  

## Technical Research  
Google Shopping api
Consider scrapper

### Technical Architecture Planning  
### Platforms  
### Back-end  
### Front-end  
### Continuous Integration / Continuous Deployment (CI)  
### Application Host Platforms  



