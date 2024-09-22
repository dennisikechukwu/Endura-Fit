export const exerciseOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': "62bcd7750bmsh980ffdee63a1a68p148b39jsn76eaa22c832b",
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};

export const youtubeOptions = {
	method: 'GET',
	headers: {
	  'x-rapidapi-key': '62bcd7750bmsh980ffdee63a1a68p148b39jsn76eaa22c832b',
	  'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
	}
  };


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    
    return data
};