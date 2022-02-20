import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import classes from "./Users.module.css";
import userImg from "../../assets/ninja.jpg";
import { Loading } from "../helpers/Loading";
import { useParams, Navigate, useNavigate } from "react-router-dom";

export const UserDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    //Api Call of the specific ID
    const getUser = async () => {
      const url = `https://my-user-manager.herokuapp.com/users/${id}`;
      const resp = await fetch(url);
      const results = await resp.json();
      setUser(results);
      setLoading(true);
    };
    getUser();
  }, [id]);

  const handleReturn = () => {
    navigate(-1);
  };

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <Container fluid className={classes.userSection}>
      <h2 className={classes.userSubtitle}>User Info</h2>
      <Container className={classes.userWrapper}>
        <Card className={classes.userCardViewDetail}>
          <Row>
            {loading ? ( // Display a Loading when is getting the data from the API
              <>
                <Col md={3} className={classes.userDetailImg}>
                  <Card.Img src={userImg} alt="card-img" />
                </Col>
                <Col md={9} className={classes.userDetailInfo}>
                  <Card.Body
                    className={classes.userDetailInfoText}
                    data-testid={`testUser`}
                  >
                    <Card.Title>ID:{user.id}</Card.Title>
                    <Card.Title>Name: {user.name}</Card.Title>
                    <Card.Title>Email: {user.email}</Card.Title>
                    <Button
                      className={`${classes.btnPrimary} ${classes.btnDetail}`}
                      onClick={handleReturn}
                    >
                      Retrun
                    </Button>
                  </Card.Body>
                </Col>
              </>
            ) : (
              <Loading />
            )}
          </Row>
        </Card>
      </Container>
    </Container>
  );
};
