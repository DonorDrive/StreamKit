window.config = {

	// the url of the DonorDrive API you wish to poll
	api: 'https://docs.donordrive.com/api/',
	// the resource (events, participants, teams)
	resource: 'participants',
	// the ID of the specific resource to poll
	resourceID: 2065,

	// properties specific to donation-ticker
	donationTicker: {
		// the duration (in seconds) the "new" badge will display next to a donation
		highlightDuration: 60,
		// donations over this amount will be highlighted in the list (null to ignore highlighting)
		highlightThreshold: 100,
		// the number of donations to return (1-100)
		listLimit: 25,
		// shows incentives redeemed if campaign supports them
		showIncentives: true
	},

	// properties specific to streaming-thermometer
	streamingThermometer: {
		showDonations: true
	}

};