import "../style/AnimationCard.css";

const AnimationCard = ({ title, img }) => {


  return (
    <section className="animation-card">
      <img src={img} alt={title} className="animation-image" />
      <h2 className="animation-title">{title}</h2>
    </section>
  );
};

export default AnimationCard;