const AnimationCard = ({ title, img }) => {


  return (
    <section>
      <img src={img} alt={title} />
      <h2>{title}</h2>
    </section>
  );
};

export default AnimationCard;