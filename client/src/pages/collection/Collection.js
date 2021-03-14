// Libraries , css and static files
import React, { useContext, useState, useEffect } from "react";
import { Redirect, useParams, Link } from "react-router-dom";
import { AuthContext } from "../../utils/AuthContext";
import { icons } from "../../utils/icons";
import LoadingSpinner from "../../components/util/loadingSpinner/LoadingSpinner";
import Carousel from "react-elastic-carousel";
import Flashcard from "../../components/flashcard/Flashcard";
import AddFlashcard from "../../components/add-flashcard/AddFlashcard";
import Button from "../../components/util/button/Button";

import "./Collection.css";

export default function Collections() {
  const { auth } = useContext(AuthContext);
  const [deleted, setDeleted] = useState(false);
  const [show, setShow] = useState(false);
  const [currentCollection, setCurrentCollection] = useState();
  const { collectionId } = useParams();

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 750, itemsToShow: 2 },
    { width: 1000, itemsToShow: 3 },
    { width: 1500, itemsToShow: 4 },
    { width: 2000, itemsToShow: 5 },
  ];

  useEffect(() => {
    setCurrentCollection(auth.collections.filter((collection) => collection._id === collectionId)[0]);
  }, [auth.collections, collectionId]);

  function editCollection() {
    console.log("Edit collection");
  }

  function deleteCollection() {
    fetch(`${process.env.REACT_APP_API_DOMAIN}/collections/${collectionId}`, {
      credentials: "include",
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setDeleted(true);
      })
      .catch((err) => console.log(err));
  }

  const content = currentCollection ? (
    <>
      <AddFlashcard show={show} setShow={setShow} collectionId={collectionId} />
      <div className="AuthHome-container">
        <div className="AuthHome-hero">
          <div className="Collection-HeroTextContainer">
            <div className="Collection-header">
              <i className={`${icons[currentCollection.icon]} Collection-icon`}></i>
              <h1 className="Collection-HeroTextHeading">{currentCollection.name}</h1>
            </div>
            <p className="Collection-HeroTextLead">View all the flashcards below</p>
            <Link to={`/user/${auth.userId}/test/${currentCollection.id}`}>
              <button className="AuthHome-button PrimaryButton">Start test</button>
            </Link>
            <div className="Collection-controls">
              <div className="Collection-edit-btns">
                <Button className="Collection-edit-btn" onClick={() => editCollection()} ghost>
                  Edit collection
                </Button>
                <Button className="Collection-delete-btn" onClick={() => deleteCollection()} ghost>
                  Delete collection
                </Button>
              </div>
              <Button className="Collection-add-btn" onClick={() => setShow(true)}>
                Create new flashcard
              </Button>
            </div>
          </div>
        </div>
        <div className="AuthHome-grey">
          <div className="AuthHome-CollectionsContainer">
            <Carousel breakPoints={breakPoints}>
              {currentCollection.flashcards.map((flashcard, index) => {
                return (
                  <Flashcard
                    frontContent={flashcard.question}
                    backContent={flashcard.answer}
                    key={index}
                    id={flashcard._id}
                    currentCollectionId={collectionId}
                  />
                );
              })}
            </Carousel>
          </div>

          <div className="AuthHome-red"></div>
        </div>
      </div>
    </>
  ) : (
    <div className="page-center">
      <LoadingSpinner />
    </div>
  );

  return deleted ? <Redirect to="/" /> : content;
}
