import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function CompetenceCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Je suis une étudiante passionnée par l'apprentissage et j'ai à cœur de devenir une développeuse full-stack compétente. Je suis constamment à la recherche de nouvelles connaissances et compétences dans le domaine de la programmation et du design, et je cherche à maîtriser différents langages de programmation et technologies web et de combiner mes compétences en génie avec ma créativité pour créer des nouvelles choses. Je suis motivée par les défis techniques et je m'efforce de repousser les limites pour atteindre l'excellence dans mon domaine.  <span className="purple"></span>
            <span className="purple"></span>
            <br />
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
export default CompetenceCard;
