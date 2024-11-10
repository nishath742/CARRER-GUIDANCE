// script.js

document.querySelectorAll('.tab-link').forEach(tab => {
    tab.addEventListener('click', function(event) {
        event.preventDefault();
        const activeTab = document.querySelector('.tab-link.active');
        activeTab.classList.remove('active');
        tab.classList.add('active');

        const activeContent = document.querySelector('.content.active');
        activeContent.classList.remove('active');
        const targetContent = document.querySelector(tab.getAttribute('href'));
        targetContent.classList.add('active');
    });
});

function showSyllabus(level, branch) {
    const syllabusContent = {
        highschool: {
            ssc: {
                subjects: "Mathematics, Science, Social Studies, English, Hindi.",
                details: {
                    Mathematics: "Algebra, Geometry, Trigonometry, Statistics.",
                    Science: "Physics, Chemistry, Biology.",
                    SocialStudies: "History, Geography, Civics.",
                    English: "Grammar, Literature, Writing Skills.",
                    Hindi: "Grammar, Literature."
                }
            },
            cbse: {
                subjects: "Mathematics, Science, English, Social Studies, Physical Education.",
                details: {
                    Mathematics: "Sets, Relations, Functions, Calculus.",
                    Science: "Physics, Chemistry, Biology.",
                    English: "Literature, Grammar, Writing Skills.",
                    SocialStudies: "History, Geography, Political Science.",
                    PhysicalEducation: "Health, Sports, Physical Fitness."
                }
            },
            icse: {
                subjects: "English, Mathematics, Science, Geography, History, Art.",
                details: {
                    English: "Literature, Language, Writing Skills.",
                    Mathematics: "Algebra, Geometry, Trigonometry.",
                    Science: "Physics, Chemistry, Biology.",
                    Geography: "Physical and Human Geography.",
                    History: "Indian History, World History.",
                    Art: "Drawing, Painting, Sculpture."
                }
            },
            state: {
                subjects: "Varies by state, generally includes Mathematics, Science, Language, and Social Studies.",
                details: {
                    Mathematics: "Basic Arithmetic, Algebra, Geometry.",
                    Science: "General Science covering Physics, Chemistry, Biology.",
                    Language: "Regional Language and Literature.",
                    SocialStudies: "History, Geography, Current Affairs."
                }
            }
        },
        intermediate: {
            mpc: {
                subjects: "Mathematics, Physics, Chemistry.",
                details: {
                    Mathematics: "Calculus, Linear Algebra, Differential Equations.",
                    Physics: "Mechanics, Thermodynamics, Electromagnetism.",
                    Chemistry: "Physical Chemistry, Organic Chemistry, Inorganic Chemistry."
                }
            },
            bipc: {
                subjects: "Biology, Physics, Chemistry.",
                details: {
                    Biology: "Cell Biology, Genetics, Ecology.",
                    Physics: "Mechanics, Optics, Modern Physics.",
                    Chemistry: "Physical Chemistry, Organic Chemistry, Biochemistry."
                }
            },
            hec: {
                subjects: "History, Economics, Civics.",
                details: {
                    History: "Ancient, Medieval, Modern History.",
                    Economics: "Microeconomics, Macroeconomics, Indian Economy.",
                    Civics: "Political Science, Constitution, Governance."
                }
            },
            cec: {
                subjects: "Commerce, Economics, Civics.",
                details: {
                    Commerce: "Accountancy, Business Studies, Marketing.",
                    Economics: "Microeconomics, Macroeconomics.",
                    Civics: "Political Science, Governance."
                }
            },
            arts: {
                subjects: "Fine Arts, Literature, History, Sociology.",
                details: {
                    FineArts: "Painting, Sculpture, Music.",
                    Literature: "Poetry, Prose, Drama.",
                    History: "World History, Art History.",
                    Sociology: "Introduction to Sociology, Social Issues."
                }
            },
            mlt: {
                subjects: "Microbiology, Biochemistry, Pathology.",
                details: {
                    Microbiology: "Bacteriology, Virology, Mycology.",
                    Biochemistry: "Metabolism, Enzymology, Molecular Biology.",
                    Pathology: "General Pathology, Systemic Pathology."
                }
            },
            commerce: {
                subjects: "Accountancy, Business Studies, Economics.",
                details: {
                    Accountancy: "Financial Accounting, Cost Accounting.",
                    BusinessStudies: "Principles of Management, Business Environment.",
                    Economics: "Microeconomics, Macroeconomics."
                }
            }
        },
        graduation: {
            diploma: {
                subjects: "Varies by field, typically includes practical and theoretical subjects.",
                details: {
                    Engineering: "Engineering Mathematics, Mechanics, Technical Drawing.",
                    Hospitality: "Food Production, Front Office Operations, Housekeeping.",
                    Design: "Fashion Design, Interior Design, Graphic Design."
                }
            },
            degree: {
                subjects: "Core subjects of the chosen major.",
                details: {
                    Engineering: "Core Engineering Subjects, Project Work.",
                    Arts: "Major in chosen field, electives in Humanities.",
                    Sciences: "Core Science Subjects, Research Methods."
                }
            },
            btech: {
                subjects: "Engineering Mathematics, Mechanics, Electrical Engineering, Computer Science.",
                details: {
                    Mathematics: "Calculus, Linear Algebra, Probability.",
                    Mechanics: "Statics, Dynamics, Fluid Mechanics.",
                    ElectricalEngineering: "Circuit Theory, Electronics, Control Systems.",
                    ComputerScience: "Data Structures, Algorithms, Operating Systems."
                }
            },
            bsc: {
                subjects: "Core Science subjects like Physics, Chemistry, Mathematics.",
                details: {
                    Physics: "Classical Mechanics, Quantum Physics, Thermodynamics.",
                    Chemistry: "Organic Chemistry, Inorganic Chemistry, Physical Chemistry.",
                    Mathematics: "Calculus, Algebra, Statistics."
                }
            },
            bba: {
                subjects: "Business Management, Marketing, Accounting, Human Resources.",
                details: {
                    BusinessManagement: "Principles of Management, Organizational Behavior.",
                    Marketing: "Marketing Management, Consumer Behavior.",
                    Accounting: "Financial Accounting, Management Accounting.",
                    HumanResources: "HR Management, Industrial Relations."
                }
            },
            ba: {
                subjects: "Arts and Humanities, including Literature, History, Political Science.",
                details: {
                    Literature: "English Literature, Comparative Literature.",
                    History: "World History, Indian History.",
                    PoliticalScience: "Political Theory, International Relations."
                }
            }
        },
        postgraduation: {
            mtech: {
                subjects: "Advanced Engineering Mathematics, Specialized Engineering Subjects.",
                details: {
                    AdvancedMathematics: "Complex Analysis, Numerical Methods.",
                    Specializations: "VLSI Design, Software Engineering, Structural Engineering."
                }
            },
            mba: {
                subjects: "Business Strategy, Marketing, Finance, Operations Management.",
                details: {
                    BusinessStrategy: "Strategic Management, Business Policy.",
                    Marketing: "Marketing Research, Digital Marketing.",
                    Finance: "Financial Management, Investment Analysis.",
                    OperationsManagement: "Supply Chain Management, Quality Management."
                }
            },
            msc: {
                subjects: "Advanced topics in chosen science field, including research methods.",
                details: {
                    ResearchMethods: "Quantitative Methods, Qualitative Methods.",
                    CoreSubjects: "Advanced topics in Physics, Chemistry, Biology."
                }
            },
            ma: {
                subjects: "Advanced studies in Arts and Humanities disciplines.",
                details: {
                    Literature: "Critical Theory, Literary Criticism.",
                    History: "Historiography, Research Methods.",
                    Sociology: "Social Theory, Research Methods."
                }
            },
            mcom: {
                subjects: "Advanced Accountancy, Business Management, Economics.",
                details: {
                    Accountancy: "Advanced Financial Accounting, Taxation.",
                    BusinessManagement: "Strategic Management, Entrepreneurship.",
                    Economics: "International Economics, Development Economics."
                }
            }
        }
    };

    const syllabus = syllabusContent[level][branch];
    const syllabusDiv = document.getElementById(`${level}-syllabus`);
    
    if (syllabus) {
        const subjects = syllabus.subjects;
        const details = Object.entries(syllabus.details).map(([subject, content]) => 
            `<strong>${subject.replace(/([A-Z])/g, ' $1')}:</strong> ${content}<br><br>`
        ).join("");

        syllabusDiv.innerHTML = `<h3>${branch.toUpperCase()} Syllabus:</h3><p>${subjects}</p><div style="margin-top: 10px;">${details}</div>`;
    } else {
        syllabusDiv.innerHTML = `<h3>${branch.toUpperCase()} Syllabus:</h3><p>Syllabus not available.</p>`;
    }
}
