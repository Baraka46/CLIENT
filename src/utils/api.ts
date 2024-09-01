const fetchLeagues = async (): Promise<any> => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer YOUR_API_KEY");  // Replace YOUR_API_KEY with your actual API key

    const requestOptions: RequestInit = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    try {
        const response = await fetch("https://api.sportmonks.com/v3/football?api_token=YOUR_TOKEN", requestOptions);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export default fetchLeagues;
