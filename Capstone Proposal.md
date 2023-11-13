# Project Title

Daily Gratitude Journal & Meditation Website

## Overview

I am planning to create a website that user can write 10-15 minute gratitude journal (5 minutes) with a daily to-do list (5 minutes) and an option to meditate (5 minutes) in one page.

### Problem

User research indicates that individuals often struggle to maintain consistency and sustain motivation when engaging in journaling and meditation, despite being aware of the positive impact these practices can have on a healthy lifestyle.

By creating a website with to-do list, gratitude journal, and meditation feature on one page makes it easier for users to stay consistent with their gratitude journaling and meditation goals to feel accomplished and positive.

### User Profile

The main user of the application will be people who actively seeking tools to enhance their overall well-being and mental health, also individuals looking for centralized platform to manage tasks and goals efficiently.

### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

1. Showing current date on the main page (ex. 2023/11/13)

2. Forms that users can chosse either (gratitude journal list, to do list ) and submit the form.

- gratitude journal list will have 3 form inputs
- user can add as much inputs as they want for to-do list for one form

3. For the to-do list, users would be able to mark that the task is completed.

4. User can look back on what they wrote in the forms (using the calendar).

5. Background music that user can play while writing the forms.

6. Option to check whether the user completed the meditation for the day.

7. Random motivational quotes above the form.

## Implementation

### Tech Stack

- Using React and Sass for front-end & styling.
- Background music API for random relaxing music.
- Using "calendar" feature from library (ex. https://www.npmjs.com/package/react-calendar)

### APIs

1. Background music API (for journaling and meditation)

### Sitemap

1. Main page where users can submit daily form.
2. Journal entries page where user can access previous entries from the form.

### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

### Data

Users will be able to submit the daily form and they will be able to access the form inputs based on the date they select on calendar.

The input from the forms will be added to Json file in backend server and it will show on the Page (where user can access previous entries).

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

- users will be able to access the responsive website from desktop/mobile/tablet

1.  User will add the inputs to forms they want to complete for the day (users can choose to play the relaxing background music while journaling).

            [Example form format]

            I am greatful for ...

            1. Hiking with family today in the morning.
            2. Had great lunch.
            3. Getting good feedback from the team.

            What could make today great?

            1. Cleaning the windows.
            2. Finish project 1.
            3. Meet Anna in cafe.

            5 minute Meditation (check whether the user finished)

2.  Submit the form.

3.  Access the form from journal entries.

<!-- ### Auth

Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented. > No -->

## Roadmap

1. User Research (User Survey & Interview) & Analysis - due Nov 15th

2. Low Fidelity Mockup - due Nov 17th

- rough sketches

2. Building front-end using React - due Nov 21st

- finish major styling for the page
- forms for to-do list and gratitude journal
- confirm which API to use

3. Finish Back-end and connect to Front-end - due Nov 26th

## Nice-to-havess

1. Mood tracker (where user can keep track of their moods for the day for submiting the form)

2. Log-in functionality/ User Authentication
