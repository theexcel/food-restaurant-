import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
        'Bearer ARaJOVBPGqazDK-vdVWLQ7tw6Uo3pHieCuG3f29Npmcx5FQEtczfElqGEjApyfHseqC1MWHglGq1OaZ7aZSWoA8XRv-bG3wNtDn0ZMfMZQYx08cDsHKrqZwZuEcvYnYx'
    }
});
 