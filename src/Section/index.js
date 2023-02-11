import "./style.css";

const Section = ({ header, body, extraHeaderContent }) => (
    <section className="section">
        <header className="section__header">
            <h2 className="section__headerName">{header}</h2>
            {extraHeaderContent}
        </header>
        {body}
    </section>
);

export default Section;