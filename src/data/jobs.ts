export interface Job {
    title: string;
    slug: string;
    type: string;
    description: string;
    color: string;
    responsibilities: string[];
    experience: string[];
}

export const jobs: Job[] = [
    {
        title: "Time office executive",
        slug: "time-office-executive",
        type: "Full Time | Work From Office",
        description: "The Time Office Executive will be responsible for managing employee attendance, leave records, and time tracking systems. This role ensures accurate scheduling, adherence to company policies, and timely resolution of any attendance-related discrepancies to support efficient payroll processing and workforce management.",
        color: "#93CCE9", // Lightest blue
        responsibilities: [
            "Maintain accurate attendance and leave records.",
            "Manage time tracking systems and ensure compliance.",
            "Resolve any discrepancies related to employee attendance.",
            "Support payroll processing by providing accurate data.",
            "Ensure adherence to company policies regarding time and attendance."
        ],
        experience: [
            "Experience in HR, timekeeping, or related administrative roles.",
            "Proficiency in time management software/systems.",
            "Strong attention to detail and organizational skills.",
            "Good communication skills and ability to resolve discrepancies."
        ]
    },
    {
        title: "Project Costing Manager",
        slug: "project-costing-manager",
        type: "Full Time | Work From Office",
        description: "The Project Costing Manager oversees project budgeting, expense tracking, and financial forecasting. This role involves analyzing costs, identifying optimization opportunities, and ensuring that all projects remain within their financial targets while maintaining high-quality standards across developments.",
        color: "#4DB4EA", // Medium blue
        responsibilities: [
            "Oversee project budgeting and financial forecasting.",
            "Track project expenses and identify cost-saving opportunities.",
            "Ensure projects stay within budget while maintaining quality.",
            "Collaborate with project managers to align costs with timelines.",
            "Prepare detailed cost reports for management review."
        ],
        experience: [
            "Extensive experience in cost management, preferably in real estate or construction.",
            "Strong analytical and financial modeling skills.",
            "Knowledge of project management principles and cost tracking tools.",
            "Ability to work closely with cross-functional teams.",
            "Proven track record of optimizing project costs."
        ]
    },
    {
        title: "Head of Finance",
        slug: "head-of-finance",
        type: "Full Time | Work From Office",
        description: "The Head of Finance at Mukund Realty plays a critical role in safeguarding financial integrity and enabling disciplined growth. This role is responsible for statutory compliance, financial planning, capital expenditure management, and accurate reporting across all developments. Working closely with leadership, the position ensures financial clarity, regulatory adherence, and informed decision making, while supporting long term value creation through structured financial oversight and investor engagement.",
        color: "#0097DC", // Darkest blue (brand color)
        responsibilities: [
            "Statutory Compliance: Ensure adherence to GST, TDS, labor laws, and other regulations. Maintain strong relationships with auditors and regulatory bodies for timely payments and filings.",
            "Budget Planning: Oversee financial statements, analyze trends, manage capital expenditures, and present budgets to management.",
            "CAPEX Management: Accurately book and report capital expenditures in line with taxation laws and accounting standards.",
            "Accounts Payable & Receivable: Manage invoice approvals, payments, receipts, and client relationships efficiently.",
            "MIS Reporting: Update and present financial health and key performance indicators to management.",
            "Investor Relations: Review financial health, support fundraising, optimize financial structures, and build investor relationships."
        ],
        experience: [
            "10-12 years in finance, specializing in real estate, infrastructure, healthcare, hospital, or construction.",
            "Expertise in statutory compliance, financial reporting, and budgeting.",
            "Skilled in tax planning and capital expenditure management.",
            "Strong analytical skills for financial data interpretation.",
            "Experience with fixed asset management, accounts payable/receivable, and statutory accounting.",
            "Proven leadership and team management abilities.",
            "Proficient in financial management software.",
            "Investor relations experience is a plus."
        ]
    }
];
