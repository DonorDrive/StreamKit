window.config = {

	// the url of the DonorDrive API you wish to poll
	api: 'https://www.extra-life.org/api/',
	// the resource (events, participants, teams)
	resource: 'participants',
	// the ID of the specific resource to poll
	resourceID: 400560,

	// properties specific to donation-ticker
	donationTicker: {
		// the duration (in seconds) the "new" badge will display next to a donation
		highlightDuration: 60,
		// donations over this amount will be highlighted in the list (null to ignore highlighting)
		highlightThreshold: 100,
		// the number of donations to return (1-100)
		listLimit: 25
	},

	// properties specific to streaming-thermometer
	streamingThermometer: {
		// pop up to show when a donation is received
		showDonations: false,
		// transparent background or default to grey
		transparentBackground: true,
		// scrolls most recent donations on screen
		scrollDonations: true,
		// compact view or full width of the screen
		compactView: true,
		// number of donations to return (1-100)
		donationLimit: 25
	}

};