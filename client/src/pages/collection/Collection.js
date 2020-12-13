// Libraries , css and static files
import React, { useContext, useState } from "react";
import GliderComponent from "react-glider-carousel";
import { Redirect, useParams, Link } from "react-router-dom";
import "./Collection.css";
import { AuthContext } from "../../utils/AuthContext";
import Flashcard from "../../components/flashcard/Flashcard";
import AddFlashcard from "../../components/add-flashcard/AddFlashcard";

export default function Collections() {
  const [auth] = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const { collectionId } = useParams();
  const currentCollection = auth.collections.filter((collection) => collection.id === collectionId)[0];
  console.log(currentCollection);

  const content = (
    <React.Fragment>
      <AddFlashcard show={show} setShow={setShow} />
      <div className="AuthHome-container">
        <div className="AuthHome-hero">
          <div className="AuthHome-HeroTextContainer">
            <h1 className="AuthHome-HeroTextHeading">
              <i className={`${currentCollection.icon} Collection-icon`}></i>
              {currentCollection.name}
            </h1>
            <p className="AuthHome-HeroTextLead">View all the flashcards below</p>
            <Link to={`/user/${auth.userId}/test/${currentCollection.id}`}>
              <button className="AuthHome-button PrimaryButton">Start test</button>
            </Link>
            <button className="SecondaryButton" onClick={() => setShow(true)}>
              Create new flashcard
            </button>
          </div>
        </div>
        <div className="AuthHome-grey">
          <div className="AuthHome-CollectionsContainer">
            <GliderComponent
              hasArrows={true}
              hasDots={true}
              settings={{ slidesToShow: "auto", itemWidth: 300, slidesToScroll: 1, draggable: true, dragVelocity: 1 }}
            >
              {currentCollection.flashcards.map((flashcard) => {
                return <Flashcard frontContent={flashcard.question} backContent={flashcard.answer} key={Math.random()} />;
              })}
            </GliderComponent>
          </div>

          <div className="AuthHome-red"></div>
        </div>
      </div>
    </React.Fragment>
  );

  return auth.isAuth ? content : <Redirect to="/" />;
}
