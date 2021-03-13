// Libraries , css and static files
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../utils/AuthContext";
import Carousel from "react-elastic-carousel";
import CollectionCard from "../../components/collection-card/CollectionCard";
import AddCollection from "../../components/add-collection/AddCollection";
import Button from "../../components/util/button/Button";

import "./AuthHome.css";

export default function AuthHome() {
  const [auth, setAuth] = useContext(AuthContext);
  const [show, setShow] = useState(false);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 1000, itemsToShow: 3 },
    { width: 1500, itemsToShow: 4 },
    { width: 2000, itemsToShow: 5 },
  ];

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_DOMAIN}/auth/user`, { credentials: "include" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        // setAuth({ isAuth: true, userId: data.user._id, name: data.user.name, email: data.user.email });
      })
      .catch((err) => console.log(err));
  }, [setAuth]);

  return (
    <div className="AuthHome-container">
      <AddCollection show={show} setShow={setShow} />
      <div className="AuthHome-hero">
        <div className="AuthHome-HeroTextContainer">
          <h1 className="AuthHome-HeroTextHeading">Welcome back</h1>
          <p className="AuthHome-HeroTextLead">View all your collection's here</p>
          <Link to={`/user/${auth.userId}/test`}>
            <Button className="AuthHome-btn">Test yourself</Button>
          </Link>
          <Button ghost onClick={() => setShow(true)}>
            Create new collection
          </Button>
        </div>
      </div>
      <div className="AuthHome-grey">
        <div className="AuthHome-CollectionsContainer">
          <Carousel breakPoints={breakPoints}>
            {auth.collections.map((collection) => {
              return (
                <CollectionCard
                  id={collection.id}
                  key={collection.id}
                  name={collection.name}
                  icon={collection.icon}
                  flashcardAmount={collection.flashcards.length}
                />
              );
            })}
          </Carousel>
        </div>
        <div className="AuthHome-red"></div>
      </div>
    </div>
  );
}
