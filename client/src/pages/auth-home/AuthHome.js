// Libraries , css and static files
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../utils/AuthContext";
import { icons } from "../../utils/icons";
import LoadingSpinner from "../../components/util/loadingSpinner/LoadingSpinner";
import Carousel from "react-elastic-carousel";
import CollectionCard from "../../components/collection-card/CollectionCard";
import AddCollection from "../../components/add-collection/AddCollection";
import Button from "../../components/util/button/Button";

import "./AuthHome.css";

export default function AuthHome({ loading }) {
  const { auth } = useContext(AuthContext);
  const [showAdd, setShowAdd] = useState(false);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 1000, itemsToShow: 3 },
    { width: 1500, itemsToShow: 4 },
    { width: 2000, itemsToShow: 5 },
  ];

  return (
    <div className="AuthHome-container">
      <AddCollection show={showAdd} setShow={setShowAdd} />
      <div className="AuthHome-hero">
        <div className="AuthHome-HeroTextContainer">
          <h1 className="AuthHome-HeroTextHeading">Welcome back</h1>
          <p className="AuthHome-HeroTextLead">View all your collection's here</p>
          <Link to={`/user/${auth.userId}/test`}>
            <Button className="AuthHome-btn">Test yourself</Button>
          </Link>
          <Button ghost onClick={() => setShowAdd(true)}>
            Create new collection
          </Button>
        </div>
      </div>
      <div className="AuthHome-grey">
        <div className="AuthHome-CollectionsContainer" key={auth.collections}>
          {loading ? (
            <LoadingSpinner />
          ) : (
            <Carousel breakPoints={breakPoints} key={auth.collections}>
              {auth.collections.map((collection, index) => {
                return (
                  <CollectionCard
                    id={collection._id}
                    key={index}
                    name={collection.name}
                    icon={icons[collection.icon]}
                    flashcardAmount={collection.flashcards.length}
                  />
                );
              })}
            </Carousel>
          )}
        </div>
        <div className="AuthHome-red"></div>
      </div>
    </div>
  );
}
