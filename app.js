const LoadData = async () => {
    try {
        const url = 'DB/GoodToKnow.json';
        const url1 = 'DB/locals.json';
        const url2 = 'DB/activities.json';
        const url3 = 'DB/municipalities.json';
        const url4 = 'DB/regions.json';

        const results = await Promise.all([
            fetch(url),
            fetch(url1),
            fetch(url2),
            fetch(url3),
            fetch(url4)
        ])
        const dataPromises = results.map(results => results.json())
        const finalData = await Promise.all(dataPromises);
        console.log(finalData);

    } catch (err) {
        console.log(err);
    }
};
LoadData();
