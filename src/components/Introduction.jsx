import React, { useEffect, useRef, useMemo } from "react";
import TagCloud from "https://cdn.skypack.dev/TagCloud@2.3.2";

const Introduction = () => {
    const containerRef = useRef(null);
    const initializedRef = useRef(false);

    const texts = useMemo(() => [
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
        "OOP"
    ], []);

    const options = useMemo(() => ({
        containerClass: "tag-cloud",
        itemClass: "tag",
        radius: 250,
        direction: 225,
        initSpeed: "fast",
        maxSpeed: "normal"
    }), []);

    useEffect(() => {
        const container = containerRef.current;

        if (!initializedRef.current && container) {
            TagCloud(container, texts, options);
            initializedRef.current = true;
        }

        return () => {
            if (container) {
                TagCloud(container).destroy();
            }
        };
    }, [texts, options]);

    return (
        <div className="Introduction">
            <div className="myIntroduction">
                <h2>Introduction</h2>
                <p>As a seasoned software developer with a robust foundation in web technologies, I bring a wealth of experience to the table. My journey includes not only successful completion of coding bootcamps but also academic pursuits at a prestigious European university, coupled with active participation in the Erasmus+ mobility program at Daugavpils University in Latvia. A nimble learner by nature, I thrive on collaborating closely with clients to craft tailored solutions that meet their specific needs. My commitment to excellence and passion for innovative problem-solving make me a valuable asset in the dynamic field of software development.</p>
                <p>You'll find a comprehensive list of technologies on the right side and below, showcasing my extensive hands-on experience and proficiency gained through practical engagements.</p>
            </div>
            <div ref={containerRef} className="tagcloud"></div>
        </div>
    );
};

export default Introduction;
