# Udacity | Quiz your tech with React Native

Create an infinite number of decks about your prefered topic using the button `Add deck` from the main menu. 
Choose a deck from the list and fill it with the strangest questions to ask with their response.

When your are ready, start the quiz and play with your buddies. Let them scroll the questions, watch the response and make the hard decision: Correct or Not? 

After the quiz keep calm and discover your score. Have you been defeated?

Don't worry! Go back to the deck detail page and restart the quiz! 

--------------------------------------------------------------------------------

### Prerequisites

What things you need to install the software 

```
docker 17+
docker-compose 1.19.0+

```

--------------------------------------------------------------------------------

### Development

```bash
# Change the directory to the docker development 
cd docker/dev

# Create a .env file with your local application folder
echo "APP_FOLDER=/path-to-your-local/app" > .env 

# Run the micro services using docker compose
sudo docker-compose up -d

# Connect your mobile to your laptop. If they aren't on the same wifi network,
# activate the usb tethering for sharing the mobile network with your computer.

# Find your local laptop address using a tool like ifconfig.

# Install Expo Client(http://expo.io) on your phone. 

# Launch the Expo Client and insert manually the Native server address
# on "Explore" tab search bar:
# exp://<your-laptop-ip-address>:19000

```

--------------------------------------------------------------------------------

## Authors

- **Simone Adelchino** - [_claclacla_](https://twitter.com/_claclacla_)

--------------------------------------------------------------------------------

## License

This project is licensed under the MIT License

--------------------------------------------------------------------------------

## Acknowledgments

- [ReactJs](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io)