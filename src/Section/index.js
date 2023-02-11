import "./style.css";

const Section = ({header, body, extraHeaderContent}) => (
    <section className="section">
            <header className="section__headerContainer">
                <h2 className="section__header">{header}</h2>
                {extraHeaderContent}
            </header>
            {body}
        </section>
);

export default Section;