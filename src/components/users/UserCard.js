import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import classes from "./Users.module.css";
import PropTypes from "prop-types";

export const UserCard = ({ id, name, email }) => {
  return (
    <Card className={classes.userCardView}>
      <Card.Body>
        <Card.Title>
          <strong>ID :</strong> {id}
        </Card.Title>
        <Card.Text>NAME: {name}</Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>EMAIL: {email}</Card.Text>
        <Button className={classes.btnPrimary} href={`/${id}`}>
          Detail
        </Button>
      </Card.Body>
    </Card>
  );
};

UserCard.protoType = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
