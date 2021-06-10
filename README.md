# Get Started
This is the Readme for explaining project structure and UI. For backend set up and using of code please see the Readme inside the ./amplify-tutorial folder

# Navigations
Making changes to the left hand navigations bar can be found under `src/pages/global/navbar`

NavBar
Represents the whole column

NavChoices
Represents the individual selection boxes

# Top Bar
Making changes to the top bar can be found under `src/pages/global/topbar`

# Home Page
Making chances to the homepage can be found under `src/pages/home/HomeComponent.jsx

# Alerts Page
Making chances to the alerts can be found under `src/pages/alerts/AlertsComponent.jsx

# Blueprints & Devices Page
Making chances to the Blueprints & Devices can be found under `src/pages/blueprints-and-devices/BlueprintsAndDevicesComponent.jsx

# Settings Page
Making chances to the settings can be found under `src/pages/settings/SettingsComponent.jsx`


# S3 Bucket Storage

## Sample Code

### Uploading a file

The first parameter to the .put() function is the name of the file and the second parameter is the content of the file. The example below will uploaded a file named test.txt, which contains the String Hello.

```js
const result = await Storage.put('test.txt', 'Hello');
```
More details about uploading [here](https://docs.amplify.aws/lib/storage/upload/q/platform/js).

### Downloading a file

The first parameter to the .get() function is the name of the file that will be downloaded. Other parameters are optional(check [here](https://docs.amplify.aws/lib/storage/download/q/platform/js) for default configurations), but the example below sets download to true(it is set to false by default) since we want to download the file, not only its URL.

```js
let deviceList = await Storage.get("user456", {download: true});
```

#### Parsing a text file on S3 bucket as a JSON

One use of the .get() function in this project is to retrieve a list of registered devices as a text file and then parsing it as a JSON, as done in the example below.

```js
let deviceList = await Storage.get("user456", {download: true});
deviceList = await deviceList.Body.text();
deviceList = await JSON.parse(deviceList);
```

#### Letting the user download the file on to their machine

Another use of the .get() function in this project is to retrieve the blueprint as an image an allow the user to downloaded the file on to their machine as in the example below.

```js
async function download() {
      const filename = "coordinates"; // the name of the file that we're downloading
      const result = await Storage.get(filename, { download: true });
      const blob = result.Body;
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename || 'download';
      const clickHandler = () => {
         setTimeout(() => {
            URL.revokeObjectURL(url);
            a.removeEventListener('click', clickHandler);
         }, 150);
      };
      a.addEventListener('click', clickHandler, false);
      a.click();
      return a;
   }
```

## Initial Setup

Make sure that you are configured to a registered S3 bucket, and write the following import statements(file paths may vary) in App.jsx.

```js
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);
```

Make sure the import statement as shown below exists at the top of the file that interacts with the S3 bucket.

```js
import { Storage } from 'aws-amplify';
```


## Trouble Shooting

The Storage section of [this doc](https://docs.amplify.aws/lib/storage/getting-started/q/platform/js) covers quite extensively what can be done with the S3 bucket.
