// Libraries , css and static files
import React, { useState, useContext } from "react";
import GliderComponent from "react-glider-carousel";
import "./AuthHome.css";
import { Link } from "react-router-dom";
import CollectionCard from "../../components/collection-card/CollectionCard";
import AddCollection from "../../components/add-collection/AddCollection";
import { AuthContext } from "../../utils/AuthContext";

export default function AuthHome() {
  const [auth] = useContext(AuthContext);
  const [show, setShow] = useState(false);

  return (
    <div className="AuthHome-container">
      <AddCollection show={show} setShow={setShow} />
      <div className="AuthHome-hero">
        <div className="AuthHome-HeroTextContainer">
          <h1 className="AuthHome-HeroTextHeading">Welcome back</h1>
          <p className="AuthHome-HeroTextLead">View all your collection's here</p>
          <Link to={`/user/${auth.userId}/test`}>
            <button className="AuthHome-button PrimaryButton">Test yourself</button>
          </Link>
          <button className="SecondaryButton" onClick={() => setShow(true)}>
            Create new collection
          </button>
        </div>
      </div>
      <div className="AuthHome-grey">
        <div className="AuthHome-CollectionsContainer">
          <GliderComponent hasArrows={true} hasDots={true} settings={{ slidesToShow: 5, slidesToScroll: 1, draggable: true, dragVelocity: 1 }}>
            {auth.collections.map((collection) => {
              return <CollectionCard id={collection.id} key={collection.id} name={collection.name} icon={collection.icon} flashcardAmount={collection.flashcards.length} />;
            })}
          </GliderComponent>
        </div>
        <div className="AuthHome-red"></div>
      </div>
    </div>
  );
}

/* <DonutChart size="150" strokewidth="25" value={`${(values.groups.value / values.groups.max) * 100}`} valuelabel={`${values.groups.value}/${values.groups.max}`} />
<DonutChart size="150" strokewidth="25" value={`${(values.flashcards.value / values.flashcards.max) * 100}`} valuelabel={`${values.flashcards.value}/${values.flashcards.max}`} /> */
