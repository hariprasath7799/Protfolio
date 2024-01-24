const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'KG College of arts and science',
                degree: 'Msc Software Systems',
                detail: "Post Graduate in Software Systems from KG College Coimbatore.",
                percentage:"6.7CGPA",
                year: '2016-2021'
            },
            {
                id: 1,
                title: 'Sri Rangaswamy Naidu Higher Secondary School',
                degree: 'HSC',
                detail: "Completed 11th and 12th from Sri Rangaswamy Naidu Higher Secondary School Coimbatore", 
                percentage:"79%",
                year: '2014-2016'
            },
            {
                id: 2,
                title: 'Swathanthra Higher Secondary School',
                degree: 'SSLC',
                detail: "Completed 10th from Swathanthra Higher Secondary School Coimbatore",
                percentage:"89%",
                year: '2013-2014'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'My Hire Cloud',
                role: 'Frontend Developer',
                url: 'https://web-dev.myhirecloud.com/',
                desc: 'As a frontend developer, I use React & JavaScript to build user interfaces for web applications.',
                year: '09/2022 - 2023',
                location: 'Coimbatore, India'
            },
            {
                id: 1,
                title: 'Motiv AI App',
                role: 'Frontend Developer',
                url: 'https://app.motivai.tech/',
                desc: 'As a frontend developer, I use React & JavaScript to build user interfaces for web applications.',
                year: '09/2022 - Present',
                location: 'Coimbatore, India'
            },
           
            {
                id: 2,
                title: 'Motiv',
                role: 'Frontend Developer',
                url: 'https://motivai.tech/',
                desc: 'As a frontend developer, I use React  to build user interfaces for web site.',
                year: '02/2023 - Present',
                location: 'Coimbatore, India'
            },
            {
                id: 3,
                title: 'QueGlider',
                role: 'Frontend Developer',
                url: 'https://mango-glacier-0f8caaa00.4.azurestaticapps.net',
                desc: "As a frontend developer, I use React & JavaScript to build user interfaces for web applications.",
                year: '12/2023 - Present',
                location: 'Coimbatore, India'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
