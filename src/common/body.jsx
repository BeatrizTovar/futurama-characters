import React, { Fragment } from "react";
import { Image, Stack } from "grommet";
// import Amy from "../images/characters";
// import StarBackground from "../images/misc/StarBackground.png";

const Body = ({ characters }) => {
  // debugger;
  return (
    <Fragment>
      <Stack>
        <div className="hqBack">
          <section className="card">
            {characters.map(char => (
              <div className="card-content" key={char._id}>
                <Image src={char.src} />
                <p>{`${char.id}`}</p>
                <div className="card-footer">
                  {/* <p>Desc: {char.desc}</p> */}
                  <p>Quote: {"random Quote"}</p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </Stack>
    </Fragment>
  );
};

export default Body;
