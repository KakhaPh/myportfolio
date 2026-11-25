import { useEffect, useRef } from "react";
import TagCloud from "TagCloud";

const texts = [
    "ReactJs",
    "NextJs",
    "JavaScript",
    "Laravel",
    "PHP",
    "Html5",
    "Css",
    "Scss",
    "Python",
    "C++",
    "Node",
    "jQuery",
    "Git",
    "GitHub",
    "Linux",
    "MySQL",
    "NoSQL",
    "Bash",
    "Jest",
    "Frontend",
    "Agile",
    "OOP",
    "Java",
    "Kotlin",
    "XCUITest",
    "Selenium",
    "Selenide",
    "Playwright",
    "Rest Assured",
];

// Scale the sphere to the screen so it never overflows on phones.
const getRadius = () => {
    const width = window.innerWidth;
    if (width < 400) return 130;
    if (width < 576) return 150;
    if (width < 992) return 200;
    return 250;
};

const Introduction = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const create = (radius) => TagCloud(container, texts, {
            containerClass: "tag-cloud",
            itemClass: "tag",
            radius,
            direction: 225,
            initSpeed: "fast",
            maxSpeed: "normal",
        });

        let radius = getRadius();
        let cloud = create(radius);

        const onResize = () => {
            const next = getRadius();
            if (next !== radius) {
                radius = next;
                cloud.destroy();
                cloud = create(radius);
            }
        };

        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("resize", onResize);
            cloud.destroy();
        };
    }, []);

    return (
        <section className="Introduction">
            <div className="myIntroduction">
                <h2>Introduction</h2>
                <p>As a seasoned software developer with a robust foundation in web technologies, I bring a wealth of experience to the table. My journey includes not only successful completion of coding bootcamps but also academic pursuits at a prestigious European university, coupled with active participation in the Erasmus+ mobility program at Daugavpils University in Latvia. A nimble learner by nature, I thrive on collaborating closely with clients to craft tailored solutions that meet their specific needs. My commitment to excellence and passion for innovative problem-solving make me a valuable asset in the dynamic field of software development.</p>
                <p>You&apos;ll find a comprehensive list of technologies alongside this text, showcasing my extensive hands-on experience and proficiency gained through practical engagements.</p>
            </div>
            <div ref={containerRef} className="tagcloud"></div>
        </section>
    );
};

export default Introduction;
