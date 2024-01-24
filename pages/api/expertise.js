const expertise = [
    {
        id: 0,
        title: 'Front-End Development',
        desc: "As a highly skilled Front-End developer, I bring a wealth of experience to the table, specializing in crafting cutting-edge web applications using the industry's leading technologies. Proficient in React.js, Vue.js, Next.js, and Redux, my expertise extends beyond mere proficiency – I have a passion for creating dynamic and innovative solutions tailored to exceed client expectations.",
    },
    {
        id: 1,
        title: 'Jira',
        desc: "As a developer, I'm proficient in Jira . I use Jira to simplify project management tasks like task assignment, prioritization, and progress tracking.",
    },
 
    {
        id: 2,
        title: 'Github',
        desc: "GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.",
    },
   
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
