import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  // Invoke the uploadPhoto function to upload the user's photo & then chain all
  // Combine the promises and manage them with a single error handling statement.
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((userResp) => {
      // If the user creation is successful, log the body, firstName, and lastName to the console
      console.log(`${userResp[0].body} ${userResp[1].firstName} ${userResp[1].lastName}`);
    })
    .catch(() => {
      // If an error occurs, log "Signup system offline" to the console.
      console.log('Signup system offline');
    });
