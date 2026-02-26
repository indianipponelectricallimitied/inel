
const fs = require('fs');
const fetchAndLog = async () => {
    try {
        const response = await fetch('https://inelbackend-sandy.vercel.app/api/investor');
        const data = await response.json();
        const items = data.map(i => ({
            id: i.id,
            name: i.name,
            subheadings: i.subheadings.map(s => ({ id: s.id, name: s.name }))
        }));
        fs.writeFileSync('investor_data_clean.json', JSON.stringify(items, null, 2));
        console.log('Successfully wrote investor_data_clean.json');
    } catch (e) {
        console.error(e);
    }
};
fetchAndLog();
