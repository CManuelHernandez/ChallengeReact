import React from "react";
import { Button, Spinner } from "react-bootstrap";

export const Loading = () => {
  return (
    <>
      <Button variant="danger" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    </>
  );
};
