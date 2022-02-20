import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Loading } from "../helpers/Loading";
import { UserCard } from "./UserCard";

import classes from "./Users.module.css";

export const UsersPage = () => {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    getUsers();
  }, []);

  //Api Call
  const getUsers = async () => {
    const url = "https://my-user-manager.herokuapp.com/users";
    const resp = await fetch(url);
    const results = await resp.json();

    const apiUsers = results.map((user) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
      };
    });
    setUsers(apiUsers);
    setLoading(true);
  };

  return (
    <Container fluid className={classes.userSection}>
      <Container className={classes.userWrapper}>
        <Col md={12} className={classes.userInfoTitle}>
          <div>
            <h1 className={classes.userHeading}>
              Code Challenge &nbsp;
              <strong className="turquoise"> React </strong>
              &nbsp; Junior
            </h1>
            <h2 className={classes.userSubtitle}>
              Carlos Manuel Hernández Montero
            </h2>
          </div>
        </Col>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {loading ? ( // Display a Loading when is getting the data from the API
            users.map(
              (
                person // Display Api Data
              ) => (
                <Col
                  md={5}
                  key={person.id}
                  className={classes.userCard}
                  data-testid={`testUser${person.id}`} // Only for Testing Purposes
                >
                  <UserCard
                    md={4}
                    className={classes.userCard}
                    name={person.name}
                    email={person.email}
                    {...person}
                  />
                </Col>
              )
            )
          ) : (
            <Loading />
          )}
        </Row>
      </Container>
    </Container>
  );
};
