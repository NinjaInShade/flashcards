// Libraries , css and static files
import React, { useState, useContext } from "react";
import "./AuthHome.css";
import { Link } from "react-router-dom";
import CollectionCard from "../../components/collection-card/CollectionCard";
import { AuthContext } from "../../utils/AuthContext";

export default function AuthHome() {
  const [auth] = useContext(AuthContext);
  const Collections = auth.collections;
  const [shownCollections, setShownCollections] = useState(Collections.slice(0, 7));

  function generateNextArr(oldArr) {
    let newArray = oldArr;
    let lastElement = newArray.pop();
    newArray.unshift(lastElement);
    return newArray;
  }

  function generatePrevArr(oldArr) {
    let newArray = oldArr;
    let lastElement = newArray.shift();
    newArray.push(lastElement);
    return newArray;
  }

  function prevHandler() {
    setShownCollections(generatePrevArr(shownCollections).slice(0, 7));
  }

  function nextHandler() {
    setShownCollections(generateNextArr(shownCollections).slice(0, 7));
  }

  return (
    <div className="AuthHome-container">
      <div className="AuthHome-hero">
        <div className="AuthHome-HeroTextContainer">
          <h1 className="AuthHome-HeroTextHeading">Welcome back</h1>
          <p className="AuthHome-HeroTextLead">View all your collection's</p>
          <Link to={`/user/${auth.userId}/test`}>
            <button className="AuthHome-button">Test yourself</button>
          </Link>
        </div>
      </div>
      <div className="AuthHome-grey">
        <div className="AuthHome-CollectionsRow">
          <div className="AuthHome-FadeOverlay AuthHome-FadeOverlayLeft"></div>
          <div className="AuthHome-FadeOverlay AuthHome-FadeOverlayRight"></div>
          {shownCollections.map((collection) => {
            return <CollectionCard id={collection.id} key={collection.id} name={collection.name} icon={collection.icon} flashcardAmount="9" />;
          })}
        </div>
        <div className="AuthHome-red">
          <button>
            <svg width="122" height="75" viewBox="0 0 122 75" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={prevHandler}>
              <path className="AuthHome-fill" d="M5.33279e-06 37.049L45.75 2.07245e-05L45.75 27.7867L122 27.7867L122 46.3112L45.75 46.3112L45.75 74.0979L5.33279e-06 37.049Z" fill="white" />
            </svg>
          </button>
          <button>
            <svg width="122" height="75" viewBox="0 0 122 75" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "rotate(180deg)" }} onClick={nextHandler}>
              <path className="AuthHome-fill" d="M5.33279e-06 37.049L45.75 2.07245e-05L45.75 27.7867L122 27.7867L122 46.3112L45.75 46.3112L45.75 74.0979L5.33279e-06 37.049Z" fill="white" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

/* <DonutChart size="150" strokewidth="25" value={`${(values.groups.value / values.groups.max) * 100}`} valuelabel={`${values.groups.value}/${values.groups.max}`} />
<DonutChart size="150" strokewidth="25" value={`${(values.flashcards.value / values.flashcards.max) * 100}`} valuelabel={`${values.flashcards.value}/${values.flashcards.max}`} /> */
