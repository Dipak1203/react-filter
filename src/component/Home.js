import React, { useState } from "react";
// import Button from "./Button";
import Card from "react-bootstrap/Card";
import Data from "./Data";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
const Home = () => {
  const [item, setItem] = useState(Data);

  const filterItem = (itm) => {
    const fildata = item.filter((ele, index) => {
      return ele.category == itm;
    });
    setItem(fildata);
  };
  return (
    <>
      <div className="container mt-5">
        <div className="btn-group d-flex justify-content-center gap-lg-5 align-items-center">
          <Tooltip title="PIZZA">
            <Button variant="contained" onClick={() => filterItem("pizza")}>
              PIZZA
            </Button>
          </Tooltip>
          <Tooltip title="MOMOS">
            <Button variant="contained" onClick={() => filterItem("momos")}>
              MOMOS
            </Button>
          </Tooltip>
          <Tooltip title="COFFEE">
            <Button variant="contained" onClick={() => filterItem("tea")}>
              COFFEE
            </Button>
          </Tooltip>
          <Tooltip title="CHAUMIN">
            <Button variant="contained" onClick={() => filterItem("chaumin")}>
              CHAUMIN
            </Button>
          </Tooltip>
          <Tooltip title="BURGER">
            <Button variant="contained" onClick={() => filterItem("burger")}>
              BURGER
            </Button>
          </Tooltip>
          <Tooltip title="ALL">
            <Button variant="contained" onClick={() => setItem(Data)}>ALL</Button>
          </Tooltip>
        </div>
        <div className="row gap-lg-3 mt-5">
        {item.map((ele, index) => {
        return (
          <Card style={{ width: "22rem" }} key={index} border="none">
            <Card.Img variant="top" src={ele.img} style={{height:'16rem'}}/>
            <Card.Body>
              <Card.Title>{ele.category}</Card.Title>
              <Card.Text>
                {ele.desc}
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
        </div>
      </div>
    </>
  );
};

export default Home;
