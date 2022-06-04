### Project Indigo Charlie

This app uses NextJS as the framework which easily allows for API routes and SSR. I used TailwindCSS for styling as its very quick and easy. For testing, I used `jest` and `react-testing-library`. You can view this codenamed project at https://indigo-charlie.netlify.app

Alternatively, you can clone this repo and run the following scripts:

- `yarn` to install dependencies
- `yarn dev` to run the local server and view in http://localhost:3000/
- `yarn test` to run the unit and integration tests
- `yarn lint` to lint the project

## Notes

I would have liked to spend more time on this but my time was limited. Here are some considerations and things I would have liked to do with more time:

- with more time would have added more content the home page
- adding SSR to the home page muddied the code a little bit. In an ideal world, we'd SSR the loading state and then client side hydrate
- for simplicity, I create an API lambda that responds depending on the username/password - you can view it at `pages/api/auth.ts`

## Requirements

- [x] It should consist of at least two pages - the login and a home page.
- [x] It should be functional e.g. login should take users to the home page - use 'incard' for username and password.
- [x] It should Handle errors e.g. if incorrect details were entered or session has expired.
- [x] The session should be persistent e.g. on page reload the user should not be taken back to the login page. If the session has expired then they should be redirected back to the login page.
- [x] It would be nice to support SSR.
- [x] Create 2-3 unit tests.
- [x] Deploy the app to Netlify.
