# BreadApplication
Source for Bread Application using React Native 

# Release Notes
Current Version: 1.0.0

Bread version 1.0.0 is the first released version of the application

**The Bread application version 1.0.0 includes the following features:**
- Creation and customization of business pages
- Searching for business pages by category, name, or content.
- Use quick-start buttons on the application’s home page to search for businesses.
-	Create and log into an account.
-	Save your favorites to your account for later access.
-	Rate and leave reviews on businesses.
-	Flag businesses as a user
-	Add and remove businesses an administrator.
-	Remove flagged business and reviews as an administrator
-	Adding new administrators as an administrator
-	Gives access to the secretary of state’s website for verifying and authenticating businesses as an administrator
-	Persists data to a data source on the cloud (Firebase by Google)
-	Administrator accounts with special privileges in reviewing/deleting inappropriate content

**The Bread application version 1.0.0 includes the following bugs and defects:**
- Users are unable to alter their profile and business images.
- Log out may not be done in a single session.
- Searching for businesses is case sensitive to the business’s contents.
- The application cannot pull rating and review information from Google and Yelp.
- Text editing may be inhibited by the system keyboard.
-	Searches will include any and all business in the database relevant to search parameter, regardless of location
-	User location is not taken into account
-	Once logged in as an administrator, once the user selects the settings button and presses the login button again, they will 		be brought back to the admin portal instead of the login page, until the administrator presses the log out button.


# Install Guide

**Prerequisites:**
Expo-CLI (for building) 
Expo/npm (for editing)

In order to edit and build the application, it is necessary to install Expo/npm as well as Expo-CLI. 

**Dependencies:**
For simple install:
*Any Android Version*
- *For build:*
	- Expo-CLI
	- npm

**Download Instructions:**
To download the apk for Android, download the apk from src/
To build Bread, clone or download the Bread GitHub repository at: https://github.com/catmonden/BreadApplication.git

**Build Instructions:**
The apk for version 1.0.0 of Bread may be downloaded, installed, and run immediately. For the future, if changes have been made to the source code, follow these instructions to build the apk.
To build the application, make sure that Expo-CLI is installed (npm install -g expo-cli), then issue the command “expo build:android“ from the root directory.

**Install Instructions:**
To install Bread after building the .apk file, open Android platform tools, connect the desired Android device via USB, then run “adb install <app-name>.apk” and wait for the installation to complete.

**Run Instructions:**
To run Bread, simply select the Bread icon from the Android home screen after installation.

**Troubleshooting:**
Make sure that the Android platform tools are up-to-date.
